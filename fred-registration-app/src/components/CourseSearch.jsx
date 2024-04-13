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

const fetchCourses = async (params) => {
  try {
    const queryString = new URLSearchParams(params).toString(); 

    const res = await fetch(`/api/courseSearch/courses?${queryString}`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log("Error fetching courses: ", err);
    return null;
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  const validationRes = validateInputs(data);
  if(validationRes.isValid){
    fetchCourses(data); 
  }
  else{
    //Handle invalid form 
  }
};

function validateInputs(data) {
  const { CRN, courseCode, courseTitle, credits, department } = data;
  const errors = {};

  if (CRN && !/^\d{5}$/.test(CRN)) {
    errors.CRN = "CRN must be exactly 5 digits if provided.";
  }

  if (courseCode && !courseCode.trim()) {
    errors.courseCode = "Course code cannot be blank if provided.";
  }

  if (courseTitle && !courseTitle.trim()) {
    errors.courseTitle = "Course title cannot be blank if provided.";
  }

  const validCredits = ["", "1", "2", "3", "4"]; // Including an empty string as a valid option
  if (credits && !validCredits.includes(credits)) {
    errors.credits = "Invalid credits selected.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

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
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="CRN"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              CRN
            </label>
            <div className="">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="number"
                  name="CRN"
                  id="CRN"
                  className="block flex-1  bg-transparent py-1.5 pl-1 text-gray-900  focus:ring-0"
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
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="text"
                  name="courseCode"
                  id="courseCode"
                  className="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900  focus:ring-0"
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
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="text"
                  name="courseTitle"
                  id="courseTitle"
                  className="block flex-1  bg-transparent py-1.5 pl-1 text-gray-900  focus:ring-0"
                />
              </div>
            </div>
          </div>
          <div></div>
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
              id="department"
              name="department"
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
              id="credits"
              name="credits"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
        </div>
        <div className="object-center py-4">
          <button className="btn btn-primary" onClick={fetchCourses}>
            Search
          </button>
        </div>
      </form>
    </>
  );
}
