"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { FaCheckCircle, FaTimesCircle, FaUserCheck, FaRegCircle } from "react-icons/fa";
import { fetchCatalogCourses, fetchUserCourses, fetchUserCGPA, fetchStudentInfo } from './apiCalls'; 
import { GoDash } from "react-icons/go";
import GradeComboBox from "@/components/GradeComboBox";
import CourseComboBox from "@/components/CourseComboBox";
import calculateGPA from "@/components/calculateGPA";
import WhatIfExtra from "@/components/WhatIfExtra";
//import RegSemester from "@/components/RegSemester";
import { uploadCustomSems, getCustomList, getCustomSems } from "@/firebase/firebaseManagement";
import Icon from '@mdi/react';
import { mdiProgressHelper } from '@mdi/js';
import { cn } from "@/lib/utils";



const RegSemester = ({ number, data }) => {
  const [currentGrades, setCurrentGrades] = useState([]);
  const totalCredits = data.reduce((acc, item) => acc + item.Course.Credits, 0);
  const successGrades = ['A', 'B'];
  const warnGrades = ['C', 'D'];

  const handleGradeChange = (e, index) => {
    const grade = e.target.value;
    setCurrentGrades(prevGrades => {
        const newGrades = [...prevGrades];
        newGrades[index] = grade;
        return newGrades;
    });
  };


  useEffect(() => {
    setCurrentGrades(data.map(item => item.Grade));
  } , [data]);

  return (
  
    <div className="rounded-lg shadow px-3 pt-2 pb-4 bg-base-200">
      <div className="flex justify-between items-center">
        <h1 className="py-2 pl-1 text-lg font-semibold"
        data-tip={(calculateGPA(data) !== null && calculateGPA(data)  !== 0) ? calculateGPA(data) : "No grade"}>{data[0]?.Term.Semester + " " + data[0]?.Term.Year}</h1>
        <div>
          {totalCredits > 0 ? <span className="text-base">Total Credits: {totalCredits}</span> : null} {/*if there is no applicable grade do not display it */}
          {calculateGPA(data) > 0.0 ? <span className="text-base">GPA: {calculateGPA(data)}</span> : null} {/*if there is no applicable grade do not display it */}
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
              <th>Change Grade</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={cn({
                "bg-error" : item.Grade === 'F', 
                'bg-success': item.Grade ? successGrades.some(substring => item.Grade.includes(substring)) : false,
                'bg-warning': item.Grade ? warnGrades.some(substring => item.Grade.includes(substring)) : false
                }, )}>
                <td>{item.Course.CourseCode}</td>
                <td>{item.Course.Title}</td>
                <td>{item.Course.Credits}</td>
                <td className={cn({"text-red-600" : item.Grade === 'F', 'text-green-600': item.Grade === 'A'}, )}
                >{ item.Grade === null ? <span className="tooltip" data-tip="In Progress..."><Icon path={mdiProgressHelper} title="Progress" size={1} color="blue" /></span> : 
                item.Grade}</td>
                <td><GradeComboBox handleGradeChange={handleGradeChange} index={index}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
  
  );
};



const DynamicCGPA = ({  newCGPA }) => {
  return (
    <div>
      <div className="stat py-0 ">
        <div className="stat-title">Dynamic GPA</div>
        <div className="stat-value">{newCGPA ? newCGPA.toFixed(2) : "Unavailable"} </div>
        <div className="stat-desc">Edit grades to see how your CGPA will change!</div>
      </div>
    </div>
  );
};

const FuturePlan = () => {
  const [catalog, setCatalog] = useState([]);
  const [userCourses, setUserCourses] = useState(null);
  const [userCGPA, setUserCGPA] = useState(null);
  const [newCGPA, setNewCGPA] = useState(null); //state to hold the dynamic GPA
  const [currentGPAs, setCurrentGPAs] = useState([]); //state to hold the current GPAs for each semester
  const [extraSemester, setExtraSemester] = useState([]);
  const [extraSemGPAs, setExtraSemGPAs] = useState([]); //state to hold the GPAs for the extra semesters
  const [realStudentData, setRealStudentData] = useState([]);
  const { data: session, status } = useSession();


  const [saveData, setSaveData] = useState([]); //state to hold the data that will be saved to the database
  const [saveDataID, setSaveDataID] = useState();
  const [customList, setCustomList] = useState([]); //state to hold the list of previously saved data in db
  const [selectedList, setSelectedList] = useState(); //state to hold the selected data from the db
  const [planName, setPlanName] = useState(); //state to hold the name of the plan
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
        `/api/student/studentCourses?email=${session.user.email}`
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
      const response = await fetch(`/api/student/CGPA?email=${session.user.email}`);
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0 || data.CGPA) {
        
        // Try and convert CGPA to a number
        const cgpa = parseFloat(data.CGPA);
        console.log("CGPA in future plan", cgpa);
  
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
      let nextValue = extraSemester.length + 1;
      // Check if the nextValue already exists in the extraSemester array
      while (newSemesters.some(item => item[0] === nextValue)) {
        nextValue++;
      }
      // Add the unique value to the beginning of the newSemesters array
      newSemesters.unshift([nextValue]);
      console.log("Extra semesters", newSemesters);
      return newSemesters;
    });
    setExtraSemGPAs(prevGPAs => {
      const newGPAs = [...prevGPAs];
      newGPAs.unshift(0.00);
      return newGPAs;
    });
    setSaveData(prevData => {
        const newData = [...prevData];
        newData.unshift([]);
        console.log("previous data in parent after first", prevData);
        console.log("New data parent", newData);
        return newData;
      
    });
    console.log(extraSemester)
  }
  
  const removeExtraSemester = (indexToRemove) => {
    console.log("Removing semester at index", indexToRemove);
    setExtraSemester(prevSemesters => {
      const newSemesters = [...prevSemesters];
      newSemesters.splice(indexToRemove, 1);
      return newSemesters;
    });
    setExtraSemGPAs(prevGPAs => {
      const newGPAs = [...prevGPAs];
      newGPAs.splice(indexToRemove, 1);
      return newGPAs;
    });
    setSaveData(prevData => {
      const newData = [...prevData];
      newData.splice(indexToRemove, 1);
      return newData;
    });
  };
  

  const getCustomLists = async () => {
    const list = await getCustomList();
    setCustomList(list);
  }

  const loadSaveData = async () => {
    console.error("Selected list: ", selectedList);
    const data = await getCustomSems(selectedList);
    setSaveData(data.semesters);
    setPlanName(data.name);
    setExtraSemester(data.semesters.map((item, index) => [index + 1]));
    console.log("Save data", saveData);
  }

  useEffect(() => { //this useEffect is to fill the currentGPAs array with the GPAs of the real student data
    realStudentData.forEach((item, index) => {
      setCurrentGPAs(prevGPAs => {
        const newGPAs = [...prevGPAs];
        newGPAs.push(calculateGPA(item));
        return newGPAs;
      });
    });
  }, [realStudentData]);

  useEffect(() => {
    fetchCatalog();
    fetchUserCourses();
    fetchUserCGPA();
    setSaveDataID(crypto.randomUUID());
    getCustomLists();
  }, [status]);



  useEffect(() => { //this useEffect is to update the newCGPA whenever the currentGPAs or extraSemGPAs change
    setNewCGPA(updateNewCGPA());
  }, [currentGPAs, extraSemGPAs]);

  const updateNewCGPA = () => {
    let total = 0;
    let acceptedGPAs = 0;
    for (let i = 0; i < realStudentData.length; i++) {
      let currNum = parseFloat(currentGPAs[i]);
      if (currNum !== 0.00) {
       total = total + currNum;
       acceptedGPAs++;
      }
    }
    for (let i = 0; i < extraSemGPAs.length; i++) {
      let currNum = parseFloat(extraSemGPAs[i]);
      if (currNum !== 0.00) {
        total = total + currNum;
        acceptedGPAs++;
      }
    }
    console.log("All current GPAs", currentGPAs);
    console.log("All extra GPAs", extraSemGPAs);
    console.log("The new CGPA is", total / acceptedGPAs);
    return total / acceptedGPAs;
  }

  return (
    <>
      <div className="p-3 pt-6">
        <h1 className="text-2xl text-center">Future Plan</h1>
        <div className="flex justify-center">
          <input type="text" value={planName} className="input input-bordered m-5" placeholder="Plan Name" />
          <button className="btn btn-primary m-5" onClick={() => uploadCustomSems(session.user.email, saveData, saveDataID, planName)}>Save Current Plan</button>
          <button className="btn btn-primary m-5" onClick={()=>document.getElementById('loadModal').showModal()}>Load Saved Plan</button>
        </div>
        <div className="flex justify-between">
          <button className="btn btn-primary my-5" onClick={() => addExtraSemester()}>Add A New Semester...</button>
          <DynamicCGPA newCGPA={newCGPA} />
        </div>
        <div className="mb-10 grid grid-cols-1 gap-8 h-full lg:grid-cols-2 grid-flow-row">
          {extraSemester.map((item, index) => {
            return (
              <div key={item[0]} className="relative">
                <WhatIfExtra
                  semNumber={item[0]}
                  extraSemester={extraSemester} //this is the array of extra semesters and holds unique values that are used as keys for the semesters so they will always be unique. 
                                                //In WhatIfExtra I have to find the exact index from the extraSemester array to be able to accurately handle save data manipulation and GPA calculations
                  currentGPAs={extraSemGPAs}//its named current GPAs but it is the GPAs for the extra semesters
                  setCurrentGPAs={setExtraSemGPAs}
                  userCourses={[]} //I have to remove this field currently it does nothing in the whatIfExtra component
                  catalogData={catalog}
                  setSaveData={setSaveData}
                  saveData={saveData[item[0]]}
                />
                <button className="btn btn-error btn-circle btn-xs absolute right-2 top-2 text-white" onClick={() => removeExtraSemester(index)}><GoDash/></button>
              </div>)
            })}
        </div>
        <div className="grid grid-cols-1 gap-8 h-full lg:grid-cols-2">
        {realStudentData.map((item, index) => (
            <RegSemester key={index+1} number={index} data={item}/> //regSemester was moved out of components folder and is local to this page to include the grade change combo boxes
          ))}
         </div>
      </div>
      <dialog id="loadModal" className="modal">
        <div className="modal-box">
          <div className="flex flex-col">
            <h3 className="font-bold text-lg text-center">Select a plan</h3>
            <select value={selectedList} className="select input-bordered m-5" onChange={(e) => setSelectedList(e.target.value)}>
              <option value="" selected disabled>Select a Plan...</option>
              {customList.map((item, index) => (
                <option key={index} value={item.id}>{item.name}</option>
              ))}
            </select>
            <button className="btn btn-primary m-2" onClick={() => loadSaveData().then(document.getElementById('loadModal').close())}>Load</button>
            <button className="btn btn-error m-2" onClick={() => document.getElementById('loadModal').close()}>Cancel</button>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default FuturePlan;
