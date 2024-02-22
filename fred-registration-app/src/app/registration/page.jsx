"use client";
import { useState, useEffect } from "react";
import Semester from "@/components/Semester";
import { GetStudentData } from "../api/sqlserver/queries";
import { cn } from "@/lib/utils";

const RegSemester = ({ number, data }) => {
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
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.CourseCode}</td>
                <td>{item.Title}</td>
                <td>{item.Credits}</td>
                <td className={cn({"text-red-600" : item.Grade === 'F', 'text-green-600': item.Grade === 'A'}, )}
                >{item.Grade}</td>
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
  

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const studentData = await GetStudentData(5);
        const organized_data = []
      for(let i = 1; i < 7; i++) {
        const semData = studentData.filter((item) => item.TermID === i);
        organized_data.push(semData)
      }
      console.log('organized_data STUDENT', organized_data);
      setStudentData(organized_data);
      } catch (err) {
        console.error("Failed to fetch student data:", err);
      }
    };

    fetchStudentData();
  }, []);



  return (
    <>
    <h1 className="p-3 py-5 text-2xl">Current Registration</h1>
    <div className="m-3 grid grid-cols-1 gap-5 h-full md:grid-cols-2">
    {studentData.map((item, index) => (
            <RegSemester key={index+1} number={index+1} data={item}/>
          ))}
    </div>
  </>
  )
}

export default Registration