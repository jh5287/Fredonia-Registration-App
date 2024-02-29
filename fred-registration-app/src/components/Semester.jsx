import React from "react";
import { FaCheckCircle, FaTimesCircle, FaUserCheck, FaRegCircle } from "react-icons/fa";

const Semester = ({ number, catalogData, userCourses }) => {

  const getCourseStatusIcon = (crn) => {
    const courseExists = userCourses.find((course) => course.CRN === crn);

    if (courseExists !== undefined) {
      switch (courseExists.Status) {
        case "Completed":
          return <FaCheckCircle color="green" />;
        case "Enrolled":
          return <FaUserCheck color="blue" />;
        case "Failed":
          return <FaTimesCircle color="red"/>;
        default:
          return null;
      }
    } else {
      return <FaRegCircle/>;
    }
  };

  return (
    <>
      <div className="">
        <h1 className="py-2 pl-1 text-lg">Semester {number}</h1>
        <div className="border rounded">
          <table className="table">
            <thead>
              <tr>
                <th className="whitespace-nowrap">Course Code</th>
                <th>Course Title</th>
                <th>Credits</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {catalogData.map((item, index) => {
                const statusIcon = getCourseStatusIcon(item.Course.CRN);
                const courseStatus = userCourses.find((course) => course.CRN === item.Course.CRN);
                return (
                  <tr key={index}>
                    <td>{item.Course.CourseCode}</td>
                    <td className="w-[60%]">{item.Course.Title}</td>
                    <td>{item.Course.Credits}</td>
                    <td className="tooltip" data-tip={courseStatus ? courseStatus.Status : "Not Taken"}>{statusIcon}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Semester;
