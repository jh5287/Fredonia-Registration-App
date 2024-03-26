"use client";
import { useState, useEffect } from "react";
import Semester from "@/components/Semester";
import AcademicSummaryBanner from "@/components/AcademicSummary";
import { useSession } from "next-auth/react";
import { FaCheckCircle, FaTimesCircle, FaUserCheck, FaRegCircle } from "react-icons/fa";
import {GoDash} from "react-icons/go";


const NewAcademicSummaryBanner = ({ cgpa, newCGPA }) => {
  return (
    <div className="flex justify-between p-4 bg-neutral-50 rounded-lg shadow-md">
      <div>
        <h1 className="text-xl font-bold">Academic Summary</h1>
        <p className="text-lg">CGPA: {cgpa ? cgpa.toFixed(2) : 'Unknown'}</p>
      </div>
      <div>
        <h1 className="text-xl font-bold">GPA</h1>
        <p className="text-lg">GPA: {newCGPA ? newCGPA.toFixed(2) : 'Unknown'}</p>
      </div>
    </div>
  );
};

//I think this is bad practice to have the same function in two different files
//I think it would be better to have a utils file that has the function and import it in both files
//I think this is bad practice because if you want to change the function you have to change it in two different files
//and if you forget to change it in one of the files it could cause bugs
//And it could be more dynamic to not have the item hard coded in the function
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
  return ((totalPoints / totalCredits).toFixed(2) !== "NaN" ? (totalPoints / totalCredits).toFixed(2) : null);
}

const CourseComboBox = ({ data, currentCourse, courseStatus, handleCourseChange, index }) => {
    if(courseStatus?.Status === "Completed" || courseStatus?.Status === "Enrolled") {
        return (
            <select defaultValue={'DEFAULT'} className="select select-primary w-full" onChange={handleCourseChange} disabled>
                <option value="DEFAULT" disabled>{currentCourse}</option>
                {data.map((item, index) => (
                    <option key={index} value={item.Course.CourseCode}>{item.Course.Title}</option>
                ))}
            </select>
        );
    }
    else{
    return (
        <select defaultValue={'DEFAULT'} className="select select-primary w-full" onChange={(e) => handleCourseChange(e, index)}>
            <option value="DEFAULT" disabled>{currentCourse}</option>
            {data.map((item, index) => (
                <option key={index} value={item.Course.CourseCode}>{item.Course.Title}</option>
            ))}
        </select>
    );}
};

const GradeComboBox = ({ handleGradeChange, index }) => {
    return (
        <select defaultValue={'DEFAULT'} className="select select-primary w-full" onChange={(e) => handleGradeChange(e, index)}>
            <option value="DEFAULT" disabled>Select a grade</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="D-">D-</option>
            <option value="F">F</option>
            <option value="S">S</option>
            <option value="WC">WC</option>
        </select>
    );
};

const SemesterBody = ({ semesterCatalogData, catalogData, userCourses, currentCourses, handleCourseChange, handleGradeChange }) => { 
  const getRecentGradeAndStatus = (crn) => {
    const coursesWithCRN = userCourses.filter(course => course.CRN === crn);
    if (coursesWithCRN.length > 0) {
      const mostRecentCourse = coursesWithCRN.reduce((mostRecent, course) => {
        return (mostRecent.TermID > course.TermID) ? mostRecent : course;
      });
      return mostRecentCourse;
    } else {
      return null;
    }
  }
  
        return (
            <tbody>
                {semesterCatalogData.map((item, index) => {
                  const courseStatus = userCourses.find((course) => course.CRN === item.Course.CRN);
                  const mostRecentCourse = getRecentGradeAndStatus(item.Course.CRN);
                  if(mostRecentCourse?.Status === "Completed" || mostRecentCourse?.Status === "Enrolled") {
                  return (
                    <tr key={index}>
                      <td>
                        {currentCourses[index] === undefined || currentCourses.length <= 0 ? item.Course.CourseCode : currentCourses[index]}
                      </td>
                      <td>
                        {item.Course.Title}
                      </td>
                      <td>
                        {item.Course.Credits}
                      </td>
                      <td className="tooltip" data-tip={courseStatus ? courseStatus.Status : "Not Taken"}>
                        {(courseStatus && mostRecentCourse.Grade !== null) ? mostRecentCourse.Grade : <GoDash />}
                      </td>
                    </tr>
                  );
                }
                else{
                  return (
                      <tr key={index}>
                        <td>
                          {currentCourses[index] === undefined || currentCourses.length <= 0 ? item.Course.CourseCode : currentCourses[index]}
                        </td>
                        <td>
                          <CourseComboBox 
                          data={catalogData} 
                          currentCourse={item.Course.Title} 
                          courseStatus={courseStatus} 
                          handleCourseChange={handleCourseChange} 
                          index={index} />
                        </td>
                        <td>
                          {item.Course.Credits}
                        </td>
                        <td>
                          <GradeComboBox 
                          handleGradeChange={handleGradeChange} 
                          index={index} />
                        </td>
                      </tr>);
                }
            })}
        </tbody>
        );
    }



const WhatIfSemester = ({ number, currentGPAs, setCurrentGPAs, semesterCatalogData, userCourses, catalogData }) => {
    const [currentCourses, setCurrentCourses] = useState(Array(semesterCatalogData.length).fill(''));//state to hold the current course
    const [currentGrades, setCurrentGrades] = useState(Array(semesterCatalogData.length).fill(''));//state to hold the current grades
    

    const updateSemesterGPAs = () => {
      let totalCredits = 0;
      let totalPoints = 0;
      currentGrades.forEach((item) => {
        totalCredits += 3;
        switch (item) {
          case 'A':
            totalPoints += 4 * 3;
            break;
          case 'A-':
            totalPoints += 3.7 * 3;
            break;
          case 'B+':
            totalPoints += 3.3 * 3;
            break;
          case 'B':
            totalPoints += 3 * 3;
            break;
          case 'B-':
            totalPoints += 2.7 * 3;
            break;
          case 'C+':
            totalPoints += 2.3 * 3;
            break;
          case 'C':
            totalPoints += 2 * 3;
            break;
          case 'C-':
            totalPoints += 1.7 * 3;
            break;
          case 'D+':
            totalPoints += 1.3 * 3;
            break;
          case 'D':
            totalPoints += 1 * 3;
            break;
          case 'D-':
            totalPoints += 0.7 * 3;
            break;
          case 'S':
            totalCredits -= 3;
            break;
          case 'WC':
            totalCredits -= 3;
            break;
          default:
            totalPoints += 0;
        }
      });
      return ((totalPoints / totalCredits).toFixed(2) !== "NaN" ? (totalPoints / totalCredits).toFixed(2) : null);
      
    };

    const handleGradeChange = (e, index) => {
        const grade = e.target.value;
        setCurrentGrades(prevGrades => {
            const newGrades = [...prevGrades];
            newGrades[index] = grade;
            return newGrades;
        });
      };
    const handleCourseChange = (e, index) => {
      const course = e.target.value;
      setCurrentCourses(prevCourses => {
        const newCourses = [...prevCourses];
        newCourses[index] = course;
        return newCourses;
      });
    };
    
    useEffect(() => {
      setCurrentGPAs(prevGPAs => {
        const newGPAs = [...prevGPAs];
        if (calculateGPA(userCourses) !== null && calculateGPA(userCourses) !== '0.00') {
          newGPAs[number - 1] = calculateGPA(userCourses);
          return newGPAs;
        }
        else if (updateSemesterGPAs() !== null && updateSemesterGPAs() !== '0.00') {
          newGPAs[number - 1] = updateSemesterGPAs();
          return newGPAs;
        }
        return prevGPAs;
      });
      
    }, [currentGrades, currentCourses, calculateGPA(userCourses), updateSemesterGPAs()]);
    
    return (
      <>
        <div>
          <h1 className="tooltip py-2 pl-1 text-lg" 
          data-tip={(calculateGPA(userCourses) !== null && calculateGPA(userCourses) !== '0.00') ? calculateGPA(userCourses) : "No grade"}>
            Semester {number}</h1>
            <button value="A" onClick={handleGradeChange}>Christ on a stick</button>
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
             
              <SemesterBody 
              semesterCatalogData={semesterCatalogData} 
              catalogData={catalogData} 
              userCourses={userCourses} 
              currentCourses={currentCourses} 
              handleCourseChange={handleCourseChange} 
              handleGradeChange={handleGradeChange} />
            </table>
          </div>
        </div>
      </>
    );
  };


const RoadMap = () => {
  const [catalog, setCatalog] = useState([]);
  const [userCourses, setUserCourses] = useState(null);
  const [userCGPA, setUserCGPA] = useState(null);
  const [newCGPA, setNewCGPA] = useState(null);
  const [currentGPAs, setCurrentGPAs] = useState(Array(8).fill(0.00)); //state to hold the current GPAs for each semester
  const [sem1GPA, setSem1GPA] = useState(0.00);
  const [sem2GPA, setSem2GPA] = useState(0.00);
  const [sem3GPA, setSem3GPA] = useState(0.00);
  const [sem4GPA, setSem4GPA] = useState(0.00);
  const [sem5GPA, setSem5GPA] = useState(0.00);
  const [sem6GPA, setSem6GPA] = useState(0.00);
  const [sem7GPA, setSem7GPA] = useState(0.00);
  const [sem8GPA, setSem8GPA] = useState(0.00);
  const { data: session, status } = useSession();
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
      const userEmail = "wals9256@fredonia.edu";
      const response = await fetch(
        `/api/student/studentCourses?email=${userEmail}`
      );
      const data = await response.json();
      setUserCourses(data);
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
    return total / acceptedGPAs;
  }
  // Filter catalog by year and semester
  const filterCatalogCourses = (year, semester) => {
    return catalog.filter(
      (course) =>
        course.RecommendedYear === year &&
        course.RecommendedSemester === semester
    );
  };

  // Filter user courses by a semester catalog
  const filterUserCoursesForSemester = (filteredCatalogCourses) => {
    if (!Array.isArray(userCourses) || userCourses.length === 0) {
      return [];
    }

    return userCourses.filter((userCourse) =>
      filteredCatalogCourses.some(
        (catalogCourse) => catalogCourse.CRN === userCourse.CRN
      )
    );
  };
  return (
    <>
      <div className="p-3">
        <NewAcademicSummaryBanner cgpa={userCGPA} newCGPA={newCGPA}/>
        <div className="flex flex-col items-center">
          <h1 className="py-5 text-2xl">Computer Science Roadmap</h1>
          <div className="flex flex-row">
            <div className="flex flex-row items-center mx-2">
              <FaCheckCircle color="green" />
              <p>=Completed</p>
            </div>
            <div className="flex flex-row items-center mx-2">
              <FaTimesCircle color="red" />
              <p>=Incomplete</p>
            </div>
            <div className="flex flex-row items-center mx-2">
              <FaUserCheck color="blue" />
              <p>=Enrolled</p>
            </div>
            <div className="flex flex-row items-center mx-2">
              <FaRegCircle />
              <p>=Not Taken</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 h-full lg:grid-cols-2">
          {Array.from({ length: 8 }, (_, i) => {
            const year = Math.ceil((i + 1) / 2);
            const semesterStr = i % 2 === 0 ? "Fall" : "Spring";
            const semesterCatalogCourses = filterCatalogCourses(
              year,
              semesterStr
            );
            const semesterUserCourses = filterUserCoursesForSemester(
              semesterCatalogCourses
            );
            return (
              <WhatIfSemester
                key={i + 1}
                number={i + 1}
                currentGPAs={currentGPAs}
                setCurrentGPAs={setCurrentGPAs}
                semesterCatalogData={semesterCatalogCourses} //data related to the roadmap suggested semester and year
                userCourses={semesterUserCourses} //data related to the courses the user has taken
                catalogData={catalog} //the whole catalog
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RoadMap;
