import CGPA from './CGPA';
import Semester from './Semester';

// const TestSemester = ({number, data}) => {

//     return (
//         <div className='text-black p-5 bg-[#dadada] shadow-md'>
//         <div className='text-[1.5rem] font-bold border-b border-[#383737]'>
//           Semester {number}
//         </div>
//         <table className='table-auto'>
//           <thead>
//             <tr>
//               <th>Course Code</th>
//               <th>Course Title</th>
//               <th>Credits</th>
//             </tr>
//           </thead>
//           <tbody className='[&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-gray'>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.CourseCode}</td>
//               <td>{item.Title}</td>
//               <td>{item.Credits}</td>
//             </tr>
//           ))}
//           </tbody>
//         </table>
//       </div>
//     )
//     }


const RoadMap = ({showCGPA, handleShowCGPA, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8}) => {

    
  return (
    <div className='m-3 grid grid-cols-1 gap-5 h-full md:grid-cols-2'> 
          <CGPA showCGPA={showCGPA} handleShowCGPA={handleShowCGPA}/>
          <Semester number={1} data={sem1}/>
          <Semester number={2} data={sem2}/>
          <Semester number={3} data={sem3}/>
          <Semester number={4} data={sem4}/>
          <Semester number={5} data={sem5}/>
          <Semester number={6} data={sem6}/>
          <Semester number={7} data={sem7}/>
          <Semester number={8} data={sem8}/>
    </div>
  );
}

export default RoadMap;
