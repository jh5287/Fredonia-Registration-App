"use client";
import { useState, useEffect } from "react";
import Semester from "@/components/Semester";
import { cn } from "@/lib/utils";
import Icon from '@mdi/react';
import { mdiProgressHelper } from '@mdi/js';

const WhatIfSemester = ({ number, data }) => {
  const calculateGPA = (data) => {
    let totalCredits = 0;
    let totalPoints = 0;
    data.forEach((item) => {
      totalCredits += item.Course.Credits;
      switch (item.Grade) {
        case 'A':
          totalPoints += 4 * item.Course.Credits;
          break;
        case 'A-':
          totalPoints += 3.7 * item.Course.Credits;
          break;
        case 'B+':
          totalPoints += 3.3 * item.Course.Credits;
          break;
        case 'B':
          totalPoints += 3 * item.Course.Credits;
          break;
        case 'B-':
          totalPoints += 2.7 * item.Course.Credits;
          break;
        case 'C+':
          totalPoints += 2.3 * item.Course.Credits;
          break;
        case 'C':
          totalPoints += 2 * item.Course.Credits;
          break;
        case 'C-':
          totalPoints += 1.7 * item.Course.Credits;
          break;
        case 'D+':
          totalPoints += 1.3 * item.Course.Credits;
          break;
        case 'D':
          totalPoints += 1 * item.Course.Credits;
          break;
        case 'D-':
          totalPoints += 0.7 * item.Course.Credits;
          break;
        default:
          totalPoints += 0;
      }
    });
    return (totalPoints / totalCredits).toFixed(2);
  }


  return (
    <>
    <div className="">

      <div className="flex justify-between items-center">
        <h1 className="py-2 pl-1 text-lg font-medium">{data[number].Term.TermName}</h1>
        {calculateGPA(data) > 0.0 ? <span className="text-base">GPA: {calculateGPA(data)}</span> : null} {/*if there is no applicable grade do not display it */}
      </div>
      
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
              <tr key={index} className={cn({" bg-red-200" : item.Grade === 'F', 'bg-green-200': item.Grade === 'A'}, )}>
                <td>{item.Course.CourseCode}</td>
                <td>{item.Course.Title}</td>
                <td>{item.Course.Credits}</td>
                {/* If the grade is null, display a progress icon, else display the grade */}
                <td className={cn({"text-red-600" : item.Grade === 'F', 'text-green-600': item.Grade === 'A'}, )}
                >{ item.Grade === null ? <span className="tooltip" data-tip="In Progress..."><Icon path={mdiProgressHelper} title="Progress" size={1} color="blue" /></span> : 
                item.Grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

const WhatIf = () => {
  const [studentData, setStudentData] = useState([]);
  const [catalog, setCatalog] = useState([]);
  

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const res = await fetch("/api/student/studentCourses?email=camronwalsh@gmail.com");
        const studentData = await res.json();
        const terms = studentData.map(item => item.Term.TermName).filter((value, index, self) => self.indexOf(value) === index);//get all the unique terms for the selected student
        const organized_data = []

      for(let i = 1; i < terms.length; i++) {
        const termToCompareTo = terms[i]; //get the term to compare to
        const semData = studentData.filter((item) => item.Term.TermName === termToCompareTo);//filter the data to only include the target term
        organized_data.push(semData)
      }

      setStudentData(organized_data);
      } catch (err) {
        console.error("Failed to fetch student data:", err);
      }
    };
    const fetchCatalog = async () => {
        try {
          const res = await fetch("/api/catalog?catID=1");
          const data = await res.json();
          console.log("fetched catalog data: ", data);
          const catalog = [];
          for (let i = 0; i < data.length; i++) {
            let temp_data = {
                CourseCode: data[i].Course.CourseCode,
                Title: data[i].Course.Title,
                Credits: data[i].Course.Credits
            }
            catalog.push(temp_data);
          }
          console.log("Organized catalog: ", catalog);
          setCatalog(catalog);
        } catch (err) {
          console.error("Failed to fetch catalog:", err);
        }
      };

    fetchCatalog();
    fetchStudentData();
  }, []);



  return (
    <>
    <h1 className="p-3 py-5 text-2xl">What If View</h1>
    <div className="m-3 grid grid-cols-1 gap-8 h-full md:grid-cols-2">
    {studentData.map((item, index) => (
            <WhatIfSemester key={index+1} number={index} data={item}/>
          ))}
    </div>
  </>
  )
}

export default WhatIf