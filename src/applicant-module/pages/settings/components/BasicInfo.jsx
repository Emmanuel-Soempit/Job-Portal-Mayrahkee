import React, { useContext, useEffect, useState } from 'react'
import { TbPhoto } from 'react-icons/tb'
import DynamicExperienceForm from './DynamicExperienceForm'
import SocialsForm from './SocialsForm'
import { BASE_URL } from '../../../../utils/base'
// import UiSelect from '../../../components/general/UiSelect'
import axios from "axios";
import { IoCheckboxSharp } from 'react-icons/io5';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { AuthContext } from '../../../../context/AuthContex'
import { ResourceContext } from '../../../../context/ResourceContext'
import TextEditor from './TextEditor'
import { onSuccess } from '../../../../utils/notifications/OnSuccess'

const BasicInfo = ({ setIsOpen }) => {

    const { getCandidate, setGetCandidate } = useContext(ResourceContext);

    const { authDetails, userUpdate, setUserUpdate } = useContext(AuthContext)
    const user = authDetails?.user
    const [errorMsg, setErrorMsg] = useState(null);
    const [showMsg, setShowMsg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectId, setSelectId] = useState(null);

    const [socialHandles, setSocialHandles] = useState([
        { network: "", url: "", },
    ]);

    useEffect(() => {
        setGetCandidate((prev) => {
            return {
                ...prev, isDataNeeded: true
            }
        })
    }, [])

    console.log(getCandidate.data)
    const candidate = getCandidate.data?.details

    const toggleAccept = () => {
        setDetails((prev) => {
            return {
                ...prev, show_my_profile: !details.show_my_profile
            };
        });
    }

    const [profileImageUrl, setProfileImageUrl] = useState(user.image ? user.image : null);
    const [details, setDetails] = useState({
        candidate_id: user.id ? user.id : "",
        // full_name: user.full_name ? user.full_name : "",
        profile: null,
        full_name: user.first_name ? ` ${user.first_name} ${user.last_name}` : "",
        date_of_birth: candidate?.date_of_birth ? candidate?.date_of_birth : "",
        gender: candidate.gender ? candidate?.gender : "",
        phone_number: candidate.phone_number ? candidate?.phone_number : "",
        email: candidate.email ? candidate?.email : "",
        background_profile: null,
        password: user.password ? user.password : "",
        means_of_identification: candidate.means_of_identification ? candidate?.means_of_identification : "",
        nin: candidate.nin ? candidate?.nin : "",
        nin_slip: null,
        educational_qualification: candidate.educational_qualification ? candidate?.educational_qualification : "",
        work_experience: candidate.work_experience ? candidate?.work_experience : "",
        languages: candidate.languages ? candidate?.languages : "",
        salary_type: candidate.salary_type ? candidate?.salary_type : "",
        salary: candidate.salary ? candidate?.salary : "",
        categories: candidate.categories ? candidate?.categories : "",
        // show_my_profile: true,
        preferred_job_role: candidate.preferred_job_role ? candidate?.preferred_job_role : "",
        personal_profile: candidate.personal_profile ? candidate?.personal_profile : "",
        network: candidate.network ? candidate?.network : "",
        contact_address: candidate.contact_address ? candidate?.contact_address : "",
        country: candidate.country ? candidate?.country : "",
        state: candidate.state ? candidate?.state : "",
        local_gov: candidate.local_gov ? candidate?.local_gov : "",
        address: candidate.address ? candidate?.address : "",
        experience: candidate.experience ? candidate?.experience : "",
        introduction_video: null,
        social_media_handle: [],
    })

    function updateFirstLetter(word) {
        if (word) {
            return setSelectId(word[0]?.toUpperCase() + word.slice(1));
        } else { return setSelectId(null) }
    }

    // console.log(getAllFaculty.data)
    const handleOnChange = (e) => {
        const { value, name, files, type, checked } = e.target;
        if (name === "means_of_identification") {
            updateFirstLetter(value)
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

    const handleOutline = (event) => {
        setDetails((prev) => {
            return {
                ...prev, experience: event
            };
        });
        setErrorMsg("");
    };

    // const handleEducation = (event) => {
    //     setDetails((prev) => {
    //         return {
    //             ...prev, educational_qualification: event
    //         };
    //     });
    //     setErrorMsg("");
    // };
    useEffect(() => {
        setDetails(details => {
            return {
                ...details, social_media_handle: socialHandles
            }
        })
    }, [socialHandles])

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMsg(null)
        setLoading(true)
        setGetCandidate((prev) => {
            return {
                ...prev, isDataNeeded: false
            }
        })
        axios.post(`${BASE_URL}/candidate/UpdateCandidate/${user.id}`, details, {
            headers: {
                Authorization: `Bearer ${authDetails.token}`,
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((response) => {
                console.log(response)
                onSuccess({
                    message: 'Profile',
                    success: response.data.message
                })
                localStorage.setItem("userDetails", JSON.stringify(response.data.candidate));
                // setUserUpdate(updateData)
                setLoading(false)
                setIsOpen(false)
                setGetCandidate((prev) => {
                    return {
                        ...prev, isDataNeeded: true
                    }
                })
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
    const getImageURL = (e) => {
        const { name } = e.target;
        const file = e.target.files[0]; //filelist is an object carrying all details of file, .files[0] collects the value from key 0 (not array), and stores it in file

        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
            // You can also perform additional actions with the valid file
            const generatedUrl = URL.createObjectURL(file);
            setProfileImageUrl(generatedUrl);
            setDetails({ ...details, [name]: file });
        } else {
            // Handle invalid file type
            alert('Please select a valid JPEG or PNG file.');
        }
    };
    console.log(details)
    console.log(candidate)

    return (
        <div className='text-[#515B6F] text-base'>

            <div className="my-4">
                <div className="flex items-cente pb-6 border-b">
                    <div className="w-1/3 pr-5">
                        <p className="font-medium mb-2 text-slate-950">Profile Photo</p>
                        <p>This image will be shown publicly as your profile picture, it will help recruiters recognize you!</p>
                    </div>
                    <div className="flex items-center">
                        <div className="size-[100px]  ring-green-200 ring-4 rounded-full bg-gray-300 mx-5">
                            <div className="">
                                <img className='w-[100px] h-[100px] rounded-full' src={profileImageUrl} alt="" />
                            </div>
                        </div>
                        <label htmlFor='image' className="min-h-32 min-w-96 cursor-pointer bg-green-50 border-2 border-green-500 border-dashed p-5 rounded">
                            <div className="text-center">
                                <div className="flex justify-center">
                                    <span className='text-green-500 mb-3'><TbPhoto /></span>
                                </div>
                                <p><span className='text-green-500 font-medium'>Click to replace </span>or drag and drop</p>
                                <p>SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
                                <input type="file"
                                    accept='.jpeg, .png, .jpg,'
                                    name='profile' onChange={getImageURL} id='image' className='invisible ' />
                            </div>
                        </label>
                    </div>
                </div>
                <div className="update_form py-6">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className=" md:w-">
                                <div className="border-b py-6">
                                    <div className="flex">
                                        <div className="font-medium w-2/6 text-slate-900">
                                            <p>Personal Information</p>
                                        </div>
                                        <div className="w-4/6">
                                            <div className="mb-4">
                                                <label className="block">
                                                    <span className="block text-sm font-medium text-slate-700">Full Name</span>
                                                    <input type="text" value={details.full_name} name='full_name' onChange={handleOnChange}
                                                        className="mt-1 block p-1 focus:outline-none w-full border" />
                                                </label>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700">Phone Number</span>
                                                        <input type="text"
                                                            value={details.phone_number} name='phone_number' onChange={handleOnChange}
                                                            placeholder='+44 1245 572 135'
                                                            className="mt-1 block p-1 focus:outline-none w-full border" />
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700">Email</span>
                                                        <input type="email"
                                                            value={details.email} name='email' onChange={handleOnChange}
                                                            placeholder='Jakegyll@gmail.com'
                                                            className="mt-1 block p-1 focus:outline-none w-full border" />
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700">Date of Birth</span>
                                                        <input type="date"
                                                            value={details.date_of_birth} name='date_of_birth' onChange={handleOnChange}
                                                            className="mt-1 block p-1 focus:outline-none w-full border" />
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700 mb-1">Gender</span>
                                                        <select
                                                            value={details.gender} name='gender' onChange={handleOnChange}
                                                            id="" className='border w-full focus:outline-none p-2 pb-1'>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700 mb-1">Select Type of ID</span>
                                                        <select
                                                            value={details.means_of_identification} name='means_of_identification' onChange={handleOnChange}
                                                            id="" className='border w-full focus:outline-none p-2 pb-1'>
                                                            <option value="">-- Select --</option>
                                                            <option value="nin">National Identity Card (NIN)</option>
                                                            <option value="license">Drivers License </option>
                                                            <option value="passport">International Passport </option>
                                                        </select>
                                                    </label>
                                                </div>

                                                {selectId && (<div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700">Input {selectId ? selectId : ""} No:</span>
                                                        <input type="text" value={details.nin} name='nin' onChange={handleOnChange}
                                                            className="mt-1 block p-1 focus:outline-none w-full border" />
                                                    </label>
                                                </div>)}
                                                {selectId && (<div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700">Upload {selectId ? selectId : ""} NIN</span>
                                                        <input type="file"
                                                            name='nin_slip' onChange={handleOnChange}
                                                            className="mt-1 block p-1 focus:outline-none w-full border" />
                                                    </label>
                                                </div>)}
                                                <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700">Background Image</span>
                                                        <input type="file"
                                                            accept='.jpeg, .png, .jpg,'
                                                            name='background_profile' onChange={handleOnChange}
                                                            className="mt-1 block p-1 focus:outline-none w-full border" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b py-6">
                                    <div className="flex">
                                        <div className="font-medium w-2/6 text-slate-900">
                                            <p>Professional Details</p>
                                        </div>
                                        <div className="w-4/6">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700 mb-1">Educational Qualification</span>
                                                        <select
                                                            value={details.educational_qualification} name='educational_qualification'
                                                            onChange={handleOnChange}
                                                            id="" className='border w-full focus:outline-none p-2 pb-1'>
                                                            <option value="">-- select --</option>
                                                            <option value="ond">OND</option>
                                                            <option value="hnd">HND</option>
                                                            <option value="diploma">DILOMA</option>
                                                            <option value="bsc">Bachelor Degree</option>
                                                            <option value="msc">Master's Degree</option>
                                                        </select>
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700 mb-1">Work Experience</span>
                                                        <select
                                                            value={details.work_experience} name='work_experience' onChange={handleOnChange}
                                                            className='border w-full focus:outline-none p-2 pb-1'>
                                                            <option value="">-- select --</option>
                                                            <option value="1">1 year</option>
                                                            <option value="2">2 years</option>
                                                            <option value="3">3 years</option>
                                                            <option value="4">4 years </option>
                                                            <option value="5">5 years</option>
                                                        </select>
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700 mb-1">Language</span>
                                                        <select
                                                            value={details.languages} name='languages' onChange={handleOnChange}
                                                            className='border w-full focus:outline-none p-2 pb-1'>
                                                            <option value="">-- select --</option>
                                                            <option value="english">English</option>
                                                            <option value="french">French</option>
                                                            <option value="hausa">Hausa </option>
                                                            <option value="yaruba">Yaruba</option>
                                                            <option value="igbo">Igbo</option>
                                                        </select>
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700 mb-1">Salary Type</span>
                                                        <select
                                                            value={details.salary_type} name='salary_type' onChange={handleOnChange}
                                                            className='border w-full focus:outline-none p-2 pb-1'>
                                                            <option value="">-- select --</option>
                                                            <option value="monthly">Monthly</option>
                                                            <option value="hourly">Hourly</option>
                                                            <option value="contract">Contract</option>
                                                        </select>
                                                    </label>
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700">Salary (₦)</span>
                                                        <input type="numbber"
                                                            value={details.salary} name='salary' onChange={handleOnChange}
                                                            className="mt-1 block p-1 focus:outline-none w-full border" />
                                                    </label>
                                                </div>
                                                {/* <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700 mb-1">Show my profile</span>
                                                        <select
                                                            value={details.show_my_profile} name='show_my_profile' onChange={handleOnChange}
                                                            className='border w-full focus:outline-none p-2 pb-1'>
                                                            <option value="true">show</option>
                                                            <option value="false">Hide</option>
                                                        </select>
                                                    </label>
                                                </div> */}
                                                {/* <div className="">
                                                    <span className="block text-sm font-medium text-slate-700 mb-1">Show my profile</span>
                                                    <button
                                                        onClick={() => toggleAccept()}
                                                        type='button'
                                                        className='border-0 prime_brown inherit_bg'>
                                                        {details.show_my_profile ? (
                                                            <IoCheckboxSharp size={25} />
                                                        ) : (
                                                            <MdOutlineCheckBoxOutlineBlank size={25} />
                                                        )}
                                                    </button>
                                                </div> */}
                                                <div className="mb-4">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700">Preferred Job Role</span>
                                                        <input type="text"
                                                            value={details.preferred_job_role} name='preferred_job_role' onChange={handleOnChange}
                                                            className="mt-1 block p-1 focus:outline-none w-full border" />
                                                    </label>
                                                </div> <div className="mb-4">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700">Personal Profile</span>
                                                    </label>
                                                    <textarea
                                                        value={details.personal_profile} name='personal_profile' onChange={handleOnChange}
                                                        className="mt-1 block w-full focus:outline-green-400 border" id=""></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <label>
                                            <p className="font-bold mb-5">Experience</p>
                                            <TextEditor
                                                textValue={details.experience}
                                                handleText={handleOutline} />
                                        </label>
                                    </div>
                                    {/* <div className="mb-5">
                                        <label>
                                            <p className="font-bold mb-5">Education</p>
                                            <TextEditor
                                                textValue={details.educational_qualification}
                                                handleText={handleEducation} />
                                        </label>
                                    </div> */}
                                </div>
                                <div className="border-b mb-8 py-6">
                                    <div className="flex">
                                        <div className="font-medium w-2/6 text-slate-900">
                                            <p>Contact Details</p>
                                        </div>
                                        <div className="w-4/6">
                                            <div className="mb-4">
                                                <label className="block">
                                                    <span className="block text-sm font-medium text-slate-700">Contact Address</span>
                                                    <input type="text"
                                                        value={details.contact_address} name='contact_address' onChange={handleOnChange}
                                                        className="mt-1 block p-1 focus:outline-none w-full border" />
                                                </label>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700 mb-1">Country</span>
                                                        <select
                                                            value={details.country} name='country' onChange={handleOnChange}
                                                            className='border w-full focus:outline-none p-2 pb-1'>
                                                            <option value="">-- select --</option>
                                                            <option value="nigeria">Nigeria</option>
                                                            <option value="ghana">Ghana</option>
                                                            <option value="egypt">Egypt</option>
                                                        </select>
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700 mb-1">State</span>
                                                        <select
                                                            value={details.state} name='state' onChange={handleOnChange}
                                                            className='border w-full focus:outline-none p-2 pb-1'>
                                                            <option value="">-- select --</option>
                                                            <option value="kano">Kano</option>
                                                            <option value="lagos">Lagos</option>
                                                            <option value="Ondo">Ondo</option>
                                                        </select>
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700 mb-1">Local Governmennt</span>
                                                        <select
                                                            value={details.local_gov} name='local_gov' onChange={handleOnChange}
                                                            className='border w-full focus:outline-none p-2 pb-1'>
                                                            <option value="">-- select --</option>
                                                            <option value="kuje">Kuje</option>
                                                            <option value="abaji">Abaji</option>
                                                            <option value="gwagwalada">Gwagwalada</option>
                                                        </select>
                                                    </label>
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700">Address</span>
                                                        <input type="text"
                                                            value={details.address} name='address' onChange={handleOnChange}
                                                            className="mt-1 block p-1 focus:outline-none w-full border" />
                                                    </label>
                                                </div>
                                                {/* <div className="mb-4">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700">Experience</span>
                                                        <input type="text"
                                                            value={details.experience} name='experience' onChange={handleOnChange}
                                                            className="mt-1 block p-1 focus:outline-none w-full border" />
                                                    </label>
                                                </div> */}
                                                <div className="">
                                                    <SocialsForm
                                                        experiences={socialHandles}
                                                        setExperiences={setSocialHandles} />
                                                </div>
                                                {/* <div className="">
                                                    <DynamicExperienceForm />
                                                </div> */}
                                                <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700">My introduction video</span>
                                                        <input type="file"
                                                            accept='.mp4'
                                                            name='introduction_video' onChange={handleOnChange}
                                                            placeholder='Jakegyll@gmail.com'
                                                            className="mt-1 block p-1 focus:outline-none w-full border" />
                                                    </label>
                                                </div>
                                                <div className="">
                                                    <label className="block">
                                                        <span className="block text-sm font-medium text-slate-700">Password</span>
                                                        <input type="password"
                                                            value={details.password}
                                                            name='password' onChange={handleOnChange}
                                                            placeholder='Jakegyll@gmail.com'
                                                            className="mt-1 block p-1 focus:outline-none w-full border" />
                                                    </label>
                                                </div>
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
                                {/* <div className=" border-b mb-8">
                                    <div className="flex py-6">
                                        <div className=" w-2/5 text-slate-900">
                                            <p className='font-medium'>Account Type</p>
                                            <p>You can update your account type</p>
                                        </div>
                                        <div className="w-3/5 text-slate-700">
                                            <div className="mb-4 flex ">
                                                <div className="mr-4">
                                                    <input type="radio" name="status" id="job_seeker" className='radio' />
                                                </div>
                                                <div className="">
                                                    <label htmlFor="job_seeker" className='font-medium'>Job seeker</label>
                                                    <p>Looking for job</p>
                                                </div>
                                            </div>
                                            <div className="mb-4 flex ">
                                                <div className="mr-4">
                                                    <input type="radio" name="status" id="employer" className='radio' />
                                                </div>
                                                <div className="">
                                                    <label htmlFor="employer" className='font-medium'>Employer</label>
                                                    <p>Hiring, sourcing candidates, or posting a jobs</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
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

export default BasicInfo