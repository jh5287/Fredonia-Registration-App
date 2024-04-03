"use client";
import { useState, useEffect } from "react";
import Semester from "@/components/Semester";
import AcademicSummaryBanner from "@/components/AcademicSummary";
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
        case 'S':
          totalCredits -= item.Course.Credits;
          break;
        case 'WC':
          totalCredits -= item.Course.Credits;
          break;
        default:
          totalPoints += 0;
      }
    });
    return (totalPoints / totalCredits).toFixed(2);
  }
  
  const totalCredits = data.reduce((acc, item) => acc + item.Course.Credits, 0);

  return (
    <>
    <div className="">

      <div className="flex justify-between items-center">
        <h1 className="py-2 pl-1 text-lg font-semibold">{data[0]?.Term.Semester + " " + data[0]?.Term.Year}</h1>
        {/* An idea...
        {calculateGPA(data) >= 3.0 ? <span className="text-green-600">Good Standing</span> : <span className="text-red-600">Academic Warning</span>}
        */}
        <div>
          {totalCredits > 0 ? <span className="text-base">Total Credits: {totalCredits}</span> : null} {/*if there is no applicable grade do not display it */}
          {calculateGPA(data) > 0.0 ? <span className="text-base">GPA: {calculateGPA(data)}</span> : null} {/*if there is no applicable grade do not display it */}
        </div>
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

const PlannedReg = ({ data }) => {

  const [newdata, setnewData] = useState([]);

  useEffect(() => {
    const sampleData = [{
      "Term": {
        "Semester": "Spring",
        "Year": 2024
      },
      "Course": [
        {
          "CourseCode": "CSIT 391",
          "Title": "Mobile App Development",
          "Credits": 3,
          "Grade": "A"
        },
        {
          "CourseCode": "CSIT 387",
          "Title": "Intro to Cybersecurity",
          "Credits": 3,
          "Grade": "A"
        }
      ]
    }];
    setnewData(sampleData);
  }, []);

  return (
    <>
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="py-2 pl-1 text-lg font-medium">{newdata[0]?.Term.Semester + " " + newdata[0]?.Term.Year}</h1>
      </div>
      
      <div className="border rounded">
        <table className="table">
          <thead>
            <tr>
              <th className="whitespace-nowrap">Course Code</th>
              <th>Course Title</th>
              <th>Credits</th>
            </tr>
          </thead>
          <tbody>
            {newdata.map((item, index) => (
              item.Course.map((item, index) => (
              <tr key={index} >
                <td>{item.CourseCode}</td>
                <td>{item.Title}</td>
                <td>{item.Credits}</td>
              </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};


const AdvisorRec = ({ data }) => {

  const [newdata, setnewData] = useState([]);

  useEffect(() => {
    const sampleData = [{
      "Term": {
        "Semester": "Spring",
        "Year": 2024
      },
      "Course": [
        {
          "CourseCode": "CSIT 499",
          "Title": "Senior Project",
          "Credits": 3,
          "Grade": "A"
        },
        {
          "CourseCode": "CSIT 498",
          "Title": "Internship",
          "Credits": 3,
          "Grade": "A"
        },
        {
          "CourseCode": "CSIT 391",
          "Title": "Mobile App Development",
          "Credits": 3,
          "Grade": "A"
        },
        {
          "CourseCode": "CSIT 387",
          "Title": "Intro to Cybersecurity",
          "Credits": 3,
          "Grade": "A"
        }
      ]
    }];
    setnewData(sampleData);
  }, []);

  return (
    <>
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="py-2 pl-1 text-lg font-medium">{newdata[0]?.Term.Semester + " " + newdata[0]?.Term.Year}</h1>
      </div>
      
      <div className="border rounded">
        <table className="table">
          <thead>
            <tr>
              <th className="whitespace-nowrap">Course Code</th>
              <th>Course Title</th>
              <th>Credits</th>
            </tr>
          </thead>
          <tbody>
            {newdata.map((item, index) => (
              item.Course.map((item, index) => (
              <tr key={index} >
                <td>{item.CourseCode}</td>
                <td>{item.Title}</td>
                <td>{item.Credits}</td>
              </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

const NewSemester = ({ catalog }) => {
  const [courseList, setCourseList] = useState([]);
  const [selectedCRN, setSelectedCRN] = useState(null);
  const addToSem = () => {
    if (selectedCRN === null) {
      return;
    }
    const courseCRN = selectedCRN;
    fetch(`/api/courses?CRN=${courseCRN}`).then(res => res.json().then(data => setCourseList([...courseList, data[0]])));
  }


  return (
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
          {courseList.map((item, index) => (
            <tr key={index}>
              <td>{item.CourseCode}</td>
              <td>{item.Title}</td>
              <td>{item.Credits}</td>
              <td>{item.Grade}</td>
            </tr>
          ))}
          <tr>
            <td>
              <select onChange={(e) => setSelectedCRN(e.target.value)} defaultValue="Course Title" className="select select-bordered w-full max-w-xs">
                <option disabled>Course Title</option>
                {catalog.map((item, index) => (
                  <option key={index} value={item.CRN}>{item.Course.Title}</option>
                ))}
              </select>
            </td>
            <td><button onClick={addToSem(selectedCRN)} className="btn btn-primary">Add Course</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );

} 

const Registration = () => {
  const [studentData, setStudentData] = useState([]);
  const [userCGPA, setUserCGPA] = useState(null);
  const [catalog, setCatalog] = useState([]);

  const fetchCatalog = async () => {
    try {
      const res = await fetch("/api/catalog?catID=1");
      const data = await res.json();
      setCatalog(data);
    } catch (err) {
      console.error("Failed to fetch catalog:", err);
    }
  };
  

  useEffect(() => {
    /*
    fetchStudentData gets all of the courses the student has taken
    this includes S.FirstName, SR.Grade, C.CourseCode, C.Title, C.Credits, SR.TermID
    It is then filtered by TermID in order to separate which courses were taken during which semester
    The data is then organized into an array of arrays, where each array is a semester
    The array is mapped onto the RegSemester component
    */
   fetchCatalog();
    const fetchStudentData = async () => {
      try {
        let email = "russ9214@fredonia.edu"
        const res = await fetch(`/api/student/studentCourses?email=${email}`);
        const studentData = await res.json();
        const terms = studentData.map(item => (item.Term.Semester + " "+ item.Term.Year)).filter((value, index, self) => self.indexOf(value) === index);//get all the unique terms for the selected student
        const organized_data = []
      for(let i = 1; i < terms.length; i++) {
        const termToCompareTo = terms[i]; //get the term to compare to
        const semData = studentData.filter((item) => (item.Term.Semester + " " + item.Term.Year) === termToCompareTo);//filter the data to only include the target term
        organized_data.push(semData)
      }
      setStudentData(organized_data);
      } catch (err) {
        console.error("Failed to fetch student data:", err);
      }
    };

    const fetchUserCGPA = async () => {
      try {
        const userEmail = "wals9256@fredonia.edu";
        const response = await fetch(`/api/student/CGPA?email=${userEmail}`);
        const data = await response.json();
    
        if (Array.isArray(data) && data.length > 0) {
          const userCGPAData = data[0];
          
          // Try and convert CGPA to a number
          const cgpa = parseFloat(userCGPAData.CGPA);
    
          if (!isNaN(cgpa)) { // Check if conversion was successful
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
  }, []);



  return (
    <>
    <h1 className="p-3 py-5 text-2xl">Registration for Spring 2024</h1>
    <div className="grid grid-cols-1 justify-between md:grid-cols-2">
      <div className="m-3 grid grid-cols-1 gap-8 h-full">
        <h1 className="text-xl">Your Plan</h1>
        <PlannedReg />
      </div>
      <div className="m-3 grid grid-cols-1 gap-8 h-full">
        <h1 className="text-xl">Advisor Recommendation</h1>
        <AdvisorRec />
      </div>
      <div className="m-3 grid grid-cols-1 gap-8 h-full">
        <h1 className="text-xl">Planned</h1>
        <NewSemester catalog={catalog}/>
      </div>
    </div>
    <h1 className="p-3 py-5 text-2xl">Actual Registration</h1>
    <div className="m-3 grid grid-cols-1 gap-8 h-full md:grid-cols-2">
    {studentData.map((item, index) => (
            <RegSemester key={index+1} number={index} data={item}/>
          ))}
    </div>
  </>
  )
}

export default Registration