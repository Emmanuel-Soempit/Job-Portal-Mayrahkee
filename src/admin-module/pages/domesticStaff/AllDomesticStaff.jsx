import { useState, useEffect } from "react";
import UseAdminManagement from "../../../hooks/useAdminManagement";
import DataTableComponent from "../../components/DataTable/DataTableComponent";
import { Button } from "primereact/button";
import { FaArrowLeftLong } from "react-icons/fa6";

function AllDomesticStaff() {
  const { loading, getDomesticStaff } = UseAdminManagement();
  const [domesticStaff, setDomesticStaff] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getDomesticStaff();
      if (data) {
        setDomesticStaff(data);
      } else {
        console.error("No data received");
      }
    })();
  }, []);
  

  const heading = ["ID", "Name", "Email", "Subcategory", "Job", "Status", "YOE", "Current Salary", "Expected Salary", "Location"];
  const data = domesticStaff.map(staff => ({
    [heading[0].toLowerCase()]: staff.id,
    [heading[1].toLowerCase()]: staff.first_name + " " + (staff.middle_name === null || staff.middle_name === 'null' ? '' : staff.middle_name) + " " + staff.surname,
    [heading[2].toLowerCase()]: staff.email,
    [heading[3].toLowerCase()]: staff.subcategory,
    [heading[4].toLowerCase()]: staff.job_type,
    [heading[5].toLowerCase()]: staff.status,
    [heading[6].toLowerCase()]: staff.years_of_experience,
    [heading[7].toLowerCase()]: staff.current_salary,
    [heading[8].toLowerCase()]: staff.expected_salary,
    [heading[9].toLowerCase()]: staff.location,
  }));

  return (
    <div className="mx-14 mt-10">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="flex items-center gap-2 outline outline-offset-5 outline-green-500 px-4 py-2 rounded text-green-500 hover:bg-green-100"
        >
       <FaArrowLeftLong className="me-4 text-green-500" />Back
        </button>
      <h2 className="text-black border-b border-gray-500 text-2xl font-bold mt-10">
        Domestic Staff
      </h2>
      <DataTableComponent
        heading={heading}
        data={data}
        loading={loading}
        name="domestic-staff"
        allowEdit={true}
      />
    </div>
  );
}

export default AllDomesticStaff;
