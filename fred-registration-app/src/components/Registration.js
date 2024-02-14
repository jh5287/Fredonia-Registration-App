
import sem1 from './sem1.json';
import sem2 from './sem2.json';
import CGPA from './CGPA';
import Semester from './Semester';


const Registration = ({showCGPA, handleShowCGPA}) => {
  return (
    <div className='m-3 grid grid-cols-1 gap-5 h-full md:grid-cols-2'> 
          <CGPA showCGPA={showCGPA} handleShowCGPA={handleShowCGPA}/>
          <Semester number={1} data={sem1}/>
          <Semester number={2} data={sem2}/>
    </div>
  );
}

export default Registration;
