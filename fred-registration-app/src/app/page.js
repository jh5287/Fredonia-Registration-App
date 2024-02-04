'use client'
import React, {useState} from 'react';
import styles from './page.module.css'; // Import CSS module
import CGPA from '@/components/CGPA';
import UserInfo from '@/components/UserInfo';
import Semester from '@/components/Semester';
import jsonData from './sem1.json';
import sem1 from './sem1.json';
import sem2 from './sem2.json';
import sem3 from './sem3.json';
import sem4 from './sem4.json';

const Page = () => {
  const [showCGPA, setShowCGPA] = useState(false);

  const handleShowCGPA = () => {
    const updatedShowCGPA = !showCGPA;
    setShowCGPA(updatedShowCGPA);
  }

  return (
    <div>
    <UserInfo classname='text-black p-5 bg-[#dadada] shadow-md row-start-1 col-span-2 m-3' handleShowCGPA={handleShowCGPA}/>
    <div className='m-3 grid grid-cols-1 gap-5 h-full md:grid-cols-2'> {/* Apply container class */}
      {/* First div spans across 3 columns */}
      {/* Remaining divs */}
      
      <CGPA showCGPA={showCGPA} handleShowCGPA={handleShowCGPA}/>
      <Semester number={1} data={sem1}/>
      <Semester number={2} data={sem2}/>
      <Semester number={3} data={sem3}/>
      <Semester number={4} data={sem4}/>
      <Semester number={5} data={jsonData}/>
      <Semester number={6} data={jsonData}/>
      <Semester number={7} data={jsonData}/>
      <Semester number={8} data={jsonData}/>

    </div>
    </div>
  );
};

export default Page;
