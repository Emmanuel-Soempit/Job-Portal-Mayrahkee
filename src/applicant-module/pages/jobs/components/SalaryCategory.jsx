import React, { useState } from 'react'
import CustomizedCheckbox from './CustomizedCheckbox'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const SalaryCategory = ({ setSalaryRange }) => {
<<<<<<< HEAD
    const [close, setClose] = useState(true)
=======
    const [close, setClose] = useState(false)
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
    return (
        <div>
            <div className="mb-5">
                <div className="flex justify-between">
                    <p className="font-bold">Salary Range</p>
                    <button
                        onClick={() => setClose(!close)}
                    >{close ? <FaChevronUp /> : <FaChevronDown />}</button>
                </div>
                {close && (
                    <div className="">
                        {/* <CustomizedCheckbox
                            setSelectedValue={setSalaryRange} values={{
                                label: "$700 - $1000",
                                value: 700,
                                name: "salaryLevel",
                                id: "700"
                            }} /> */}
                        <CustomizedCheckbox
                            setSelectedValue={setSalaryRange} values={{
                                label: "Undo",
                                value: "",
                                name: "salaryLevel",
                                id: "salaryNil"
                            }} />
                        <CustomizedCheckbox
                            setSelectedValue={setSalaryRange} values={{
                                label: "$1000 - $1500",
                                value: 1000,
                                name: "salaryLevel",
                                id: "1000"
                            }} />
                        <CustomizedCheckbox
                            setSelectedValue={setSalaryRange} values={{
                                label: "$1500 - $2000",
                                value: 1500,
                                name: "salaryLevel",
                                id: "1500"
                            }} />
                        <CustomizedCheckbox
                            setSelectedValue={setSalaryRange} values={{
                                label: "$3000 - Above",
                                value: 3000,
                                name: "salaryLevel",
                                id: "3000"
                            }} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default SalaryCategory