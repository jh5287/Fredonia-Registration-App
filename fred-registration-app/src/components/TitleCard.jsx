import {
  FaCheckCircle,
  FaTimesCircle,
  FaUserCheck,
  FaRegCircle,
} from "react-icons/fa";

import Icon from "@mdi/react";
import { mdiProgressHelper } from "@mdi/js";

const TitleCard = ({classData, catalogName}) => {
    return(
    <div className={`flex flex-col items-center ${classData}`}>
      <h1 className="py-5 text-2xl">{catalogName} Roadmap</h1>
      <div className="flex flex-row mb-10">
        <div className="flex flex-row items-center mx-2">
          <FaCheckCircle color="green" />
          <p>=Completed</p>
        </div>
        <div className="flex flex-row items-center mx-2">
          <FaTimesCircle color="red" />
          <p>=Failed</p>
        </div>
        <div className="flex flex-row items-center mx-2">
          <Icon path={mdiProgressHelper} title="Progress" size={1} color="blue" />
          <p>=In-Progress</p>
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