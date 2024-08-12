import React, { useContext, useEffect, useState } from 'react'
import { TbPhoto } from 'react-icons/tb'
// import DynamicExperienceForm from './DynamicExperienceForm'
// import SocialsForm from './SocialsForm'
import { BASE_URL } from '../../../../utils/base'
// import UiSelect from '../../../components/general/UiSelect'
import axios from "axios";
import { IoCheckboxSharp } from 'react-icons/io5';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { AuthContext } from '../../../../context/AuthContex'
import { ResourceContext } from '../../../../context/ResourceContext'
// import TextEditor from './TextEditor'

const JobForm = ({ setIsOpen, getCandidate, job }) => {

    const { authDetails } = useContext(AuthContext)

    const [errorMsg, setErrorMsg] = useState(null)
    const [showMsg, setShowMsg] = useState(false)
    const [loading, setLoading] = useState(false)

    const [details, setDetails] = useState({
        candidate_id: getCandidate?.candidateAuth?.id,
        job_id: job.id,
        full_name: `${getCandidate?.candidateAuth?.first_name} ${getCandidate?.candidateAuth?.last_name}`,
        email: getCandidate?.candidateAuth?.email,
        phone_number: getCandidate?.details?.phone_number,
        job_title: job.job_title,
        linkedin_url: "",
        portfolio_url: "",
        additional_information: "",
        resume: "",
    })

    const user = authDetails?.user


    const handleOnChange = (e) => {
        const { value, name, files, type, checked } = e.target
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
        setErrorMsg(null)
        setLoading(true)
        axios.post(`${BASE_URL}/candidate/UpdateCandidate/${user.id}`, details, {
            headers: {
                Authorization: `Bearer ${authDetails.token}`,
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((response) => {
                console.log(response)
                localStorage.setItem("userDetails", JSON.stringify(response.data.candidate));
                // setUserUpdate(updateData)
                setLoading(false)
                setIsOpen(false)
                // toast.success("successful");
            })
            .catch((error) => {
                console.log(error)
                if (error.response) {
                    setErrorMsg({ stack: error.response.data.message })
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

    console.log(details)
    // console.log(job)

    return (
        <div className='text-[#515B6F]'>

            <div className="my-4">
                <div className="update_form py-6">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className=" md:w-">
                                <div className="border-b py-6">
                                    <div className="flex">
                                        <div className="w-full">
                                            <div className="mb-4">
                                                <label className="block">
                                                    <span className="block text-sm font-medium text-slate-700">LinkedIn</span>
                                                    <input type="text" value={details.linkedin_url} name='linkedin_url' placeholder='url' onChange={handleOnChange}
                                                        className="mt-1 block p-1 focus:outline-none w-full border" />
                                                </label>
                                            </div>
                                            <div className="mb-4">
                                                <label className="block">
                                                    <span className="block text-sm font-medium text-slate-700">Portfolio</span>
                                                    <input type="text" value={details.portfolio_url} name='portfolio_url' placeholder='url' onChange={handleOnChange}
                                                        className="mt-1 block p-1 focus:outline-none w-full border" />
                                                </label>
                                            </div>
                                            <div className="mb-4">
                                                <label className="block">
                                                    <span className="block text-sm font-medium text-slate-700">Resume</span>
                                                    <input type="file" name='resume' placeholder='url' onChange={handleOnChange}
                                                        className="mt-1 block p-1 focus:outline-none w-full border" />
                                                </label>
                                            </div>
                                            <div className="mb-4">
                                                <label className="block">
                                                    <span className="block text-sm font-medium text-slate-700">Additional Information</span>
                                                </label>
                                                <textarea
                                                    value={details.additional_information} name='additional_information' onChange={handleOnChange}
                                                    className="mt-1 block w-full focus:outline-green-400 border" id=""></textarea>
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