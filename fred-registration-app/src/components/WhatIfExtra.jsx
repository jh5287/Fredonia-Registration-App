"use client";
import { useState, useEffect } from "react";
import GradeComboBox from "@/components/GradeComboBox";
import CourseComboBox from "@/components/CourseComboBox";
import calculateGPA from "@/components/calculateGPA";
import { cn } from "@/lib/utils";
import { FaPlus } from "react-icons/fa";
const SemesterRow = ({ index, semNumber, extraSemester, catalogData, handleGradeChange, tableData, setTableData, setSaveData }) => {
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
    setSaveData(prevData => {
        const newData = [...prevData];
        const semIndex = extraSemester.findIndex(item => item[0] === semNumber);
        const tableData = [...newData[semIndex]];
        tableData[index] = {CourseCode: selectedCourse.Course.CourseCode, CourseTitle: selectedCourse.Course.Title, Credits: selectedCourse.Course.Credits, Grade: ''};
        newData[semIndex] = tableData;
        console.log("AFTER ADDING NEW DATA SAVE DATA: ", newData);
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

const SemesterBody = ({ semNumber, extraSemester, tableData, setTableData, catalogData, handleGradeChange, setSaveData}) => { 

  const handleAddRow = () => {
    setTableData([...tableData, {CourseCode: '', CourseTitle: '', Credits: '', Grade: ''}]);
    setSaveData(prevData => {
      const newData = [...prevData];
      console.log("extra semester data", extraSemester);
      const index = extraSemester.findIndex(item => item[0] === semNumber);
      console.log("index found", index, "for semNumber", semNumber);
      newData[index] = [...tableData, {CourseCode: '', CourseTitle: '', Credits: '', Grade: ''}];
      console.log("newData child", newData);
      return newData;
      });
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
                    extraSemester={extraSemester}
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
  
  
  
  const WhatIfExtra = ({ semNumber, extraSemester, currentGPAs, setCurrentGPAs,  userCourses, catalogData, setSaveData }) => {
      const [currentGrades, setCurrentGrades] = useState([]);//state to hold the current grades
      const [tableData, setTableData] = useState([]);
      const extraSemIndex = extraSemester.findIndex(item => item[0] === semNumber)
  
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
          const index = extraSemester.findIndex(item => item[0] === semNumber);
          if (calculateGPA(userCourses) !== null && calculateGPA(userCourses) !== '0.00') {
            newGPAs[index] = calculateGPA(userCourses);
            return newGPAs;
          }
          else if (updateSemesterGPAs() !== null && updateSemesterGPAs() !== '0.00') {
            newGPAs[index] = updateSemesterGPAs();
            return newGPAs;
          }
          return prevGPAs;
        });
        
      }, [currentGrades,  calculateGPA(userCourses), updateSemesterGPAs()]);
      
      return (
        <>
          <div>
            <h1 className="tooltip py-2 pl-1 pr-2 text-2xl font-bold text-center bg-base-100 rounded-t-lg flex gap-3 items-center" 
            data-tip={(currentGPAs[extraSemIndex] !== null && currentGPAs[extraSemIndex] !== 0) ? currentGPAs[extraSemIndex] : "No grade"}>
              <select className="select select-primary  max-w-xs">
                <option disabled selected>Term</option>
                <option>Spring</option>
                <option>Fall</option>
                <option>Summer</option>
              </select>
              <select className="select select-primary  max-w-xs">
                <option disabled selected>Year</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
              </select>
            </h1>
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
                extraSemester={extraSemester}
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