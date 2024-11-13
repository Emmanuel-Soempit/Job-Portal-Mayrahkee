import React, { useState } from 'react'
import CustomizedCheckbox from './CustomizedCheckbox'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const EmploymentCategory = ({ setEmploymentType }) => {
<<<<<<< HEAD
    const [close, setClose] = useState(true)
=======
    const [close, setClose] = useState(false)
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
    return (
        <div>
            <div className="mb-5">
                <div className="flex justify-between">
                    <p className="font-bold">Type of Employment</p>
                    <button
                        onClick={() => setClose(!close)}
                    >{close ? <FaChevronUp /> : <FaChevronDown />}</button>
                </div>
                {close && (
                    <div className="">
                        <CustomizedCheckbox
                            setSelectedValue={setEmploymentType}
                            values={{
                                label: "Undo",
                                value: "",
                                id: "employmentNil",
                                name: "employmentType"
                            }} />
                        <CustomizedCheckbox
                            setSelectedValue={setEmploymentType}
                            values={{
                                label: "Full time",
                                value: "Full",
                                id: "fullTime",
                                name: "employmentType"
                            }} />
                        <CustomizedCheckbox
                            setSelectedValue={setEmploymentType}
                            values={{
                                label: "Part time",
                                value: "Part",
                                id: "partTime",
                                name: "employmentType"
                            }} />
                        <CustomizedCheckbox
                            setSelectedValue={setEmploymentType}
                            values={{
                                label: "Remote",
                                value: "Remote",
                                id: "remote",
                                name: "employmentType"
                            }} />
                        <CustomizedCheckbox
                            setSelectedValue={setEmploymentType}
                            values={{
                                label: "Internship",
                                value: "Internship",
                                id: "Internship",
                                name: "employmentType"
                            }} />
                        <CustomizedCheckbox
                            setSelectedValue={setEmploymentType}
                            values={{
                                label: "Contract",
                                value: "Contract",
                                id: "Contract",
                                name: "employmentType"
                            }} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default EmploymentCategory