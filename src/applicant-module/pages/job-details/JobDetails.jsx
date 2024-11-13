<<<<<<< HEAD
import React, { useContext, useEffect } from 'react'
import headerImg from "../../../assets/pngs/detail-logo.png"
import { BsShare } from 'react-icons/bs'
import { FaRegCheckCircle } from 'react-icons/fa'
import healthIcon from "../../../assets/pngs/perks-n-benefits/tethoscope.png"
import vacation from "../../../assets/pngs/perks-n-benefits/vacation.png"
import cam from "../../../assets/pngs/perks-n-benefits/cam.png"
import arrowUp from "../../../assets/pngs/perks-n-benefits/kite-up.png"
import coffee from "../../../assets/pngs/perks-n-benefits/coffee-cup.png"
import trainIcon from "../../../assets/pngs/perks-n-benefits/vehicle.png"
import unity from "../../../assets/pngs/perks-n-benefits/unity.png"
import { useLocation } from 'react-router-dom'
import JobApplicationForm from './components/JobApplicationForm'
import { ResourceContext } from '../../../context/ResourceContext'
import { data } from 'autoprefixer'

const JobDetails = () => {
    const { state } = useLocation();
    console.log(state)
    const job = state?.job
=======
import React, { useContext, useEffect } from 'react';
import { BsShare } from 'react-icons/bs';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import headerImg from '../../../assets/pngs/detail-logo.png';
import JobApplicationForm from './components/JobApplicationForm';
import { ResourceContext } from '../../../context/ResourceContext';

const JobDetails = () => {
    const { state } = useLocation();
    const job = state?.job;
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28

    const { getResumeById, setGetResumeById } = useContext(ResourceContext);

    useEffect(() => {
<<<<<<< HEAD
        setGetResumeById((prev) => (
            {
                ...prev,
                isDataNeeded: true
            }
        ))
    }, [])
    const postedDate = new Date(job.created_at)
    const keywordArr = job.search_keywords?.split(',')

    return (
        <div className="h-full text-[#25324b] w-full">
            <div className=' p-6 border-b mb-8'>
                <div className="job_header p-6">
                    <div className="p-3 bg-white border">
                        <div className="flex justify-between items-center">
                            <div className="flex">
                                <div>
                                    <img src={headerImg} width={80} alt="" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-base mb-4 font-bold">{job.job_title}</p>
                                    <p className="mb-3">· {job.location} · {job.type}</p>
                                    <p className=""><b>Address:</b> {job.office_address}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className=" border-r">
                                    <button className=" mr-5">
                                        <BsShare />
                                    </button>
                                </div>
                                <div className="ml-3">
                                    <JobApplicationForm job={job} getResumeById={getResumeById.data} hasApplied={state?.hasApplied} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-10">
                    <div className="flex px-10">
                        <div className="w-[80%] pr-4">
                            <div className="mb-6">
                                <h4 className='font-bold mb-4'>Description</ h4>
                                <p dangerouslySetInnerHTML={{ __html: job.job_description }} />
                            </div>
                            <div className="mb-6">
                                <h4 className='font-bold mb-4'>Experience</ h4>
                                <p dangerouslySetInnerHTML={{ __html: job.experience }} />
                            </div>
                            <div className="mb-6">
                                <h4 className='font-bold mb-4'>Qualifications</ h4>
                                {job.qualification?.map((each, i) => (
                                    <div key={i} className='flex items-center mb-2'>
                                        <span className="mr-3 prime_text"><FaRegCheckCircle /></span>
                                        {each}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-[20%]">
                            <h4 className="font-bold mb-4">About this role</h4>
                            <div className="text-sm p-2 bg-gray-100">
                                <div className="flex my-4 bg-gray-300">
                                    <div className="pt-1 bg-[#56CDAD] w-[50%]"></div>
                                </div>
                                <p><b>5 applied</b> of 10 capacity</p>
                            </div>
                            <div className="my-6 border-b">
                                <div className="flex my-3 justify-between">
                                    <p>Apply Before</p>
                                    <p className="font-medium">{job.application_deadline_date}</p>
                                </div>
                                <div className="flex my-3 justify-between">
                                    <p>Job Posted On</p>
                                    <p className="font-medium">{postedDate.toLocaleDateString()}</p>
                                </div>
                                <div className="flex flex-wrap my-3 justify-between">
                                    <p>Email</p>
                                    <p className="font-medium break-words">{job.email}</p>
                                </div>
                                <div className="flex my-3 justify-between">
                                    <p>Job Type</p>
                                    <p className="font-medium">{job.type}</p>
                                </div>
                                {/* <div className="flex my-3 justify-between">
                                    <p>Experience</p>
                                    <p dangerouslySetInnerHTML={{ __html: job.experience }} />
                                    <p className="font-medium">{job.experience}</p>
                                </div> */}
                                <div className="flex my-3 justify-between">
                                    <p>Salary Type</p>
                                    <p className="font-medium">{job.salary_type}</p>
                                </div>
                                <div className="flex my-3 justify-between">
                                    <p>Currency</p>
                                    <p className="font-medium">{job.currency}</p>
                                </div>
                            </div>
                            <div className="my-6 border-b pb-6">
                                <h4 className="font-bold mb-4">Categories</h4>
                                <div className="flex flex-wrap gap-1 text-xs">
                                    {keywordArr?.map((each, index) => (
                                        <button key={index} className="px-3 py-1 rounded-full odd:bg-amber-100 text-amber-500 even:bg-teal-50 even:text-teal-400">{each}</button>
                                    ))}
                                </div>
                            </div>
                            {/* <div className="my-6 border-b pb-6">
                                <h4 className="font-bold mb-4">Required Skills</h4>
                                <div className="flex flex-wrap">
                                    <button className="m-1 px-2 py-1 rounded bg-green-100 hover:bg-green-200 hover:text-green-900 text-green-700">Project Management</button>
                                    <button className="m-1 px-2 py-1 rounded bg-green-100 hover:bg-green-200 hover:text-green-900 text-green-700">Copywriting</button>
                                    <button className="m-1 px-2 py-1 rounded bg-green-100 hover:bg-green-200 hover:text-green-900 text-green-700">English</button>
                                    <button className="m-1 px-2 py-1 rounded bg-green-100 hover:bg-green-200 hover:text-green-900 text-green-700">social Media Marketing</button>
                                    <button className="m-1 px-2 py-1 rounded bg-green-100 hover:bg-green-200 hover:text-green-900 text-green-700">Cpoy Editing</button>
                                </div>
                            </div> */}
=======
        setGetResumeById((prev) => ({
            ...prev,
            isDataNeeded: true,
        }));
    }, [setGetResumeById]);

    const postedDate = new Date(job.created_at);
    const keywordArr = job.search_keywords?.split(',');

    return (
        <div className="w-full min-h-full text-[#25324b]">
            {/* Header Section */}
            <div
                className="sticky top-0 bg-white z-10 p-6 border-b mb-8 shadow-md"
            >
                <div className="p-6 bg-white border rounded-md">
                    <div className="flex gap-2 flex-wrap justify-between items-center">
                        {/* Left Section: Job Info */}
                        <div className="flex items-start space-x-4">
                            <img src={headerImg} alt="Header Logo" className="w-20" />
                            <div>
                                <p className="text-lg font-bold mb-2">{job.job_title}</p>
                                <p className="text-sm mb-1">· {job.location} · {job.type}</p>
                                <p className="text-sm">
                                    <b>Address:</b> {job.office_address}
                                </p>
                            </div>
                        </div>

                        {/* Right Section: Share and Application */}
                        <div className="flex items-center space-x-3">
                            <button className="p-2 rounded-full border hover:bg-gray-100">
                                <BsShare />
                            </button>
                            <JobApplicationForm
                                job={job}
                                getResumeById={getResumeById.data}
                                hasApplied={state?.hasApplied}
                            />
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
            {/* <div className="p-6 border-b">
                <h4 className="font-bold text-xl">Perks & Benefits</h4>
                <p>This job comes with several perks and benefits</p>
                <div className="my-5 pb-4  flex flex-wrap text-sm">
                    <div className="p-2 w-full md:w-1/4">
                        <div className="hover:shadow p-2 h-full transition-all hover:scale-105">
                            <div className="my-2">
                                <img src={healthIcon} alt="" />
                            </div>
                            <h6 className="font-bold mb-3">Full Healthcare </h6>
                            <p>We believe in thriving communities and that starts with our team being happy and healthy.</p>
                        </div>
                    </div>
                    <div className="p-2 w-full md:w-1/4">
                        <div className="hover:shadow p-2 h-full transition-all hover:scale-105">
                            <div className="my-2">
                                <img src={vacation} alt="" />
                            </div>
                            <h6 className="font-bold mb-3">Unlimited Vacation </h6>
                            <p>
                                We believe you should have a flexible schedule that makes space for family, wellness, and fun.
                            </p>
                        </div>
                    </div>
                    <div className="p-2 w-full md:w-1/4">
                        <div className="hover:shadow p-2 h-full transition-all hover:scale-105">
                            <div className="my-2">
                                <img src={cam} alt="" />
                            </div>
                            <h6 className="font-bold mb-3">Skill Development</h6>
                            <p>
                                We believe in always learning and leveling up our skills. Whether it's a conference or online course.
                            </p>
                        </div>
                    </div>
                    <div className="p-2 w-full md:w-1/4">
                        <div className="hover:shadow p-2 h-full transition-all hover:scale-105">
                            <div className="my-2">
                                <img src={arrowUp} alt="" />
                            </div>
                            <h6 className="font-bold mb-3">Team Summit</h6>
                            <p>
                                Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.
                            </p>
                        </div>
                    </div>
                    <div className="p-2 w-full md:w-1/4">
                        <div className="hover:shadow p-2 h-full transition-all hover:scale-105">
                            <div className="my-2">
                                <img src={coffee} alt="" />
                            </div>
                            <h6 className="font-bold mb-3">Remote Working</h6>
                            <p>
                                We believe in thriving communities and that starts with our team being happy and healthy.
                            </p>
                        </div>
                    </div>
                    <div className="p-2 w-full md:w-1/4">
                        <div className="hover:shadow p-2 h-full transition-all hover:scale-105">
                            <div className="my-2">
                                <img src={trainIcon} alt="" />
                            </div>
                            <h6 className="font-bold mb-3">Commuter Benefits</h6>
                            <p>
                                We’re grateful for all the time and energy each team member puts into getting to work every day.
                            </p>
                        </div>
                    </div>
                    <div className="p-2 w-full md:w-1/4">
                        <div className="hover:shadow p-2 h-full transition-all hover:scale-105">
                            <div className="my-2">
                                <img src={unity} alt="" />
                            </div>
                            <h6 className="font-bold mb-3">We give back</h6>
                            <p>
                                We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default JobDetails
=======

            {/* Main Content */}
            <div className="flex flex-col md:flex-row px-6 min-h-full">
                {/* Left Column */}
                <div className="w-full md:w-4/5 pr-4">
                    <div className="mb-6">
                        <h4 className="font-bold mb-2">Description</h4>
                        <p dangerouslySetInnerHTML={{ __html: job.job_description }} />
                    </div>

                    <div className="mb-6">
                        <h4 className="font-bold mb-2">Experience</h4>
                        <p dangerouslySetInnerHTML={{ __html: job.experience }} />
                    </div>

                    <div className="mb-6">
                        <h4 className="font-bold mb-2">Qualifications</h4>
                        {job.qualification?.map((each, i) => (
                            <div key={i} className="flex items-center space-x-2 mb-2">
                                <FaRegCheckCircle className="text-green-500" />
                                <span>{each}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-full md:w-1/5">
                    <h4 className="font-bold mb-2">About this role</h4>
                    <div className="bg-gray-100 p-4 rounded-md mb-6">
                        <div className="relative h-2 bg-gray-300 rounded-full mb-2">
                            <div
                                className="absolute top-0 left-0 h-2 bg-green-500 rounded-full"
                                style={{ width: '50%' }}
                            ></div>
                        </div>
                        <p className="text-sm">
                            <b>5 applied</b> of 10 capacity
                        </p>
                    </div>

                    <div className="space-y-3 border-b pb-4">
                        <div className="flex flex-wrap justify-between gap-2">
                            <p>Apply Before</p>
                            <p className="font-medium">{job.application_deadline_date}</p>
                        </div>
                        <div className="flex flex-wrap justify-between gap-2">
                            <p>Job Posted On</p>
                            <p className="font-medium">{postedDate.toLocaleDateString()}</p>
                        </div>
                        <div className="flex flex-wrap justify-between gap-2">
                            <p>Email</p>
                            <p className="font-medium break-words">{job.email}</p>
                        </div>
                        <div className="flex flex-wrap justify-between gap-2">
                            <p>Job Type</p>
                            <p className="font-medium">{job.type}</p>
                        </div>
                        <div className="flex flex-wrap justify-between gap-2">
                            <p>Salary Type</p>
                            <p className="font-medium">{job.salary_type}</p>
                        </div>
                        <div className="flex flex-wrap justify-between gap-2">
                            <p>Currency</p>
                            <p className="font-medium">{job.currency}</p>
                        </div>
                    </div>

                    <div className="my-6">
                        <h4 className="font-bold mb-2">Categories</h4>
                        <div className="flex flex-wrap gap-2">
                            {keywordArr?.map((each, index) => (
                                <button
                                    key={index}
                                    className="px-3 py-1 rounded-full bg-teal-50 text-teal-400 odd:bg-amber-100 odd:text-amber-500"
                                >
                                    {each}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
