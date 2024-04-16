"use client";
import { useState, useEffect } from "react";
import GradeComboBox from "@/components/GradeComboBox";
import CourseComboBox from "@/components/CourseComboBox";
import calculateGPA from "@/components/calculateGPA";
import { cn } from "@/lib/utils";
import { FaPlus } from "react-icons/fa";

const SemesterRow = ({ index, catalogData, userCourses, currentCourses, handleCourseChange, handleGradeChange }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({title: '', code: '', credits: '' });
  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    // Filter catalogData based on inputValue and update searchResults
    const filteredResults = catalogData.filter(course => course.Course.Title.toLowerCase().includes(inputValue.toLowerCase()));
    console.log("filteredResults", filteredResults);
    setSearchResults(filteredResults);
};

const handleCourseSelection = (selectedCourse) => {
    setSelectedCourse({title : selectedCourse.Course.Title, code: selectedCourse.Course.CourseCode, credits: selectedCourse.Course.Credits });
    setSearchInput(selectedCourse.Course.Title);
};

          return (
            <tr key={index}>
              <td>
                {selectedCourse.code !== '' ? selectedCourse?.code : 'No Course Selected'}
              </td>
              <td>

                <div tabIndex={0} className="dropdown">
                  <input type="text" value={searchInput} onChange={handleSearchInputChange} 
                  placeholder="Enter Class Name"
                  className="input input-bordered input-primary w-full max-w-xs" />
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      {searchResults.map((course, index) => (
                          <li key={index} onClick={() => handleCourseSelection(course)}><a>{course.Course.Title}</a></li>
                      ))}
                  </ul>
                </div>
              </td>
              <td>
              {selectedCourse.credits !== '' ? selectedCourse.credits : ''}
              </td>
              <td>
                <GradeComboBox 
                handleGradeChange={handleGradeChange} 
                index={index} />
              </td>
            </tr>);

};

const SemesterBody = ({ tableData, catalogData, userCourses, currentCourses, handleCourseChange, handleGradeChange, handleAddRow }) => { 
//   const [searchInput, setSearchInput] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState({title: '', code: '', credits: '' });

//   const handleSearchInputChange = (e) => {
//     const inputValue = e.target.value;
//     setSearchInput(inputValue);
//     // Filter catalogData based on inputValue and update searchResults
//     const filteredResults = catalogData.filter(course => course.Course.Title.toLowerCase().includes(inputValue.toLowerCase()));
//     console.log("filteredResults", filteredResults);
//     setSearchResults(filteredResults);
// };

// const handleCourseSelection = (selectedCourse) => {
//     setSelectedCourse({title : selectedCourse.Course.Title, code: selectedCourse.Course.CourseCode, credits: selectedCourse.Course.Credits });
//     setSearchInput(selectedCourse.Course.Title);
// };
          return (
              <tbody>
                  {tableData.map((item, index) => {
                    const courseStatus = userCourses.find((course) => course.Course.CRN === item.Course.CRN);
                    
                    return (
                        // <tr key={index}>
                        //   <td>
                        //     {selectedCourse.code !== '' ? selectedCourse?.code : 'No Course Selected'}
                        //   </td>
                        //   <td>
                            
                        //     <div tabIndex={0} className="dropdown">
                        //       <input type="text" value={searchInput} onChange={handleSearchInputChange} 
                        //       placeholder="Enter Class Name"
                        //       className="input input-bordered input-primary w-full max-w-xs" />
                        //       <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        //           {searchResults.map((course, index) => (
                        //               <li key={index} onClick={() => handleCourseSelection(course)}><a>{course.Course.Title}</a></li>
                        //           ))}
                        //       </ul>
                        //     </div>
                        //   </td>
                        //   <td>
                        //   {selectedCourse.credits !== '' ? selectedCourse.credits : ''}
                        //   </td>
                        //   <td>
                        //     <GradeComboBox 
                        //     handleGradeChange={handleGradeChange} 
                        //     index={index} />
                        //   </td>
                        // </tr>
                        <SemesterRow 
                        key={index}
                        index={index}
                        catalogData={catalogData}
                        userCourses={userCourses}
                        currentCourses={currentCourses}
                        handleCourseChange={handleCourseChange}
                        handleGradeChange={handleGradeChange} />
                      );
              })}
              <tr>
                <td colSpan="4">
                    <button className='btn btn-accent w-full'onClick={handleAddRow}><FaPlus/></button>
                </td>
            </tr>
          </tbody>
          );
      }
  
  
  
  const WhatIfExtra = ({ number, currentGPAs, setCurrentGPAs, semesterCatalogData, userCourses, catalogData }) => {
      const [currentCourses, setCurrentCourses] = useState([]);//state to hold the current course
      const [currentGrades, setCurrentGrades] = useState([]);//state to hold the current grades
      const [tableData, setTableData] = useState([]);

      const handleAddRow = () => {
        setTableData([...tableData, {CourseCode: '', CourseTitle: '', Credits: '', Grade: ''}]);
        console.log("tableData", tableData);
        };
  
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
      

      console.log("current courses", currentCourses);

      return (
        <>
          <div>
            <h1 className="tooltip py-2 pl-1 text-lg" 
            data-tip={(currentGPAs[number - 1] !== null && currentGPAs[number - 1] !== 0) ? currentGPAs[number - 1] : "No grade"}>
              Semester {number}</h1>
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
                tableData={tableData}
                catalogData={catalogData}
                userCourses={userCourses} 
                currentCourses={currentCourses} 
                handleCourseChange={handleCourseChange} 
                handleGradeChange={handleGradeChange}
                handleAddRow={handleAddRow} />
              </table>
            </div>
          </div>
        </>
      );
    };


    export default WhatIfExtra;