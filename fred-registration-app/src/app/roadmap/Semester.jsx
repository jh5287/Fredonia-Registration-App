import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaUserCheck,
  FaRegCircle,
} from "react-icons/fa";
import Icon from "@mdi/react";
import { mdiProgressHelper } from "@mdi/js";

import { cn } from "@/lib/utils";

const Semester = ({ number, courses, toggleSemester, open }) => {
  const getCourseStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <FaCheckCircle color="green" />;
      case "Enrolled":
        return <Icon path={mdiProgressHelper} title="Progress" size={1} color="blue" />;
      case "Failed":
        return <FaTimesCircle color="red" />;
      default:
        return <FaRegCircle />;
    }
  };

  const getCourseGrade = (course) => {
    const grade = course.StudentCourseRecord.Grade;
    if (grade !== undefined) {
      return grade;
    } else {
      return "N/A";
    }
  };

  return (
    <>
      <div tabIndex={0} className={cn({"collapse-open": open, "collapse-close": !open},"collapse collapse-arrow")}>
        <h1 className="collapse-title w-full pr-4 text-lg hover:cursor-pointer" onClick={() => toggleSemester(number - 1)}>
          Semester {number}
        </h1>
        <div className="collapse-content overflow-hidden">
          <div className="rounded-lg border overflow-hidden">
          <table className="table">
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
              {courses.map((course, index) => {
                const statusIcon = getCourseStatusIcon(
                  course.StudentCourseRecord?.Status
                );

                const grade = getCourseGrade(course);
                const courseCode = course.StudentCourseRecord.Course.CourseCode;
                const courseTitle = course.StudentCourseRecord.Course.Title;
                const courseCredits = course.StudentCourseRecord.Course.Credits;
                const semesterTaken = course.StudentCourseRecord.Term?.Semester; 
                const yearTaken = course.StudentCourseRecord.Term?.Year; 
                return (
                  <tr key={index} className={course.StudentCourseRecord?.Status == "Completed" ? "bg-success" : ""}>
                    <td className="tooltip" data-tip={semesterTaken ? `Term Taken: ${semesterTaken} ${yearTaken}` : 'Not taken yet'}>{courseCode}</td>
                    <td className="w-[60%]">{courseTitle}</td>
                    <td>{courseCredits}</td>
                    <td>{statusIcon}</td>
                    <td>{grade ? grade : "N/A"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </>
  );
};

export default Semester;
