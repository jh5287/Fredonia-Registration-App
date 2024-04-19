import { useState } from "react";
import { useDrop } from "react-dnd";

const ItemTypes = {
  COURSE: "dndCourse",
};

function test(droppedItem) {
  console.log("SUCESSFUL DROP", droppedItem);
}

export default function CustomSemester({ semesterNum }) {
  const [courses, setCourses] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.COURSE,
    drop: (item, monitor) => {
      const droppedCourse = monitor.getItem();
      setCourses((prevArray) => [...prevArray, droppedCourse]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <>
      <div
        className={`border-2 rounded-md p-2   ${
          isOver
            ? "border-primary transition ease-in-out delay-75 duration-300"
            : " "
        }`}
        ref={drop}
      >
        <h1 className="w-full py-2 pl-2 text-lg ">
          Semester {semesterNum ? semesterNum : ""}
        </h1>
        <div className="">
          <table className="table">
            {courses.length > 0 && (
              <thead>
                <tr>
                  <th className="whitespace-nowrap">Course Code</th>
                  <th>Course Title</th>
                  <th>Credits</th>
                </tr>
              </thead>
            )}
            <tbody>
              {courses.map((course) => (
                <tr key={course.CourseCode}>
                  <td>{course.CourseCode}</td>
                  <td className="w-[40%]">{course.Title}</td>
                  <td>{course.Credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
