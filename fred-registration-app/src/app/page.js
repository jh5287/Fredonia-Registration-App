'use client'
import React, {useState, useEffect} from 'react';
import styles from './page.module.css'; // Import CSS module
import UserInfo from '@/components/UserInfo';
import RoadMap from '@/components/RoadMap';
import Dropdown from '@/components/Dropdown';
import Registration from '@/components/Registration';
import { GetCourseBySemAndYr } from '@/api/sqlserver/queries';


import test_data from './sem1.json';


const Page = () => {
  const [showCGPA, setShowCGPA] = useState(false);
  const [currentPage , setCurrentPage] = useState('Road Map'); // ['Road Map', 'Registration']
  
  const [sem1 , setSem1] = useState([]);
  const [sem2 , setSem2] = useState([]);
  const [sem3 , setSem3] = useState([]);
  const [sem4 , setSem4] = useState([]);
  const [sem5 , setSem5] = useState([]);
  const [sem6 , setSem6] = useState([]);
  const [sem7 , setSem7] = useState([]);
  const [sem8 , setSem8] = useState([]);


  const getSemYrCourses = async (semester, year) => {
    const courses = await GetCourseBySemAndYr(semester, year);
    console.log('Object', courses[0].CourseCode);
    console.log('Object type', typeof(Object.values(courses)));
    console.log('Semester 1 type after set', typeof(sem1));
    console.log("is array? ",Array.isArray(courses))
    return courses;
  }

  

  useEffect(() => {
    const fetchData = async () => {
      const semesters = [
        ['Fall', 1],
        ['Spring', 1],
        ['Fall', 2],
        ['Spring', 2],
        ['Fall', 3],
        ['Spring', 3],
        ['Fall', 4],
        ['Spring', 4],
      ];
  
      // Fetch course data for all semesters concurrently
      const promises = semesters.map(([semester, year]) => getSemYrCourses(semester, year));
  
      // Wait for all promises to resolve
      const allSemesterData = await Promise.all(promises);
  
      // Update state with fetched data
      setSem1(allSemesterData[0]);
      setSem2(allSemesterData[1]);
      setSem3(allSemesterData[2]);
      setSem4(allSemesterData[3]);
      setSem5(allSemesterData[4]);
      setSem6(allSemesterData[5]);
      setSem7(allSemesterData[6]);
      setSem8(allSemesterData[7]);
    };
  
    fetchData();
  }, []);

  


  const handleShowCGPA = () => {
    const updatedShowCGPA = !showCGPA;
    setShowCGPA(updatedShowCGPA);
  }

  const handleRoadMap = () => { 
    setCurrentPage('Road Map');
  }

  const handleRegistration = () => {
    setCurrentPage('Registration');
  }

  

  return (
    <div>
      <UserInfo classname='text-black p-5 bg-[#dadada] shadow-md row-start-1 col-span-2 m-3' handleShowCGPA={handleShowCGPA}/>
      <div className=''>
        {/*<button className=' border-t border-l border-r border-gray-500 hover:bg-gray-200 py-2 px-4 rounded'>Road Map</button>
        <button className=' border-t border-l border-r border-gray-500 hover:bg-gray-200 py-2 px-4 rounded'>Registration</button>*/}
        <Dropdown classname={''} handleRoadMap={handleRoadMap} handleRegistration={handleRegistration}/>
        {currentPage === 'Road Map' ? <RoadMap showCGPA={showCGPA} handleShowCGPA={handleShowCGPA}
        sem1={sem1}
        sem2={sem2}
        sem3={sem3}
        sem4={sem4}
        sem5={sem5}
        sem6={sem6}
        sem7={sem7}
        sem8={sem8}/> : <Registration showCGPA={showCGPA} handleShowCGPA={handleShowCGPA} data={test_data} />}
        
      </div>
      
    </div>
  );
};

export default Page;
