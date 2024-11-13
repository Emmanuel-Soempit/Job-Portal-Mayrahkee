import { useForm } from "react-hook-form";
import FormButton from "../FormButton";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { useState } from "react";

function SearchComponent({ subCategories, handleQuerySubmit }) {
  const {
    register,
    handleSubmit,
<<<<<<< HEAD
    watch,
    reset,
    formState: { errors },
=======
    reset,
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
  } = useForm();
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [byCategory, setByCategory] = useState(false);
  const [byReligion, setByReligion] = useState(false);
  const [byEducationalLevel, setByEducationalLevel] = useState(false);
  const [byAge, setByAge] = useState(false);
  const [byMaritalStatus, setByMaritalStatus] = useState(false);
<<<<<<< HEAD
  const [loading, setLoading] = useState(false)
=======
  const [loading, setLoading] = useState(false);
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28

  const toogleCategory = () => setByCategory(!byCategory);
  const toogleReligion = () => setByReligion(!byReligion);
  const toogleAge = () => setByAge(!byAge);
  const toogleMaritalStatus = () => setByMaritalStatus(!byMaritalStatus);
  const toogleEducationalLevel = () =>
    setByEducationalLevel(!byEducationalLevel);

  const handleSearch = async () => {
    let queryParams = "";
<<<<<<< HEAD
    handleSubmit((data, event) => console.log("submitted", data));
=======
    handleSubmit((data) => console.log("submitted", data));
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
    console.log("submitted");
    // handleQuerySubmit(queryParams);
  };

  return (
<<<<<<< HEAD
    <div className="w-full p-4 bg-gray-50 h-fit flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <span className="text-md font-semibold">
          Select the queries you will want to search by
        </span>
        <div className="flex justify-start gap-5 border-b pb-2 text-gray-400 w-full">
          <div className="flex items-center gap-2 text-lg">
            {byCategory ? (
              <MdCheckBox className="cursor-pointer" onClick={toogleCategory} />
            ) : (
              <MdCheckBoxOutlineBlank
                className="cursor-pointer"
                onClick={toogleCategory}
              />
            )}
            Category
          </div>

          <div className="flex items-center gap-2 text-lg">
            {byEducationalLevel ? (
              <MdCheckBox
                className="cursor-pointer"
                onClick={toogleEducationalLevel}
              />
            ) : (
              <MdCheckBoxOutlineBlank
                className="cursor-pointer"
                onClick={toogleEducationalLevel}
              />
            )}
            Education Level
          </div>

          <div className="flex items-center gap-2 text-lg">
            {byAge ? (
              <MdCheckBox className="cursor-pointer" onClick={toogleAge} />
            ) : (
              <MdCheckBoxOutlineBlank
                className="cursor-pointer"
                onClick={toogleAge}
              />
            )}
            Age Range
          </div>
          <div className="flex items-center gap-2 text-lg">
            {byReligion ? (
              <MdCheckBox className="cursor-pointer" onClick={toogleReligion} />
            ) : (
              <MdCheckBoxOutlineBlank
                className="cursor-pointer"
                onClick={toogleReligion}
              />
            )}
            Religion
          </div>

          <div className="flex items-center gap-2 text-lg">
            {byMaritalStatus ? (
              <MdCheckBox className="cursor-pointer" onClick={toogleMaritalStatus} />
            ) : (
              <MdCheckBoxOutlineBlank
                className="cursor-pointer"
                onClick={toogleMaritalStatus}
              />
            )}
            Marital Status
=======
    <div className="w-full p-4 bg-[#AFB6AE1A] h-fit flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <span className="text-sm md:text-md font-semibold">
          Select the queries you will want to search by
        </span>
        <div className="flex flex-wrap items-stretch justify-start gap-3 border-b pb-2 text-gray-700 w-full mt-2">
          <div className="flex items-center gap-2 text-sm md:text-xl leading-none cursor-pointer" onClick={toogleCategory}>
            {byCategory ? (
              <MdCheckBox className="flex-shrink-0" />
            ) : (
              <MdCheckBoxOutlineBlank className="flex-shrink-0" />
            )}
            <span>Category</span>
          </div>

          <div className="flex items-center gap-2 text-sm md:text-xl leading-none cursor-pointer" onClick={toogleEducationalLevel}>
            {byEducationalLevel ? (
              <MdCheckBox className="flex-shrink-0" />
            ) : (
              <MdCheckBoxOutlineBlank className="flex-shrink-0" />
            )}
            <span>Education Level</span>
          </div>

          <div className="flex items-center gap-2 text-sm md:text-xl leading-none cursor-pointer" onClick={toogleAge}>
            {byAge ? (
              <MdCheckBox className="flex-shrink-0" />
            ) : (
              <MdCheckBoxOutlineBlank className="flex-shrink-0" />
            )}
            <span>Age Range</span>
          </div>

          <div className="flex items-center gap-2 text-sm md:text-xl leading-none cursor-pointer" onClick={toogleReligion}>
            {byReligion ? (
              <MdCheckBox className="flex-shrink-0" />
            ) : (
              <MdCheckBoxOutlineBlank className="flex-shrink-0" />
            )}
            <span>Religion</span>
          </div>

          <div className="flex items-center gap-2 text-sm md:text-xl leading-none cursor-pointer" onClick={toogleMaritalStatus}>
            {byMaritalStatus ? (
              <MdCheckBox className="flex-shrink-0" />
            ) : (
              <MdCheckBoxOutlineBlank className="flex-shrink-0" />
            )}
            <span>Marital Status</span>
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 text-gray-500 gap-x-3 gap-y-5">
        {byCategory && (
          <div className="flex flex-col">
            <label>Select Category</label>
            <select
<<<<<<< HEAD
              className="p-1 border focus:outline-none border-gray-900  rounded-md"
=======
              className="p-1 border focus:outline-none border-gray-900 rounded-md"
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
              {...register("subcategory")}
            >
              <option>-- Select Subcategory --</option>
              {subCategories?.map((current) => (
<<<<<<< HEAD
                <option>{current.name}</option>
=======
                <option key={current.id}>{current.name}</option>
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
              ))}
            </select>
          </div>
        )}
        {byEducationalLevel && (
<<<<<<< HEAD
          <div className="flex flex-col">
            <label>Select Education Level</label>
            <select
              className="p-1 border focus:outline-none border-gray-900  rounded-md"
=======
          <div className="flex flex-col truncate">
            <label>Select Education Level</label>
            <select
              className="p-1 border focus:outline-none border-gray-900 rounded-md"
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
              {...register("education")}
            >
              <option>-- Select Education Level--</option>
              {[
                "Primary School Certificate",
                "Secondary School Certificate",
                "Diploma",
                "Degree",
                "None",
              ].map((current) => (
<<<<<<< HEAD
                <option>{current}</option>
=======
                <option key={current}>{current}</option>
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
              ))}
            </select>
          </div>
        )}

        {byAge && (
          <div className="flex flex-col">
            <label>Age Range</label>
            <select
<<<<<<< HEAD
              className="p-1 border focus:outline-none border-gray-900  rounded-md"
=======
              className="p-1 border focus:outline-none border-gray-900 rounded-md"
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
              {...register("age")}
            >
              <option>-- Select Age Range--</option>
              {["18 - 25", "26 - 30", "31 - 35", "36 - 40", "41 & Above"].map(
                (current) => (
<<<<<<< HEAD
                  <option>{current}</option>
=======
                  <option key={current}>{current}</option>
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
                )
              )}
            </select>
          </div>
        )}

        {byReligion && (
          <div className="flex flex-col">
            <label>Select Religion</label>
            <select
<<<<<<< HEAD
              className="p-1 border focus:outline-none border-gray-900  rounded-md"
=======
              className="p-1 border focus:outline-none border-gray-900 rounded-md"
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
              {...register("religion")}
            >
              <option>-- Select Religion --</option>
              {["Christian", "Muslim", "Others"].map((current) => (
<<<<<<< HEAD
                <option>{current}</option>
=======
                <option key={current}>{current}</option>
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
              ))}
            </select>
          </div>
        )}

        {byMaritalStatus && (
<<<<<<< HEAD
          <div className="flex flex-col">
            <label>Select Marital Status</label>
            <select
              className="p-1 border focus:outline-none border-gray-900  rounded-md"
              {...register("marital_status")}
            >
              <option>-- Select Marital Status --</option>
              {["Single", "Married", "Divorced", 'Widowed'].map((current) => (
                <option>{current}</option>
=======
          <div className="flex flex-col truncate">
            <label>Select Marital Status</label>
            <select
              className="p-1 border focus:outline-none border-gray-900 rounded-md"
              {...register("marital_status")}
            >
              <option>-- Select Marital Status --</option>
              {["Single", "Married", "Divorced", "Widowed"].map((current) => (
                <option key={current}>{current}</option>
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
              ))}
            </select>
          </div>
        )}
<<<<<<< HEAD


      </div>

      {!byCategory && !byEducationalLevel && !byReligion && !byAge && !byMaritalStatus ? (
        <div className="w-full text-center text-red-300">
          Please select atleast one query method
=======
      </div>

      {!byCategory &&
      !byEducationalLevel &&
      !byReligion &&
      !byAge &&
      !byMaritalStatus ? (
        <div className="w-full text-center text-red-300">
          Please select at least one query method
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
        </div>
      ) : (
        <div className="w-[50%]">
          <FormButton
<<<<<<< HEAD
            onClick={handleSubmit(async (data, event) => {
            
              setLoading(true)
              console.log(data)
              let queryParams = "";
              if(data.age){
                queryParams += `age=${data.age}&`
              }
              if(data.education){
                queryParams += `education_level=${data.education}&`
              }
              if(data.marital_status){
                queryParams += `marital_status=${data.marital_status}&`
              }
              if(data.subcategory){
                queryParams += `subcategory=${data.subcategory}&`
              }
              if(data.religion){
                queryParams += `religion=${data.religion}`
              }
              
=======
            onClick={handleSubmit(async (data) => {
              setLoading(true);
              console.log(data);
              let queryParams = "";
              if (data.age) {
                queryParams += `age=${data.age}&`;
              }
              if (data.education) {
                queryParams += `education_level=${data.education}&`;
              }
              if (data.marital_status) {
                queryParams += `marital_status=${data.marital_status}&`;
              }
              if (data.subcategory) {
                queryParams += `subcategory=${data.subcategory}&`;
              }
              if (data.religion) {
                queryParams += `religion=${data.religion}`;
              }

>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
              reset({
                age: "",
                education: "",
                marital_status: "",
                subcategory: "",
                religion: "",
              });
<<<<<<< HEAD
              await handleQuerySubmit(queryParams)
              setLoading(false)
             
=======
              await handleQuerySubmit(
                queryParams,
                data.subcategory ? true : false
              );
              setLoading(false);
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
            })}
            loading={loading}
          >
            Start Search
          </FormButton>
        </div>
      )}
    </div>
  );
}

export default SearchComponent;
