"use client";
import { useState, useEffect } from "react";
import Semester from "@/components/Semester";
import { cn } from "@/lib/utils";
import Icon from '@mdi/react';
import { mdiProgressHelper } from '@mdi/js';

const RegSemester = ({ number, data }) => {
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
    return "GPA: "+ (totalPoints / totalCredits).toFixed(2);
  }


  return (
    <>
    <div className="">
      <h1 className="tooltip py-2 pl-1 text-lg" data-tip={calculateGPA(data)}>{data[number].Term.TermName}</h1>
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

const Registration = () => {
  const [studentData, setStudentData] = useState([]);
  

  useEffect(() => {
    //fetchStudentData gets all of the courses the student has taken
    //this includes S.FirstName, SR.Grade, C.CourseCode, C.Title, C.Credits, SR.TermID
    //It is then filtered by TermID in order to separate which courses were taken during which semester
    //The data is then organized into an array of arrays, where each array is a semester
    //The array is mapped onto the RegSemester component
    const fetchStudentData = async () => {
      try {
        const res = await fetch("/api/student/studentCourses?email=camronwalsh@gmail.com");
        const studentData = await res.json();

        console.log('studentData to be ORGANIZED: ', studentData);
        const terms = studentData.map(item => item.Term.TermName).filter((value, index, self) => self.indexOf(value) === index);
        console.log('Extracted terms: ', terms); 

        const organized_data = []
      for(let i = 1; i < terms.length; i++) {
        const termToCompareTo = terms[i];
        const semData = studentData.filter((item) => item.Term.TermName === termToCompareTo);
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
    <div className="m-3 grid grid-cols-1 gap-8 h-full md:grid-cols-2">
    {studentData.map((item, index) => (
            <RegSemester key={index+1} number={index} data={item}/>
          ))}
    </div>
  </>
  )
}

export default Registration