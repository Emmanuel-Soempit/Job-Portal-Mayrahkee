import blueTickIcon from "../../../assets/pngs/blue-tick-icon.png";
import { job_dummies } from "../../../utils/dummies";
import { FormatPrice } from "../../../utils/formmaters";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useEffect, useState } from "react";
import Switch from "../../../components/DefaultSwitch";
import { useNavigate } from "react-router-dom";
import { onSuccess } from "../../../utils/notifications/OnSuccess";
import DeleteDialog from "../../../components/DeleteDialog";
import DefaultSwitch from "../../../components/DefaultSwitch";

function JobDetails({ data, jobUtils }) {
  const [enabled, setEnabled] = useState(true);
  const [isDeleteOpen, setIsDeleteOpened] = useState(false);

  const navigate = useNavigate();

  const handleDelete = () => {
    jobUtils.deleteJob(() => {
      onSuccess({
        message: "Delete Job",
        success: "Job deleted successfully",
      });
      navigate("/company/job-listing");
    }, data.id);
  };

  useEffect(() => {
    if (data?.status === "1") {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [data?.status]);

  return (
    <>
      <DeleteDialog
        isOpen={isDeleteOpen}
        loading={jobUtils.loading}
        setIsOpen={setIsDeleteOpened}
        title={"Job"}
        handleDelete={handleDelete}
      />

      <div className="p-1 flex flex-col w-full gap-[15px]">
        <div className="w-full border justify-between px-2 py-1 flex items-center ">
          <div className="flex gap-[10px] items-center">
            <div className="h-[50px] w-[50px] bg-gray-300" />

            <div className="flex flex-col">
              <h3 className="font-bold text-lg">{data.job_title}</h3>
              <span className="text-little">
                Mail to:{" "}
                <a
                  href={`mailto:${data.email}`}
                  className="text-little text-primaryColor cursor-pointer hover:underline"
                >
                  {data.email}
                </a>
              </span>
            </div>
          </div>

          <div className="w-[30%] flex gap-[10px]">
            <button
              onClick={() => setIsDeleteOpened(true)}
              className="px-1 py-1 w-[60px] flex text-little border items-center justify-center gap-[5px]"
            >
              <MdDeleteForever className="text-red-600" />
              Delete
            </button>
            <button className="px-1 py-1 w-[60px] flex text-little border items-center justify-center gap-[5px]">
              <CiEdit className="text-primaryColor" />
              Edit
            </button>
            <DefaultSwitch
              enabled={enabled}
              setEnabled={setEnabled}
              onClick={() => {
                if (!enabled) {
                  jobUtils.deactivateJob(data, '1', () => {
                     onSuccess({
                      message: 'Status Updated',
                      success: 'Job is now open'
                     })
                  });
                } else{
                  jobUtils.deactivateJob(data, '2', () => {
                    onSuccess({
                     message: 'Status Updated',
                     success: 'Job is now closed'
                    })
                 });
                }
                setEnabled(!enabled)
              }}
            />
          </div>
        </div>

        <div className="w-full text-black ">
          <div className="w-full flex justify-between">
            {/* Descriptions e.t.c */}
            <div className="w-[60%] flex flex-col gap-[10px]">
              <div className="flex flex-col">
                <span className="font-bold text-md">Job Description</span>
                <div
                  dangerouslySetInnerHTML={{ __html: data?.job_description }}
                  className="text-little border border-dotted p-2"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-md">Experience Needed</span>
                <div
                  dangerouslySetInnerHTML={{ __html: data?.experience }}
                  className=" text-little"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-semibold text-md">
                  Qualifications and Skills
                </span>
                <ul className=" flex flex-col gap-[5px] text-little ">
                  {data?.qualification?.map((current) => (
                    <li className="flex items-center gap-[5px]">
                      <img src={blueTickIcon} className="h-[15px] " />
                      <span>{current}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-[5px] w-full border-t">
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">Office Address</span>
                  <span className="text-little">
                    {data?.office_address}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">Intro Video Url</span>
                  <span className="text-little hover:text-primaryColor hover:underline cursor-pointer">
                    {data?.introduction_video_url}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">External Url</span>
                  <a className="text-little hover:text-primaryColor hover:underline cursor-pointer">
                    {data?.external_url}
                  </a>
                </div>
              </div>
            </div>

            {/* About the role */}
            <div className="flex flex-col justify- gap-[10px] pr-2">
              <div className="flex flex-col">
                <span className="font-semibold text-md">About this role</span>
                <div className=" text-little  gap-[10px] flex flex-col">
                  <span className="font-semibold text-md p-2 bg-gray-100 text-center">
                    5 applied 0f 10 capacity
                  </span>
                  <span className=" text-md tgap-[10px] flex justify-between border-b border-dashed">
                    Job Posted on{" "}
                    <span className="">
                      {new Date(data?.created_at).toLocaleDateString()}
                    </span>
                  </span>
                  <span className=" text-md  gap-[10px] flex justify-between border-b border-dashed">
                    Job deadline{" "}
                    <span className="">
                      {new Date(
                        data?.application_deadline_date
                      ).toLocaleDateString()}
                    </span>
                  </span>

                  <span className=" text-md  gap-[10px] flex justify-between border-b border-dashed">
                    Job Type<span className="">{data?.type}</span>
                  </span>

                  <span className=" text-md gap-[10px] flex justify-between border-b border-dashed">
                    Salary Type
                    <span className="">{data?.salary_type}</span>
                  </span>

                  <span className=" text-md gap-[10px] flex justify-between border-b border-dashed">
                    Salary Range
                    <span className="">{`${FormatPrice(
                      Number(data?.min_salary)
                    )} - ${FormatPrice(Number(data?.max_salary))}`}</span>
                  </span>
                  <span className=" text-md gap-[10px] flex justify-between border-b border-dashed">
                    Currency
                    <span className="">{data?.currency}</span>
                  </span>
                  <span className=" text-md gap-[10px] flex justify-between border-b border-dashed">
                    Sector
                    <span className="">{data?.sector}</span>
                  </span>
                  <span className=" text-md gap-[10px] flex justify-between border-b border-dashed">
                    Gender
                    <span className="">{data?.gender}</span>
                  </span>
                  <span className=" text-md gap-[10px] flex justify-between border-b border-dashed">
                    Age Range
                    <span className="">{data?.preferred_age}</span>
                  </span>
                </div>
              </div>

              <div className="h-[1px] bg-gray-300 w-full" />

              <div className="flex flex-col">
                <span className="font-semibold text-md">Search Keywords</span>
                <div className="grid grid-cols-2 gap-[10px]">
                  {data?.search_keywords?.split(",").map((current) => (
                    <span className=" text-little py-[2px] px-2 text-amber-500 rounded-[15px] bg-amber-300 text-center">
                      {current}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-[1px] bg-gray-300 w-full" />

              <div className="flex flex-col">
                <span className="font-semibold text-md">Socials</span>
                <div className="grid grid-cols-2 gap-[10px]">
                  {data?.qualification?.map((current) => (
                    <span className=" text-little py-1 px-2 text-green-400  bg-green-200 text-center">
                      {current}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetails;
