'use client'
import React, {useState, useEffect} from 'react';
import styles from './page.module.css'; // Import CSS module
import UserInfo from '@/components/UserInfo';
import RoadMap from '@/components/RoadMap';
import Dropdown from '@/components/Dropdown';
import Registration from '@/components/Registration';

import { GetStudentData, GetCourseByCatalogID } from '@/app/api/sqlserver/queries';
import test_data from './sem1.json';


const Page = () => {
  const [showCGPA, setShowCGPA] = useState(false);
  const [currentPage , setCurrentPage] = useState(true); 
  const [studentData, setStudentData] = useState([]);
  const [roadMapData, setRoadMapData] = useState([]);
  
  const [sem1 , setSem1] = useState([]);
  const [sem2 , setSem2] = useState([]);
  const [sem3 , setSem3] = useState([]);
  const [sem4 , setSem4] = useState([]);
  const [sem5 , setSem5] = useState([]);
  const [sem6 , setSem6] = useState([]);
  const [sem7 , setSem7] = useState([]);
  const [sem8 , setSem8] = useState([]);



  const fetchCatalog = async () => {
      const courses = await fetch('/api/catalog');
      const data = await courses.json();
  }

  const fetchSemYrCourses = async (semester, year) => {
    const courses = await fetch(`/api/catalog/${semester}/${year}`);
    const data = await courses.json();
    const data_array = [data.catalog];
    return data_array[0]
  }

  const fetchCourseData = async (catalogID) => {
    const courses = await GetCourseByCatalogID(catalogID);
    return courses;
  }
  

  useEffect(() => {

    const getRoadMapData = async () => {
      const data = await fetchCourseData(1); //fetch course data by catalog id
      const organized_data = []
      for(let i = 1; i < 5; i++) {
        const fallData = data.filter((item) => item.RecommendedYear === i && item.RecommendedSemester === 'Fall');
        const springData = data.filter((item) => item.RecommendedYear === i && item.RecommendedSemester === 'Spring');
        organized_data.push(fallData)
        organized_data.push(springData)
      }
      setRoadMapData(organized_data);
    }
    getRoadMapData();




    const getRegistrationData = async () => {
      const data = await GetStudentData(5); //fetch student registration data by id
      const organized_data = []
      for(let i = 1; i < 7; i++) {
        const semData = data.filter((item) => item.TermID === i);
        organized_data.push(semData)
      }
      console.log('organized_data STUDENT', organized_data);
      setStudentData(organized_data);
    }
    getRegistrationData();
  }, []);

  


  const handleShowCGPA = () => {
    const updatedShowCGPA = !showCGPA;
    setShowCGPA(updatedShowCGPA);
  }

  const handleRoadMap = () => { 
    setCurrentPage(false);
  }

  const handleRegistration = () => {
    setCurrentPage(true);
  }


  return (
    <div>
      <UserInfo classname='text-black p-5 bg-[#dadada] shadow-md row-start-1 col-span-2 m-3' handleShowCGPA={handleShowCGPA}/>
      <div className=''>
        <Dropdown classname={''} handleRoadMap={handleRoadMap} handleRegistration={handleRegistration}/>
        {currentPage === false ? <RoadMap showCGPA={showCGPA} handleShowCGPA={handleShowCGPA} data={roadMapData}/> : <Registration showCGPA={showCGPA} handleShowCGPA={handleShowCGPA} studentID={studentData}/>}
        
      </div>
      
    </div>
  );
};

export default Page;
