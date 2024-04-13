import { useEffect } from "react";
import { useState } from "react";

const fetchDepartements = async () => {
  try {
    const res = await fetch("/api/courseSearch/departments");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log("Error fetching departments: ", err);
    return null;
  }
};

export default function CourseSearch() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        fetchDepartements().then(setDepartments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(departments);
    loadData();
  }, []);

  return (
    <>
      <h1 className={"text-center"}>Course Search</h1>
      <div className="flex flex-col gap-y-3">
        <div>
          <label
            htmlFor="CRN"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            CRN
          </label>
          <div className="">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="CRN"
                id="CRN"
                className="block flex-1  bg-transparent py-1.5 pl-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="courseCode"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Course Code
          </label>
          <div className="">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="courseCode"
                id="courseCode"
                className="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="CRN"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Course Title
          </label>
          <div className="">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="courseTitle"
                id="courseTitle"
                className="block flex-1  bg-transparent py-1.5 pl-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="Department"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Department
          </label>
          <select
            defaultValue={"DEFAULT"}
            className="select select-primary w-full"
          >
            {departments.map((department) => (
              <option value={department.Name} key={department.Name}>
                {department.Name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="Credits"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Credits
          </label>
          <select
            defaultValue={"DEFAULT"}
            className="select select-primary w-full"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        <div>
          <button className="btn btn-primary w-full">Search</button>
        </div>
      </div>
    </>
  );
}
