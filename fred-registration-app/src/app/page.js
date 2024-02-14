'use client'
import React, {useState, useEffect} from 'react';
import styles from './page.module.css'; // Import CSS module
import UserInfo from '@/components/UserInfo';
import RoadMap from '@/components/RoadMap';
import Dropdown from '@/components/Dropdown';
import Registration from '@/components/Registration';
import { GetAllCourses, GetCourseBySemAndYr } from '@/api/sqlserver/queries';

const Page = () => {
  const [showCGPA, setShowCGPA] = useState(false);
  const [currentPage , setCurrentPage] = useState('Road Map'); // ['Road Map', 'Registration']
  const [courses , setCourses] = useState([]);

  const getCourses = async () => {
    const courses = await GetAllCourses();
    console.log(courses[0]);
    setCourses(courses);
    console.log('CRN', courses[0].CRN)
    console.log('CourseCode', courses[0].CourseCode)
    console.log('Title', courses[0].Title)
    console.log('Credits', courses[0].Credits)
  }

  const getSemYrCourses = async (semester, year) => {
    const courses = await GetCourseBySemAndYr(semester, year);
    console.log(courses);
  }

  useEffect(() => {
    getCourses();
    getSemYrCourses('Fall', 1);
  }, []);


  const handleShowCGPA = () => {
    const updatedShowCGPA = !showCGPA;
    setShowCGPA(updatedShowCGPA);
  }
  const handleCurrentPage = () => {
    if(currentPage === 'Road Map') {
      console.log('current page', currentPage);
      setCurrentPage('Registration');
    }
    else {
      console.log('current page', currentPage);
      setCurrentPage('Road Map');
    }
  }


  return (
    <div>
      <UserInfo classname='text-black p-5 bg-[#dadada] shadow-md row-start-1 col-span-2 m-3' handleShowCGPA={handleShowCGPA}/>
      <div className=''>
        {/*<button className=' border-t border-l border-r border-gray-500 hover:bg-gray-200 py-2 px-4 rounded'>Road Map</button>
        <button className=' border-t border-l border-r border-gray-500 hover:bg-gray-200 py-2 px-4 rounded'>Registration</button>*/}
        <Dropdown classname={'ml-10'} handleCurrentPage={handleCurrentPage}/>
        {currentPage === 'Road Map' ? <RoadMap showCGPA={showCGPA} handleShowCGPA={handleShowCGPA}/> : <Registration showCGPA={showCGPA} handleShowCGPA={handleShowCGPA}/>}
        {/*<RoadMap showCGPA={showCGPA} handleShowCGPA={handleShowCGPA}/>*/}
      </div>
      
    </div>
  );
};

export default Page;
