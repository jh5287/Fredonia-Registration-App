import jsonData from './sem1.json';
import sem1 from './sem1.json';
import sem2 from './sem2.json';
import sem3 from './sem3.json';
import sem4 from './sem4.json';
import CGPA from './CGPA';
import Semester from './Semester';


const RoadMap = ({showCGPA, handleShowCGPA}) => {
  return (
    <div className='m-3 grid grid-cols-1 gap-5 h-full md:grid-cols-2'> 
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
  );
}

export default RoadMap;
