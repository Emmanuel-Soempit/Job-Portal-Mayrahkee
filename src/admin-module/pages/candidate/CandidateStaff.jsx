import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { FaArrowLeftLong } from "react-icons/fa6";
import UseAdminManagement from "../../../hooks/useAdminManagement";
import DataTableComponent from "../../components/DataTable/DataTableComponent";

const CandidateStaff = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [staffDetails, setStaffDetails] = useState([]);
  const [error, setError] = useState(null);
  const { getCandidateDomesticStaff, loading } = UseAdminManagement();

  useEffect(() => {
    (async () => {
      try {
        const data = await getCandidateDomesticStaff(id);
        if (data) {
          setStaffDetails(data);
        } else {
          console.error("No data received");
        }
      } catch (error) {
        console.error("Error fetching staff details:", error);
        setError(error);
      }
    })();
  }, [id]);

  if (!staffDetails.length) {
    return <div className="py-6"><h1 className="font-bold text-2xl">No staff details found</h1></div>;
  }

  const heading = ["ID", "Staff Name", "Start Date", "End Date", "Status", "StaffID"];
  
  const data = staffDetails.map(staff => ({
    [heading[0].toLowerCase()]: staff.id,
    [heading[1].toLowerCase()]: staff.staff_name, 
    [heading[2].toLowerCase()]: staff.start_date,
    [heading[3].toLowerCase()]: staff.end_date,
    [heading[4].toLowerCase()]: staff.status,
    [heading[5].toLowerCase()]: staff.domestic_staff_id,
  }));

  return (
    <div className="mx-14 mt-10 mb-24">
      <Button label="Back" className="mb-4" outlined onClick={() => navigate(-1)} icon={<FaArrowLeftLong className="me-4" />} />
      <h2 className="text-black border-b border-gray-500 text-2xl font-bold mt-10">Candidate's Staffs</h2>
      <DataTableComponent heading={heading} data={data} loading={loading} name="domestic-staff" />
    </div>
  );
};

export default CandidateStaff;