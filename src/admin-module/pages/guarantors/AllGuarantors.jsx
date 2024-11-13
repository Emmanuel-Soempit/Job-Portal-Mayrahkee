import { useState, useEffect } from "react";
import useAdminManagement from "../../../hooks/useAdminManagement";
import DataTableComponent from "../../components/DataTable/DataTableComponent";
import { Button } from "primereact/button";
import { FaArrowLeftLong } from "react-icons/fa6";

function AllGuarantors() {
  const { getStaffReport, loading } = useAdminManagement();
  const [guarantors, setGuarantors] = useState([]);

  useEffect(() => {
    ( async () => {
      const data = await getStaffReport("guarantor");
      console.log("Fetched Data:", data); // Log the fetched data
      
      if (data) {
        setGuarantors(data.guarantors);
      } else {
        console.error("No data received");
      }
    })();
  }, []);

  const heading = ["ID", "Name","Email", "Occupation", "Residential Acdress", "DOB", "Status","StaffID"];
  
  const data = guarantors.map(guarantor => ({
    [heading[0].toLowerCase()]: guarantor.id,
    [heading[1].toLowerCase()]: guarantor.title + " " + guarantor.surname +  " " + guarantor.first_name,
    [heading[2].toLowerCase()]: guarantor.email,
    [heading[3].toLowerCase()]: guarantor.occupation,
    [heading[4].toLowerCase()]: guarantor.residential_address,
    [heading[5].toLowerCase()]: guarantor.dob,
    [heading[6].toLowerCase()]: guarantor.status === null ? "Pending" : guarantor.status, // Check if status is null
    [heading[7].toLowerCase()]: guarantor.domestic_staff_id,
  }));

  return (
    <div className="mx-14 mt-10">
      <Button label="Back" className="mb-4" outlined onClick={() => window.history.back()} icon={<FaArrowLeftLong className="me-4" />} />
      <h2 className="text-black border-b border-gray-500 text-2xl font-bold mt-10">Guarantors</h2>
      <DataTableComponent heading={heading} data={data} loading={loading} name="domestic-staff" />
    </div>
  );
}

export default AllGuarantors;