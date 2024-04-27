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
import { uploadCustomSems, getCustomList, getCustomSems } from "@/firebase/firebaseManagement";


const DynamicCGPA = ({ cgpa, newCGPA }) => {
  return (
    <div className=" z-50 w-auto flex justify-between p-4 mx-20 bg-neutral-50 rounded-lg shadow-md sticky top-20">
      <div>
        <h1 className="text-xl font-bold">Academic Summary</h1>
        <p className="text-lg">CGPA: {cgpa ? cgpa.toFixed(2) : 'Unknown'}</p>
      </div>
      <div>
        <h1 className="text-xl font-bold">Dynamic GPA</h1>
        <p className="text-lg">GPA: {newCGPA ? newCGPA.toFixed(2) : 'Unknown'}</p>
      </div>
    </div>
  );
};








// const SemesterBody = ({ semesterCatalogData, catalogData, userCourses, currentCourses, handleCourseChange, handleGradeChange }) => { 
//   const getRecentGradeAndStatus = (crn) => {
//     const coursesWithCRN = userCourses.filter(course => course.Course.CRN === crn);
//     if (coursesWithCRN.length > 0) {
//       const mostRecentCourse = coursesWithCRN.reduce((mostRecent, course) => {
//         return (mostRecent.TermID > course.TermID) ? mostRecent : course;
//       });
//       return mostRecentCourse;
//     } else {
//       return null;
//     }
//   }
  
//         return (
//             <tbody>
//                 {semesterCatalogData.map((item, index) => {
//                   const courseStatus = userCourses.find((course) => course.Course.CRN === item.Course.CRN);
//                   const mostRecentCourse = getRecentGradeAndStatus(item.Course.CRN);
//                   //console.log("Most recent grade ", mostRecentCourse?.Grade, " For ", mostRecentCourse?.Course.CourseCode, " Status ", mostRecentCourse?.Status);
//                   if(mostRecentCourse?.Status === "Completed") {
//                   return (
//                     <tr key={index}>
//                       <td>
//                         {currentCourses[index] === undefined || currentCourses.length <= 0 ? item.Course.CourseCode : currentCourses[index]}
//                       </td>
//                       <td>
//                         {item.Course.Title}
//                       </td>
//                       <td>
//                         {item.Course.Credits}
//                       </td>
//                       <td className="tooltip" data-tip={courseStatus ? courseStatus.Status : "Not Taken"}>
//                         {(courseStatus && mostRecentCourse.Grade !== null) ? mostRecentCourse.Grade : <GoDash />}
//                       </td>
//                     </tr>
//                   );
//                 }
                
//                 else if (mostRecentCourse?.Status === "Enrolled"){
//                   return (
//                       <tr key={index}>
//                         <td>
//                         {currentCourses[index] === undefined || currentCourses.length <= 0 ? item.Course.CourseCode : currentCourses[index]}
//                       </td>
//                       <td>
//                         {item.Course.Title}
//                       </td>
//                       <td>
//                         {item.Course.Credits}
//                       </td>
//                         <td>
//                           <GradeComboBox 
//                           handleGradeChange={handleGradeChange} 
//                           index={index} />
//                         </td>
//                       </tr>);
//                 }
                 
//                 else{
//                   return (
//                       <tr key={index}>
//                         <td>
//                           {currentCourses[index] === undefined || currentCourses.length <= 0 ? item.Course.CourseCode : currentCourses[index]}
//                         </td>
//                         <td>
//                           <CourseComboBox 
//                           data={catalogData} 
//                           currentCourse={item.Course.Title} 
//                           courseStatus={courseStatus} 
//                           handleCourseChange={handleCourseChange} 
//                           index={index} />
//                         </td>
//                         <td>
//                           {item.Course.Credits}
//                         </td>
//                         <td>
//                           <GradeComboBox 
//                           handleGradeChange={handleGradeChange} 
//                           index={index} />
//                         </td>
//                       </tr>);
//                 }
//             })}
//         </tbody>
//         );
//     }


// {/* code used to render WhatIfSemester component....now depracated but not quite yet....
// {Array.from({ length: 8 }, (_, i) => {
//             const year = Math.ceil((i + 1) / 2);
//             const semesterStr = i % 2 === 0 ? "Fall" : "Spring";
//             const semesterCatalogCourses = filterCatalogCourses(
//               year,
//               semesterStr
//             );
//             const semesterUserCourses = filterUserCoursesForSemester(
//               semesterCatalogCourses
//             );
//             return (
//               <WhatIfSemester
//                 key={i + 1}
//                 number={i + 1}
//                 currentGPAs={currentGPAs}
//                 setCurrentGPAs={setCurrentGPAs}
//                 semesterCatalogData={semesterCatalogCourses} //data related to the roadmap suggested semester and year
//                 userCourses={semesterUserCourses} //data related to the courses the user has taken
//                 catalogData={catalog} //the whole catalog
//               />
//             );
//           })} */}
// const WhatIfSemester = ({ number, currentGPAs, setCurrentGPAs, semesterCatalogData, userCourses, catalogData }) => {
//     const [currentCourses, setCurrentCourses] = useState(Array(semesterCatalogData.length).fill(''));//state to hold the current course
//     const [currentGrades, setCurrentGrades] = useState(Array(semesterCatalogData.length).fill(''));//state to hold the current grades
    

//     const updateSemesterGPAs = () => {
//       let totalCredits = 0;
//       let totalPoints = 0;
//       currentGrades.forEach((item) => {
//         totalCredits += 3;
//         switch (item) {
//           case 'A':
//             totalPoints += 4 * 3;
//             break;
//           case 'A-':
//             totalPoints += 3.7 * 3;
//             break;
//           case 'B+':
//             totalPoints += 3.3 * 3;
//             break;
//           case 'B':
//             totalPoints += 3 * 3;
//             break;
//           case 'B-':
//             totalPoints += 2.7 * 3;
//             break;
//           case 'C+':
//             totalPoints += 2.3 * 3;
//             break;
//           case 'C':
//             totalPoints += 2 * 3;
//             break;
//           case 'C-':
//             totalPoints += 1.7 * 3;
//             break;
//           case 'D+':
//             totalPoints += 1.3 * 3;
//             break;
//           case 'D':
//             totalPoints += 1 * 3;
//             break;
//           case 'D-':
//             totalPoints += 0.7 * 3;
//             break;
//           case 'S':
//             totalCredits -= 3;
//             break;
//           case 'WC':
//             totalCredits -= 3;
//             break;
//           default:
//             totalPoints += 0;
//         }
//       });
//       return ((totalPoints / totalCredits).toFixed(2) !== "NaN" ? (totalPoints / totalCredits).toFixed(2) : null);
      
//     };

//     const handleGradeChange = (e, index) => {
//         const grade = e.target.value;
//         setCurrentGrades(prevGrades => {
//             const newGrades = [...prevGrades];
//             newGrades[index] = grade;
//             return newGrades;
//         });
//       };
//     const handleCourseChange = (e, index) => {
//       const course = e.target.value;
//       setCurrentCourses(prevCourses => {
//         const newCourses = [...prevCourses];
//         newCourses[index] = course;
//         return newCourses;
//       });
//     };
    
//     useEffect(() => {
//       setCurrentGPAs(prevGPAs => {
//         const newGPAs = [...prevGPAs];
//         if (calculateGPA(userCourses) !== null && calculateGPA(userCourses) !== '0.00') {
//           newGPAs[number - 1] = calculateGPA(userCourses);
//           return newGPAs;
//         }
//         else if (updateSemesterGPAs() !== null && updateSemesterGPAs() !== '0.00') {
//           newGPAs[number - 1] = updateSemesterGPAs();
//           return newGPAs;
//         }
//         return prevGPAs;
//       });
      
//     }, [currentGrades, currentCourses, calculateGPA(userCourses), updateSemesterGPAs()]);
    
//     return (
//       <>
//         <div>
//           <h1 className="tooltip py-2 pl-1 text-lg" 
//           data-tip={(currentGPAs[number - 1] !== null && currentGPAs[number - 1] !== 0) ? currentGPAs[number - 1] : "No grade"}>
//             Semester {number}</h1>
//           <div className="border rounded">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th className="whitespace-nowrap">Course Code</th>
//                   <th>Course Title</th>
//                   <th>Credits</th>
//                   <th>Grade</th>
//                 </tr>
//               </thead>
             
//               <SemesterBody 
//               semesterCatalogData={semesterCatalogData} 
//               catalogData={catalogData} 
//               userCourses={userCourses} 
//               currentCourses={currentCourses} 
//               handleCourseChange={handleCourseChange} 
//               handleGradeChange={handleGradeChange} />
//             </table>
//           </div>
//         </div>
//       </>
//     );
//   };


const RoadMap = () => {
  const [catalog, setCatalog] = useState([]);
  const [userCourses, setUserCourses] = useState(null);
  const [userCGPA, setUserCGPA] = useState(null);
  const [newCGPA, setNewCGPA] = useState(null);
  const [currentGPAs, setCurrentGPAs] = useState(Array(8).fill(0.00)); //state to hold the current GPAs for each semester
  const [extraSemester, setExtraSemester] = useState([]);
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
  
  const addExtraSemester = () => {
    setExtraSemester(prevSemesters => {
      const newSemesters = [...prevSemesters];
      newSemesters.push([]);
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

  const getCustomLists = async () => {
    const list = await getCustomList();
    setCustomList(list);
  }

  const loadSaveData = async () => {
    console.error("Selected list: ", selectedList);
    const data = await getCustomSems(selectedList);
    setSaveData(data.semesters);
    setPlanName(data.name);
    console.error("Loaded data: ", data);
  }

  useEffect(() => {
    fetchCatalog();
    fetchUserCourses();
    fetchUserCGPA();
    setSaveDataID(crypto.randomUUID())
    getCustomLists();
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
        <div className="flex justify-center">
          <input type="text" value={planName} className="input input-bordered m-5" placeholder="Plan Name" />
          <select defaultValue="Select a saved plan" className="select input-bordered m-5" onChange={(e) => setSelectedList(e.target.value)}>
            {customList.map((item, index) => (
              <option key={index} value={item.id}>{item.name}</option>
            ))}
          </select>
          <button className="btn btn-primary m-5" onClick={() => loadSaveData()}>Load Saved Plan</button>
          <button className="btn btn-primary m-5" onClick={() => uploadCustomSems(session.user.email, saveData, saveDataID, planName)}>Save Current Plan</button>
        </div>
        <div className="grid grid-cols-1 gap-8 h-full lg:grid-cols-2">
          
          {extraSemester.map((item, index) => {
            
            return(
            <WhatIfExtra
              key={index + 1}
              semNumber={index}
              currentGPAs={currentGPAs}
              setCurrentGPAs={setCurrentGPAs}
              userCourses={[]}
              catalogData={catalog}
              setSaveData={setSaveData}
            />)
          })}
          
          <button className="btn btn-primary m-5" onClick={() => addExtraSemester()}>Add A New Semester...</button>

          
           
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

export default RoadMap;
