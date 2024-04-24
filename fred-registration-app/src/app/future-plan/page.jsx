"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { FaCheckCircle, FaTimesCircle, FaUserCheck, FaRegCircle } from "react-icons/fa";
import { fetchCatalogCourses, fetchUserCourses, fetchUserCGPA, fetchStudentInfo } from './apiCalls'; 
import {GoDash} from "react-icons/go";
import GradeComboBox from "@/components/GradeComboBox";
import CourseComboBox from "@/components/CourseComboBox";
import calculateGPA from "@/components/calculateGPA";
import TitleCard from "@/components/TitleCard";
import WhatIfExtra from "@/components/WhatIfExtra";
import RegSemester from "@/components/RegSemester";


const DynamicCGPA = ({ cgpa, newCGPA }) => {
  return (
    <div className=" z-50 w-auto flex justify-between p-4 mx-20 bg-neutral-50 rounded-lg shadow-md sticky top-20">
      <div>
        <h1 className="text-xl font-bold">Academic Summary</h1>
        <p className="text-lg">CGPA: {cgpa ? cgpa?.toFixed(2) : 'Unknown'}</p>
      </div>
      <div>
        <h1 className="text-xl font-bold">Dynamic GPA</h1>
        <p className="text-lg">GPA: {newCGPA ? newCGPA?.toFixed(2) : 'Unknown'}</p>
      </div>
    </div>
  );
};



const FuturePlan = () => {
  const [catalog, setCatalog] = useState([]);
  const [userCourses, setUserCourses] = useState(null);
  const [userCGPA, setUserCGPA] = useState(null);
  const [newCGPA, setNewCGPA] = useState(null);
  const [currentGPAs, setCurrentGPAs] = useState(Array(8).fill(0.00)); //state to hold the current GPAs for each semester
  const [extraSemester, setExtraSemester] = useState([]);
  const [realStudentData, setRealStudentData] = useState([]);

  const [saveData, setSaveData] = useState([]); //state to hold the data that will be saved to the database
  // Fetch catalog data
  const fetchCatalog = async () => {
    try {
      const res = await fetch("/api/catalog?catID=1");
      const data = await res.json();
      setCatalog(data);
    } catch (err) {
      console.error("Failed to fetch catalog:", err);
    }
  };

  // Fetch user course data
  const fetchUserCourses = async () => {
    try {
      const userEmail = "russ9214@fredonia.edu";
      const response = await fetch(
        `/api/student/studentCourses?email=${userEmail}`
      );
      const data = await response.json();
      setUserCourses(data);
      //console.log("User courses", data);
      const uniqueTerms = Array.from(new Set(data.map(item => `${item.Term.Semester} ${item.Term.Year}`)));

      // Organizing data by terms
      const organized_data = uniqueTerms.map(term => data.filter(item => `${item.Term.Semester} ${item.Term.Year}` === term));
      setRealStudentData(organized_data);
      //console.log("Real student data", organized_data);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  };

  // Fetch user CGPA data
  const fetchUserCGPA = async () => {
    try {
      const userEmail = "wals9256@fredonia.edu";
      const response = await fetch(`/api/student/CGPA?email=${userEmail}`);
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0 || data.CGPA) {
        
        // Try and convert CGPA to a number
        const cgpa = parseFloat(data.CGPA);
        console.log("CGPA", cgpa);
  
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
  
  const addExtraSemester = () => {
    setExtraSemester(prevSemesters => {
      const newSemesters = [...prevSemesters];
      newSemesters.unshift([extraSemester.length + 1]);
      console.log("Extra semesters", newSemesters);
      return newSemesters;
    });
    setCurrentGPAs(prevGPAs => {
      const newGPAs = [...prevGPAs];
      newGPAs.push(0.00);
      return newGPAs;
    });
    setSaveData(prevData => {
      const newData = [...prevData];
      newData.push([]);
      return newData;
    });
  }

  useEffect(() => {
    fetchCatalog();
    fetchUserCourses();
    fetchUserCGPA();
  }, []);

  useEffect(() => {
    setNewCGPA(updateNewCGPA());
  }, [currentGPAs]);


  const updateNewCGPA = () => {
    console.log("Updating new CGPA");
    let total = 0;
    let acceptedGPAs = 0;
    for (let i = 0; i < 8; i++) {
      let currNum = parseFloat(currentGPAs[i]);
      if (currNum !== 0.00) {
       total = total + currNum;
       acceptedGPAs++;
      }
    }
    console.log("All the GPAs lead to", currentGPAs);
    console.log("The new CGPA is", total / acceptedGPAs);
    return total / acceptedGPAs;
  }
  

  
  return (
    <>
      <div className="p-3">
        <h1 className="text-2xl text-center">Future Plan</h1>
        <DynamicCGPA cgpa={userCGPA} newCGPA={newCGPA} />

        <button className="btn btn-primary my-5" onClick={() => addExtraSemester()}>Add A New Semester...</button>
        <div className="mb-10 grid grid-cols-1 gap-8 h-full lg:grid-cols-2 grid-flow-row">


          {extraSemester.map((item, index) => {
            
            return(
            <WhatIfExtra
              key={item[0]}
              semNumber={item[0]}
              currentGPAs={currentGPAs}
              setCurrentGPAs={setCurrentGPAs}
              userCourses={[]}
              catalogData={catalog}
              setSaveData={setSaveData}
            />)
          })}
          
          
           
        </div>
        <div className="grid grid-cols-1 gap-8 h-full lg:grid-cols-2">
        {realStudentData.map((item, index) => (
            <RegSemester key={index+1} number={index} data={item}/>
          ))}
         </div>
      </div>
    </>
  );
};

export default FuturePlan;
