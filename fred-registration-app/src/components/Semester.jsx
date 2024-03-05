import React from "react";
import { FaCheckCircle, FaTimesCircle, FaUserCheck, FaRegCircle } from "react-icons/fa";

const Semester = ({ number, catalogData, userCourses }) => {

  const getCourseStatusIcon = (crn) => {
    // Find all courses with the given CRN
    const coursesWithCRN = userCourses.filter(course => course.CRN === crn);
  
    // If there are courses with the given CRN, find the most recent one
    if (coursesWithCRN.length > 0) {
      const mostRecentCourse = coursesWithCRN.reduce((mostRecent, course) => {
        return (mostRecent.TermID > course.TermID) ? mostRecent : course;
      });
  
      // Now switch on the status of the most recent course
      switch (mostRecentCourse.Status) {
        case "Completed":
          return <FaCheckCircle color="green" />;
        case "Enrolled":
          return <FaUserCheck color="blue" />;
        case "Failed":
          return <FaTimesCircle color="red" />;
        default:
          return null;
      }
    } else {
      // If there is no course with the given CRN
      return <FaRegCircle />;
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
                return (
                  <tr key={index}>
                    <td>{item.Course.CourseCode}</td>
                    <td className="w-[60%]">{item.Course.Title}</td>
                    <td>{item.Course.Credits}</td>
                    <td>{statusIcon}</td>
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
