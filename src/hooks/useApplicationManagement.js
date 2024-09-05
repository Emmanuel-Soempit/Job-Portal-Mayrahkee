import { useContext, useEffect, useState } from "react";
import { axiosClient } from "../services/axios-client";
import { AuthContext } from "../context/AuthContex";
import { FormatError } from "../utils/formmaters";
import { onFailure } from "../utils/notifications/OnFailure";
import { get, set } from "idb-keyval";
import { stages } from "../utils/constants";
import { interviewOptions } from "../company-module/components/applicants/ScheduleInteviewModal";

const APPLICANTS_KEY = "Applicants Database";

function useApplicationManagement() {
  const { authDetails } = useContext(AuthContext);
  const client = axiosClient(authDetails?.token);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    message: "",
    error: "",
  });
  const [applicants, setApplicants] = useState([]);
  const [interviewDetails, setInterviewDetails] = useState({});

  const onTextChange = (e) => {
    const { name, value } = e.target;
    setInterviewDetails({ ...interviewDetails, [name]: value });
  };

  const getApplicantsByEmployee = async () => {
    setLoading(true);
    try {
  
      const response = await client(`getEmployerApply/${authDetails?.user?.id}`);
      await set(APPLICANTS_KEY, response.data.job_application);
      setApplicants(response.data.job_application);
    } catch (error) {
      FormatError(error, setError, "Applicants Error");
    } finally {
      setLoading(false);
    }
  };

  const getApplicant = async (applicantId, setApplicant) => {
    setLoading(true);
    const applicant = applicants.find((current) => current.id === Number(APPLICANTS_KEY));
    if(applicant){
      setApplicant(applicant.details)
      return
    }
    try {
    
      const response = await client(`/candidate/getCandidate/${applicantId}`);
      setApplicant(response.data.details);
    } catch (error) {
      FormatError(error, setError, "Applicants Error");
    } finally {
      setLoading(false);
    }
  };

  const scheduleInterview = async (
    applicant,
    data,
    setData,
    handleOnSuccess, 
    option
  ) => {
    setLoading(true);
    try {

       if(!option.name) throw Error('An inteview option must be selected')

      const primarydata = {
        job_application_id: data.id,
        candidate_id: applicant.candidate_id,
        option: option.name
      };
      const updateprimarydata = {
        job_id: data.job_id,
        candidate_id: applicant.candidate_id,
      };

      const interviewResponse = await client.post(`/interviews`, {
        ...primarydata,
        ...interviewDetails,
      });
      const interviewData = interviewResponse.data.interview;
      const applicationUpdateResponse = await client.post(
        `/applicationRespond`,
        {
          ...updateprimarydata,
          status: stages[1].name,
          interview_id: interviewData.id,
        }
      );
      const applicatonUpdateData =
        applicationUpdateResponse.data.job_application;
      setData(applicatonUpdateData);
      handleOnSuccess();
    } catch (error) {
      FormatError(error, setError, "Schedule Error");
    } finally {
      setLoading(false);
    }
  };

  const getResume = async (resumeId, setResume) => {
    setLoading(true);
    try {
      if (!resumeId) throw Error('Resume not attached')
      const { data } = await client.get(`/resumeById/${resumeId}`);
       setResume(data[0])
    } catch (error) {
      FormatError(error, setError, "Resume Error");
    } finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    if (error.error && error.message) {
      onFailure(error);
    }
  }, [error.message, error.error]);

  useEffect(() => {
    const initValue = async () => {
      try {
        const storedValue = await get(APPLICANTS_KEY);
        if (storedValue !== undefined) {
          setApplicants([...storedValue]);
        } else {
          await getApplicantsByEmployee();
        }
      } catch (error) {
        FormatError(error, setError, "Index Error");
      }
    };

    initValue();
  }, []);

  return {
    loading,
    applicants,
    interviewDetails,
    scheduleInterview,
    onTextChange,
    getApplicantsByEmployee,
    getApplicant,
    getResume,
  };
}

export default useApplicationManagement;
