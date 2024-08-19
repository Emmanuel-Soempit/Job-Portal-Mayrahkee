import React, { useContext, useEffect, useState } from 'react'
import { BASE_URL } from '../../../../utils/base'
import axios from "axios";
import { AuthContext } from '../../../../context/AuthContex'
import { ResourceContext } from '../../../../context/ResourceContext'
import { onSuccess } from '../../../../utils/notifications/OnSuccess';
import { FcApproval } from 'react-icons/fc';

const JobForm = ({ setIsOpen, getCandidate, job, getResumeById, updateAllApplications }) => {

    const { authDetails } = useContext(AuthContext)

    const [errorMsg, setErrorMsg] = useState(null)
    const [showMsg, setShowMsg] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resumePicker, setResumePicker] = useState(false)
    const [activeResume, setActiveResume] = useState("")
    const [newDetails, setNewDetails] = useState({
        resume: "",
        resumeOne: "",
    })

    const [details, setDetails] = useState({
        candidate_id: getCandidate?.candidateAuth?.id,
        job_id: job.id,
        full_name: `${getCandidate?.candidateAuth?.first_name} ${getCandidate?.candidateAuth?.last_name}`,
        email: getCandidate?.candidateAuth?.email,
        phone_number: getCandidate?.details?.phone_number,
        job_title: job.job_title,
        // linkedin_url: "",
        // portfolio_url: "",
        additional_information: "",
        resume: "",
    })
    const user = authDetails?.user

    function handleActive(id) {
        setActiveResume(id)
        setNewDetails((prev) => (
            { ...prev, resume: activeResume}
        ))
    }

    const handleOnChange = (e) => {
        const { value, name, files, type, checked } = e.target;
        if (name === "resume") {
            setResumePicker(true)
        }
        setDetails((prev) => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
                // [name]: name === 'cv' ? files[0] : value,
            };
        });
        setErrorMsg(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateAllApplications((prev) => {
            return {
                ...prev, isDataNeeded: false
            }
        })
        setErrorMsg(null)
        setLoading(true)
        axios.post(`${BASE_URL}/apply`, details, {
            headers: {
                Authorization: `Bearer ${authDetails.token}`,
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((response) => {
                console.log(response)
                onSuccess({
                    message: 'New Application',
                    success: response.data.message
                })
                updateAllApplications((prev) => {
                    return {
                        ...prev, isDataNeeded: true
                    }
                })
                setLoading(false)
                setIsOpen(false)
            })
            .catch((error) => {
                console.log(error)
                if (error.response) {
                    setErrorMsg({ stack: error.response.data })
                    setShowMsg(true)
                    setLoading(false);
                } else {
                    console.log(error)
                    setErrorMsg({ network: error.message })
                    setShowMsg(true)
                    setLoading(false);
                }
            });
    }

    console.log(newDetails)
    // console.log(job)


    const handleSuccess = () => {
        onSuccess({
            message: 'New Job',
            success: 'Job Created Successfully'
        })
    }
    console.log(getResumeById)
    return (
        <div className='text-[#515B6F]'>

            <div className="my-4">
                <div className="update_form py-6">
                    <div>
                        <div className="border p-3 flex flex-wrap gap-4">
                            {getResumeById?.map((item) => {
                                const active = activeResume === item.id
                                return (
                                    <button
                                        onClick={()=>handleActive(item.id)}
                                        key={item.id} className="p-3 rounded bg-green-300 relative">
                                        {item.title}
                                        <span className='absolute top-0'> {active && (<FcApproval />)}</span>
                                    </button>
                                )
                            })}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className=" md:w-">
                                <div className="border-b py-6">
                                    <div className="flex">
                                        <div className="w-full">
                                            {/* <div className="mb-4">
                                                <label className="block">
                                                    <span className="block text-sm font-medium text-slate-700">LinkedIn</span>
                                                    <input type="url" value={details.linkedin_url} name='linkedin_url' placeholder='url' onChange={handleOnChange}
                                                        className="mt-1 block p-1 focus:outline-none w-full border" />
                                                </label>
                                            </div> */}
                                            {/* <div className="mb-4">
                                                <label className="block">
                                                    <span className="block text-sm font-medium text-slate-700">Portfolio</span>
                                                    <input type="url" value={details.portfolio_url} name='portfolio_url' placeholder='url' onChange={handleOnChange}
                                                        className="mt-1 block p-1 focus:outline-none w-full border" />
                                                </label>
                                            </div> */}
                                            <div className="my-4 pt-5">
                                                <label htmlFor='resume' className="cursor-pointer flex">
                                                    <span className="text-sm  bg-green-100 rounded border p-4 font-medium text-slate-700">Resume</span>
                                                    <span> {resumePicker && (<FcApproval />)}</span>
                                                    <input type="file" id='resume' name='resume' placeholder='url' onChange={handleOnChange}
                                                        className="mt-1 invisible p-1 focus:outline-none w-full border" />
                                                </label>
                                            </div>
                                            <div className="mb-4">
                                                <label className="block">
                                                    <span className="block text-sm font-medium text-slate-700">Additional Information</span>
                                                </label>
                                                <textarea
                                                    value={details.additional_information} name='additional_information' onChange={handleOnChange}
                                                    className="mt-1 block w-full focus:outline-green-400 border min-h-[100px]" id=""></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {errorMsg?.stack && (
                                    <div className="py-4 border-b mb-8 text-center">
                                        {Object.keys(errorMsg.stack).map((field) => (
                                            <div key={field}>
                                                {errorMsg.stack[field].map((error, index) => (
                                                    <p className="text-red-700 text-base font-medium" key={index}> {error}</p>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {errorMsg?.network && (
                                    <div className="py-4 border-b mb-8 text-center">
                                        <p className="text-red-700 text-base font-medium"> {errorMsg.network}</p>
                                    </div>
                                )}
                                <button className="rounded border prime_bg text-white px-4 flex justify-center py-2 w-[50%]">Save Profile
                                    {loading && <div className="size-[20px] ml-3 animate-spin rounded-full border-r-4  border- "></div>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobForm