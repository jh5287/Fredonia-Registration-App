import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaUserCheck,
  FaRegCircle,
} from "react-icons/fa";

const Semester = ({ number, courses }) => {
  const getCourseStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <FaCheckCircle color="green" />;
      case "Enrolled":
        return <FaUserCheck color="blue" />;
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
                return (
                  <tr key={index}>
                    <td>{courseCode}</td>
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
    </>
  );
};

export default Semester;
