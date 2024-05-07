"use client";
import { useState, useEffect } from "react";
import Semester from "@/app/roadmap/Semester";
import AcademicSummaryBanner from "@/components/AcademicSummaryBanner";
import { cn } from "@/lib/utils";
import Icon from "@mdi/react";
import { mdiProgressHelper } from "@mdi/js";
import calculateGPA from "@/components/calculateGPA";
import { useSession } from "next-auth/react";

const RegSemester = ({ number, data }) => {
  const totalCredits = data.reduce((acc, item) => acc + item.Course.Credits, 0);
  const successGrades = ["A", "B"];
  const warnGrades = ["C", "D"];

  return (
    <>
      <div className="rounded-lg shadow px-3 pt-2 pb-4 bg-base-200">
        <div className="flex justify-between items-center">
          <h1 className="py-2 pl-1 text-lg font-semibold">
            {data[0]?.Term.Semester + " " + data[0]?.Term.Year}
          </h1>
          <div>
            {totalCredits > 0 ? (
              <span className="text-base">Total Credits: {totalCredits}</span>
            ) : null}{" "}
            {/*if there is no applicable grade do not display it */}
            {calculateGPA(data) > 0.0 ? (
              <span className="text-base">GPA: {calculateGPA(data)}</span>
            ) : null}{" "}
            {/*if there is no applicable grade do not display it */}
          </div>
        </div>

        <div className="border rounded-lg border-base-200 overflow-hidden bg-base-100">
          <table className="table">
            <thead>
              <tr>
                <th className="whitespace-nowrap">Course Code</th>
                <th>Course Title</th>
                <th>Credits</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={cn({
                    "bg-error": item.Grade === "F",
                    "bg-success": item.Grade
                      ? successGrades.some((substring) =>
                          item.Grade.includes(substring)
                        )
                      : false,
                    "bg-warning": item.Grade
                      ? warnGrades.some((substring) =>
                          item.Grade.includes(substring)
                        )
                      : false,
                  })}
                >
                  <td>{item.Course.CourseCode}</td>
                  <td>{item.Course.Title}</td>
                  <td>{item.Course.Credits}</td>
                  <td
                    className={cn({
                      "text-red-600": item.Grade === "F",
                      "text-green-600": item.Grade === "A",
                    })}
                  >
                    {item.Grade === null ? (
                      <span className="tooltip" data-tip="In Progress...">
                        <Icon
                          path={mdiProgressHelper}
                          title="Progress"
                          size={1}
                          color="blue"
                        />
                      </span>
                    ) : (
                      item.Grade
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const Registration = () => {
  const [studentData, setStudentData] = useState([]);
  const [userCGPA, setUserCGPA] = useState(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        let email = "russ9214@fredonia.edu";
        const res = await fetch(
          `/api/student/studentCourses?email=${session.user.email}`
        );
        const studentData = await res.json();

        // Extracting unique terms
        const uniqueTerms = Array.from(
          new Set(
            studentData.map((item) => `${item.Term.Semester} ${item.Term.Year}`)
          )
        );

        // Organizing data by terms
        const organized_data = uniqueTerms.map((term) =>
          studentData.filter(
            (item) => `${item.Term.Semester} ${item.Term.Year}` === term
          )
        );
        setStudentData(organized_data);
      } catch (err) {
        console.error("Failed to fetch student data:", err);
      }
    };

    const fetchUserCGPA = async () => {
      try {
        const userEmail = "wals9256@fredonia.edu";
        const response = await fetch(
          `/api/student/CGPA?email=${session.user.email}`
        );
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const userCGPAData = data[0];

          // Try and convert CGPA to a number
          const cgpa = parseFloat(userCGPAData.CGPA);

          if (!isNaN(cgpa)) {
            // Check if conversion was successful
            setUserCGPA(cgpa);
          } else {
            // Handle case where CGPA is not a valid number
            console.log("CGPA is not a valid number.");
            setUserCGPA(null);
          }
        } else {
          console.log("No CGPA data found for the user.");
          setUserCGPA(null);
        }
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        setUserCGPA(null); // Ensure user CGPA is set to null in case of error
      }
    };

    fetchUserCGPA();
    fetchStudentData();
  }, [status]);

  return (
    <>
      <h1 className="p-3 py-6 text-2xl text-center">Actual Registration</h1>
      <div className="m-3 grid grid-cols-1 gap-8 h-full md:grid-cols-2">
        {studentData.map((item, index) => (
          <RegSemester key={index + 1} number={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default Registration;
