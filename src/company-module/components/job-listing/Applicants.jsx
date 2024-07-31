import { useState } from "react";
import ApplicantsList from "./ApplicantsList";
import ApplicantsGrid from "./ApplicantsGrid";

function Applicants() {
  const [view, setView] = useState("grid");

  return (
    <div className="p-1 flex flex-col w-full gap-[10px]">
      <div className="flex justify-between items-center">
        <span>Total Applicants: 19</span>

        <div className="flex gap-[10px]">
          <input
            className="py-1 px-2 border text-sm"
            placeholder="Search Applicant"
          />

          <div className="p-1 bg-primaryColor justify-between gap-[3px] flex">
            <button
              onClick={() => setView("grid")}
              className={`h-full p-1 text-little ${
                view === "grid"
                  ? "bg-primaryColor text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              Pipeview
            </button>
            <button
              onClick={() => setView("table")}
              className={`h-full p-1 text-little ${
                view === "table"
                  ? "bg-primaryColor text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              Tableview
            </button>
          </div>
        </div>
      </div>

      {view === "table" ? <ApplicantsList /> : <ApplicantsGrid />}
    </div>
  );
}

export default Applicants;
