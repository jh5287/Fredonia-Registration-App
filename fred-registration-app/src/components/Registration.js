
import CGPA from './CGPA';
import Semester from './Semester';
import { GetStudentData } from '@/app/api/sqlserver/queries';


const RegSemester = ({number, data}) => {
  console.log('DATA INSIDE SEM COMPONENT', data);
  console.log('CourseCodde INSIDE SEM COMPONENT', data[0].CourseCode);
  return (
      <div className='text-black p-5 bg-[#dadada] shadow-md'>
      <div className='text-[1.5rem] font-bold border-b border-[#383737]'>
        Semester {number}
      </div>
      <table className='table-auto'>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Credits</th>
            <th className='w-20'>Grade</th>
          </tr>
        </thead>
        <tbody className='[&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-gray'>
         {data.map((item, index) => (
          <tr>
            <td>{item.CourseCode}</td>
            <td>{item.Title}</td>
            <td className='text-center'>{item.Credits}</td>
            <td className='text-center'>{item.Grade}</td>
        </tr>))}
        </tbody>
      </table>
    </div>
  )
  }



const Registration = ({showCGPA, handleShowCGPA, studentID}) => {

  return (
    <>
    <h1 className='text-3xl font-bold'>Registration</h1>
    <div className='m-3 grid grid-cols-1 gap-5 h-full md:grid-cols-2'> 
          <CGPA showCGPA={showCGPA} handleShowCGPA={handleShowCGPA}/>
          
          {studentID.map((item, index) => (
            <RegSemester key={index+1} number={index+1} data={item}/>
          ))}
    </div>
    </>
  );
}

export default Registration;
