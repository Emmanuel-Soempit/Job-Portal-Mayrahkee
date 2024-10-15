import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContex";
import { axiosClient } from "../../../services/axios-client";
import { onSuccess } from "../../../utils/notifications/OnSuccess";
import { RiLoader2Fill } from "react-icons/ri";
import { onFailure } from "../../../utils/notifications/OnFailure";

function StaffInformation() {
  const location = useLocation();
  const { data } = location?.state;
  const [cart, setCart] = useState();
  const [loading, setLoading] = useState(false);
  const { authDetails } = useContext(AuthContext);
  const client = axiosClient(authDetails.token);

  const filterProfileDetails =
    data &&
    Object.keys(data).filter(
      (currentKey) =>
        currentKey !== "created_at" &&
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
        currentKey !== "subcategory" &&
        currentKey !== "resume" &&
        currentKey !== "availability_status"
    );

  const addToCart = async () => {
    setLoading(true);
    try {
      const response = await client.post("/staff-cart/add", {
        user_id: authDetails.user.id,
        user_type: authDetails.user.role,
        domestic_staff_id: data.id,
      });
      onSuccess({
        message: "User sucessfully added",
        success: "Domestic staff added to cart successfully",
      });
    } catch (error) {
      onFailure({
        message: "Collection Failed",
        error: "Failed to add to collection",
      });
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full  px-12 flex  pt-5 flex-col gap-5">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">
          {data["first_name"]} {data["surname"]}'s Profile Information{" "}
        </h1>
        <button
          onClick={addToCart}
          className="p-1 flex gap-1 text-sm items-center hover:bg-yellow-500 border border-primaryColor"
        >
          Add to Collection
          {loading && <RiLoader2Fill className="animate-spin" />}
        </button>
      </div>

      {data && (
        <>
          <div className="grid grid-cols-2 gap-x-3 gap-y-5 p-2 w-full text-gray-600">
            {filterProfileDetails.map((currentKey) => {
              const detail = data[currentKey];
              const labelText = currentKey.replace(/_/g, " ").toUpperCase();

              return (
                <div className="flex flex-col gap-1">
                  <label>{labelText}</label>
                  <span className="font-semibold">
                    {detail ? detail : "Nothing to show"}
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default StaffInformation;
