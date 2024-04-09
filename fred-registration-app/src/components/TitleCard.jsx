import {
  FaCheckCircle,
  FaTimesCircle,
  FaUserCheck,
  FaRegCircle,
} from "react-icons/fa";

const TitleCard = ({classData}) => {
    return(
    <div className={`flex flex-col items-center ${classData}`}>
    <h1 className="py-5 text-2xl">Computer Science Roadmap</h1>
    <div className="flex flex-row">
      <div className="flex flex-row items-center mx-2">
        <FaCheckCircle color="green" />
        <p>=Completed</p>
      </div>
      <div className="flex flex-row items-center mx-2">
        <FaTimesCircle color="red" />
        <p>=Incomplete</p>
      </div>
      <div className="flex flex-row items-center mx-2">
        <FaUserCheck color="blue" />
        <p>=Enrolled</p>
      </div>
      <div className="flex flex-row items-center mx-2">
        <FaRegCircle />
        <p>=Not Taken</p>
      </div>
    </div>
    </div>
)
}

export default TitleCard;