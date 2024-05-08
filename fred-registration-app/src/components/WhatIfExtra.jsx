"use client";
import { useState, useEffect } from "react";
import GradeComboBox from "@/components/GradeComboBox";
import calculateGPA from "@/components/calculateGPA";
import { GoDash } from "react-icons/go";
import { cn } from "@/lib/utils";
import { FaPlus } from "react-icons/fa";

const SemesterRow = ({ index, 
  semNumber, 
  extraSemester, 
  year, term,  
  catalogData, 
  handleGradeChange, 
  tableData, setTableData, 
  setSaveData 
}) => {
  const [searchInput, setSearchInput] = useState(tableData[index].CourseTitle);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({
    CourseCode: tableData[index].CourseCode, 
    Title: tableData[index].CourseTitle, 
    Credits: tableData[index].Credits, 
    Grade: tableData[index].Grade});

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    const filteredResults = catalogData.filter(course => course.Course.Title.toLowerCase().includes(inputValue.toLowerCase()));
    setSearchResults(filteredResults);
};

useEffect(() => { //useEffect is to update the table row data after a course is removed
  setSelectedCourse({CourseCode: tableData[index].CourseCode, Title: tableData[index].CourseTitle, Credits: tableData[index].Credits, Grade: tableData[index].Grade});
  setSearchInput(tableData[index].CourseTitle);
}, [tableData]);


  const handleCourseSelection = (selectedCourse) => {
    setTableData(prevData => {
        const newData = [...prevData];
        newData[index] = {CourseCode: selectedCourse.Course.CourseCode, CourseTitle: selectedCourse.Course.Title, Credits: selectedCourse.Course.Credits, Grade: ''};
        return newData;
    });
    setSaveData(prevData => {
        const newData = [...prevData];
        const semIndex = extraSemester.findIndex(item => item[0] === semNumber);
        console.log(newData);
        newData[semIndex].Courses[index] = {CourseCode: selectedCourse.Course.CourseCode, CourseTitle: selectedCourse.Course.Title, Credits: selectedCourse.Course.Credits, Grade: ''};
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

const SemesterBody = ({ semNumber, extraSemester, year, term, tableData, setTableData, catalogData, grades, setGrades, handleGradeChange, setSaveData}) => { 

  const handleAddRow = () => {
    setTableData([...tableData, {CourseCode: '', CourseTitle: '', Credits: '', Grade: ''}]);
    const newSemesterData = {
      Term: term, // Set the term value here
      Year: year, // Set the year value here
      Courses: [...tableData, {CourseCode: '', CourseTitle: '', Credits: '', Grade: ''}] // Copy the tableData into the Courses array
    };
    setSaveData(prevData => {
      const newData = [...prevData];
      console.log("DATA B4 ADDING NEW ROW", prevData);
      console.log("NEW weird DATA", newData);
      const index = extraSemester.findIndex(item => item[0] === semNumber);
      console.log("index found", index, "for semNumber", semNumber);
      newData[index] = newSemesterData;
      console.log("SAVE DATA NEW ROW", newData);
      return newData;
      });
    };

    const handleRemoveRow = (indexToRemove) => {
      setTableData(prevData => {
        const newData = prevData.filter((_, index) => index !== indexToRemove);
        return newData;
      });
      setSaveData(prevData => {
          const newData = [...prevData];
          const semIndex = extraSemester.findIndex(item => item[0] === semNumber);
          newData[semIndex] = {
              ...prevData[semIndex],
              Courses: prevData[semIndex].Courses.filter((_, index) => index !== indexToRemove)
          };
          return newData;
      });
      setGrades(prevGrades => {
          const newGrades = [...prevGrades];
          newGrades.splice(indexToRemove, 1);
          return newGrades;
      });
  }
          return (
              <tbody>
                { tableData ? tableData.map((item, index) => {
                  return (
                    <>
                      <button className="btn btn-error btn-circle btn-xs text-white" onClick={() => handleRemoveRow(index)}><GoDash/></button>
                      <SemesterRow
                      key={index}
                      index={index}
                      semNumber={semNumber}
                      extraSemester={extraSemester}
                      year={year}
                      term={term}
                      catalogData={catalogData}
                      handleGradeChange={handleGradeChange}
                      tableData={tableData}
                      setTableData={setTableData}
                      setSaveData={setSaveData} />
                    </>
                    );
              }) : null}
              <tr>
                <td colSpan="4">
                    <button className='btn btn-accent w-full'onClick={handleAddRow}><FaPlus/></button>
                </td>
            </tr>
          </tbody>
          );
};
  
  
  const WhatIfExtra = ({ semNumber, extraSemester, currentGPAs, setCurrentGPAs,  userCourses, catalogData, setSaveData, saveData }) => {
      const [currentGrades, setCurrentGrades] = useState([]);//state to hold the current grades
      const [tableData, setTableData] = useState([]);
      const [term, setTerm] = useState(); //state to hold the term
      const [year, setYear] = useState();
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
          setTableData(prevData => {
              const newData = [...prevData];
              newData[index].Grade = grade;
              return newData;
          });
          setSaveData(prevData => {
            const newData = [...prevData];
            const semIndex = extraSemester.findIndex(item => item[0] === semNumber);
            console.log(newData);
            newData[semIndex].Courses[index].Grade = grade;
            console.log("AFTER ADDING NEW GRADE SAVE DATA: ", newData);
            return newData;
            });
        };

      useEffect(() => {
        try {
          setTableData(saveData.Courses);
          setTerm(saveData.Term);
          setYear(saveData.Year);
        }
        catch (error) {
          console.error("No previous data exists. Skipping... ", error);
        }
      }, []);

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
        
      }, [currentGrades, updateSemesterGPAs()]);
      
      return (
        <>
          <div className="rounded-lg shadow px-3 pt-2 pb-4 bg-base-200">
            <h1 className="tooltip pb-2 pl-1 pr-2 text-2xl font-bold text-center bg-base-200 rounded-t-lg flex gap-3 items-center" 
            data-tip={(currentGPAs[extraSemIndex] !== null && currentGPAs[extraSemIndex] !== 0) ? currentGPAs[extraSemIndex] : "No grade"}>
              <select value={term} className="select select-primary  max-w-xs" onChange={(e) => setTerm(e.target.value)}>
                <option key={1} disabled selected>Term</option>
                <option key={2} value="Spring">Spring</option>
                <option key={3} value="Fall">Fall</option>
                <option key={4} value="Summer">Summer</option>
              </select>
              <select value={year} className="select select-primary  max-w-xs"  onChange={(e) => setYear(e.target.value)}>
                <option disabled selected>Year</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
              </select>
            </h1>
            <div className="border rounded-lg border-base-200 bg-base-100">
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
                year={year}
                term={term}
                tableData={tableData}
                setTableData={setTableData}
                catalogData={catalogData}
                grades={currentGrades}
                setGrades={setCurrentGrades}
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



