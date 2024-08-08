import { useContext, useEffect, useState } from "react";
import { axiosClient } from "../services/axios-client";
import { set, get, del, keys } from "idb-keyval";
import { FormatError } from "../utils/formmaters";
import { AuthContext } from "../context/AuthContex";
import { onFailure } from "../utils/notifications/OnFailure";

export const COMPANY_PROFILE_Key = "Company Profile Database";

function useCompanyProfile() {
  const { authDetails } = useContext(AuthContext);

  const client = axiosClient(authDetails.token, true);

  const [loading, setLoading] = useState(false);

  const [details, setDetails] = useState({
    //beenRetrieved check it data has instantialted
    beenRetreived: false,
    employer_id: authDetails.user.id,
    company_profile: "",
    logo_image: "",
    company_name: "",
    email: "",
    phone_number: "",
    website: "",
    year_of_incorporation: null,
    rc_number: "",
    company_size: "",
    sector: "",
    introduction_video_url: "",
    profile_url: "",
    company_campaign_photos: [],
    social_media: [],
    network: "",
    location: "",
    address: "",
  });

  const [error, setError] = useState({
    message: "",
    error: "",
  });

  const onTextChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };



  const getProfileInfo = async () => {
    setLoading(true)
    try {
      const response = await client.get(`/employer/getEmployer/${authDetails.user.id}`)
      if(response.data.details){
        await set(COMPANY_PROFILE_Key, response.data.details);
        setDetails({...response.data.details, beenRetreived: true})
      }
    } catch (error) {
      console.log(error)
      setDetails({...response.data.details, beenRetreived: true})
    }
  }

  //Function to map details to a form data
  const mapToFormData = () => {
    const formData = new FormData();
    Object.keys(details).map((current) => {
      const key = current;
      const val = details[current];
      if (val) {
        if (details.hasOwnProperty(key) && Array.isArray(val)) {
          if (val.length !== 0) {
            details[key].forEach((file) => {
              formData.append(`${key}[]`, file);
            });
          }
        } else {
          formData.append(current, details[current]);
        }
      }
      
    });

    return formData;
  };



  //Api request to update profile
  const updateCompanyProfile = async (handleSuccess) => {
    setLoading(true);
    try {
      const data = mapToFormData();
      const response = await client.post(
        `/employer/UpdateEmployer/${details.employer_id}`,
        data
      );

      //On success, save response data to index db
      await set(COMPANY_PROFILE_Key, response.data.employer);
      handleSuccess();
    } catch (error) {
      console.log(error);
      // FormatError(error, setError, "Update Error");
    } finally {
      setLoading(false);
    }
  };

  //   useEffect(() => console.log(details), [details]);
  useEffect(() => {
    if (error.message && error.error) {
      onFailure(error);
    }
  }, [error.message, error.error]);

  useEffect(() => {
    //Initailise value from index db
    const initValue = async () => {
      try {
        const storedValue = await get(COMPANY_PROFILE_Key);
        if (storedValue !== undefined) {
          setDetails({...storedValue, beenRetreived:true, company_campaign_photos: []});
        } else {
          await getProfileInfo()
        }
      } catch (error) {
        FormatError(error, setError, "Index Error");
      }
    };

    initValue();
  }, []);
  

  return { loading, details, onTextChange, setDetails, updateCompanyProfile };
}

export default useCompanyProfile;
