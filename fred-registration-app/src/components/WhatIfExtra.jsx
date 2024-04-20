"use client";
import { useState, useEffect } from "react";
import GradeComboBox from "@/components/GradeComboBox";
import CourseComboBox from "@/components/CourseComboBox";
import calculateGPA from "@/components/calculateGPA";
import { cn } from "@/lib/utils";
import { FaPlus } from "react-icons/fa";

const SemesterRow = ({ index, semNumber, catalogData, handleGradeChange, tableData, setTableData, setSaveData }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({CourseCode: '', Title: '', Credits: '', Grade: ''});

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    const filteredResults = catalogData.filter(course => course.Course.Title.toLowerCase().includes(inputValue.toLowerCase()));
    setSearchResults(filteredResults);
};

const handleCourseSelection = (selectedCourse) => {
    setTableData(prevData => {
        const newData = [...prevData];
        newData[index] = {CourseCode: selectedCourse.Course.CourseCode, CourseTitle: selectedCourse.Course.Title, Credits: selectedCourse.Course.Credits, Grade: ''};
        return newData;
    });
    setSelectedCourse({ CourseCode: selectedCourse.Course.CourseCode, Title: selectedCourse.Course.Title, Credits: selectedCourse.Course.Credits, Grade: ''});
    setSearchInput(selectedCourse.Course.Title);

};

          return (
            <tr key={index}>
              <td>
                {selectedCourse.CourseCode !== '' ? selectedCourse?.CourseCode : 'No Course Selected'}
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
              {selectedCourse.Credits !== '' ? selectedCourse.Credits : ''}
              </td>
              <td>
                <GradeComboBox 
                handleGradeChange={handleGradeChange} 
                index={index} />
              </td>
            </tr>);

};

const SemesterBody = ({ semNumber, tableData, setTableData, catalogData, handleGradeChange, setSaveData}) => { 

  const handleAddRow = () => {
    setTableData([...tableData, {CourseCode: '', CourseTitle: '', Credits: '', Grade: ''}]);
    console.log("tableData", tableData);
    };

          return (
              <tbody>
                {tableData.map((item, index) => {
                  return (
                    <SemesterRow 
                    key={index}
                    index={index}
                    semNumber={semNumber}
                    catalogData={catalogData}
                    handleGradeChange={handleGradeChange}
                    tableData={tableData}
                    setTableData={setTableData}
                    setSaveData={setSaveData} />
                    );
              })}
              <tr>
                <td colSpan="4">
                    <button className='btn btn-accent w-full'onClick={handleAddRow}><FaPlus/></button>
                </td>
            </tr>
          </tbody>
          );
};
  
  
  
  const WhatIfExtra = ({ semNumber, currentGPAs, setCurrentGPAs,  userCourses, catalogData, setSaveData }) => {
      const [currentGrades, setCurrentGrades] = useState([]);//state to hold the current grades
      const [tableData, setTableData] = useState([]);
      
  
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
      useEffect(() => {
        setCurrentGPAs(prevGPAs => {
          const newGPAs = [...prevGPAs];
          if (calculateGPA(userCourses) !== null && calculateGPA(userCourses) !== '0.00') {
            newGPAs[semNumber - 1] = calculateGPA(userCourses);
            return newGPAs;
          }
          else if (updateSemesterGPAs() !== null && updateSemesterGPAs() !== '0.00') {
            newGPAs[semNumber - 1] = updateSemesterGPAs();
            return newGPAs;
          }
          return prevGPAs;
        });
        
      }, [currentGrades,  calculateGPA(userCourses), updateSemesterGPAs()]);
      
      useEffect(() => {
        setSaveData(prevData => {
          const newData = [...prevData];
          newData[semNumber] = tableData;
          return newData;
      })
        }, [tableData]);

      return (
        <>
          <div>
            <h1 className="tooltip py-2 pl-1 text-lg" 
            data-tip={(currentGPAs[semNumber - 1] !== null && currentGPAs[semNumber - 1] !== 0) ? currentGPAs[semNumber - 1] : "No grade"}>
              Semester {semNumber}</h1>
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
                semNumber={semNumber}
                tableData={tableData}
                setTableData={setTableData}
                catalogData={catalogData}
                handleGradeChange={handleGradeChange}
                setSaveData={setSaveData}
                 />
              </table>
            </div>
          </div>
        </>
      );
    };


    export default WhatIfExtra;