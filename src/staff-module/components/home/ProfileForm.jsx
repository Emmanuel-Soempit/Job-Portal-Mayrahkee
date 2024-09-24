import { useForm } from "react-hook-form";
import { FormatError, FormatPrice } from "../../../utils/formmaters";
import FormButton from "../../../components/FormButton";
import { useContext, useEffect, useState } from "react";
import { axiosClient } from "../../../services/axios-client";
import { AuthContext } from "../../../context/AuthContex";
import { IoMdAddCircle } from "react-icons/io";
import { get, set } from "idb-keyval";
import { onFailure } from "../../../utils/notifications/OnFailure";

const PROFILE_DETAILS_KEY = "Staff Profile Detaials Database";

function ProfileForm() {
  const { authDetails } = useContext(AuthContext);
  const client = axiosClient(authDetails?.token);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    message: "",
    error: "",
  });
  const [profileDetails, setProfileDetails] = useState();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await client.post(
        `/domesticStaff/update-profile/${authDetails.user.id}`,
        { ...data }
      );
    } catch (error) {}
  };

  const filterProfileDetails = profileDetails && Object.keys(profileDetails).filter(
    (currentKey) => currentKey !== "created_at" &&
     currentKey !== "updated_at" &&
     currentKey !== "id" &&
     currentKey !== "staff_category" &&
     currentKey !== "staff_category" &&
     currentKey !== "guarantor_verification_status" &&
     currentKey !== "residence_verification_status" &&
     currentKey !== "medical_history_verification_status" &&
     currentKey !== "police_report_verification_status" &&
     currentKey !== "previous_employer_verification_status" &&
     currentKey !== "family_verification_status" && 
     currentKey !== "contact_information" && 
     currentKey !== "subcategory"  &&
     currentKey !== "resume"  &&
     currentKey !== "availability_status"  
  );

  useEffect(() => {
    const initProfileDetails = async () => {
      setLoading(true);
      try {
        const dataFromDB = await get(PROFILE_DETAILS_KEY);
        if (dataFromDB) {
          setProfileDetails(dataFromDB);
          return;
        }

        const { data } = await client.get(
          `/domesticStaff/get-staff/${authDetails.user.id}`
        );
        await set(PROFILE_DETAILS_KEY, data.data);
        setProfileDetails(data.data);
      } catch (error) {
        FormatError(error, setError, "Profile Error");
      }
    };

    initProfileDetails();
  }, []);

  useEffect(() => {
    if (error.error && error.message) {
      onFailure(error);
    }
  }, [error.message, error.error]);

  return (
    <div className="w-full flex flex-col gap-10">
      <h1 className="text-xl font-semibold">Update Your Profile</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-x-3 gap-y-5 p-2 w-full text-gray-600"
      >
        {filterProfileDetails ? (
          <>
            {filterProfileDetails.map((currentKey) => {
              const detail = profileDetails[currentKey];
              const labelText = currentKey.replace(/_/g, " ").toUpperCase();

              return (
                <div className="flex flex-col gap-1">
                  <label>{labelText}</label>
                  <input
                    className="p-1 border focus:outline-none border-gray-900  rounded-md"
                    type="text"
                    defaultValue={detail}
                    {...register(currentKey)}
                  />
                </div>
              );
            })}
            <FormButton>Update Profile</FormButton>
          </>
        ) : (
          <span>Loading Data</span>
        )}
      </form>
    </div>
  );
}

export default ProfileForm;