import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContex";
import { axiosClient } from "../services/axios-client";
import { onFailure } from "../utils/notifications/OnFailure";
import { StaffManagementContext } from "../context/StaffManagementModule";

export const allStatus = ['approved', 'pending', 'rejected', 'suspend']
function useStaffUser() {
  const { authDetails } = useContext(AuthContext);
  const client = axiosClient(authDetails?.token);
  const { profileDetails, getStaffProfile } = useContext(StaffManagementContext);

  //availabilit status => 1 for available, 0 for not
  const updateAvailabilityStatus = async (staffId, status) => {
    try {
      const result = await client.post(
        `/domesticStaff/update-profile/${staffId}`,
        { availability_status: status }
      );
      await getStaffProfile();
      return true;
    } catch (error) {
      // console.log('staff user',error)
      onFailure({
        message: "Error",
        error: "Could not update your status",
      });
      return false;
    }
  };


  const getStyling = (status) => {
      switch(status){
        case allStatus[0] : return 'text-primaryColor';
        case allStatus[1] : return 'text-yellow-500';
        case allStatus[2] : return 'text-red-500';
        case allStatus[3] : return 'text-red-700';
        default : return 'text-yellow-500'
      }
  }

  return {
    updateAvailabilityStatus,
    getStyling,
    allStatus
  };
}

export default useStaffUser;
