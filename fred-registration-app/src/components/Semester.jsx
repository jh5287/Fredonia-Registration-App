import React from "react";
import { cn } from "@/lib/utils";
import { FaCheckCircle, FaTimesCircle, FaUserCheck, FaRegCircle } from "react-icons/fa";
import {GoDash} from "react-icons/go";

const Semester = ({ number, catalogData, userCourses, open, toggleSemester }) => {

  console.log("User courses in Semester", userCourses);

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
          return <FaTimesCircle color="red"/>;
        default:
          return null;
      }
    } else {
      // If there is no course with the given CRN
      return <FaRegCircle />;
    }
  };
  const getRecentGrade = (crn) => {
    const coursesWithCRN = userCourses.filter(course => course.CRN === crn);
    if (coursesWithCRN.length > 0) {
      const mostRecentCourse = coursesWithCRN.reduce((mostRecent, course) => {
        return (mostRecent.TermID > course.TermID) ? mostRecent : course;
      });
      return mostRecentCourse.Grade;
    } else {
      return null;
    }

  }

  return (
      <div tabIndex={0} className={cn({"collapse-open": open, "collapse-close": !open},"collapse collapse-arrow")}>
        <h1 className="collapse-title w-full py-2 pl-1 text-lg hover:cursor-pointer" onClick={() => toggleSemester(number - 1)}>
          Semester {number}
        </h1>
        <div className="collapse-content overflow-hidden">
          <table className="table m-2 border rounded shadow-md">
            <thead>
              <tr>
                <th className="whitespace-nowrap">Course Code</th>
                <th>Course Title</th>
                <th>Credits</th>
                <th>Status</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {catalogData.map((item, index) => {
                const statusIcon = getCourseStatusIcon(item.Course.CRN);
                //const grade = getCourseGrade(item.Course.CRN);

                const courseStatus = userCourses.find((course) => course.CRN === item.Course.CRN);
                //const grade = userCourses.find((course) => course.CRN === item.Course.CRN)?.Grade;
                const grade = getRecentGrade(item.Course.CRN);
                return (
                  <tr key={index}>
                    <td>{item.Course.CourseCode}</td>
                    <td className="w-[60%]">{item.Course.Title}</td>
                    <td className="pl-7">{item.Course.Credits}</td>
                    <td className="tooltip pl-7" data-tip={courseStatus ? courseStatus.Status : "Not Taken"}>{statusIcon}</td>
                    <td className="pl-7">{(courseStatus && grade !== null) ? grade : <GoDash />}</td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Semester;
