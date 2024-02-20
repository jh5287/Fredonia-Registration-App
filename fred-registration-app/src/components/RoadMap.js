import CGPA from './CGPA';
import Semester from './Semester';

{/*sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8*/}
const RoadMap = ({showCGPA, handleShowCGPA, data}) => {

    
  return (
    <>
    <h1 className='text-3xl font-bold'>Road Map</h1>
    <div className='m-3 grid grid-cols-1 gap-5 h-full md:grid-cols-2'> 
          <CGPA showCGPA={showCGPA} handleShowCGPA={handleShowCGPA}/>
          {data.map((item, index) => (
            <Semester key={index+1} number={index+1} data={item}/>
          ))}
    </div>
    </>
  );
}

export default RoadMap;
