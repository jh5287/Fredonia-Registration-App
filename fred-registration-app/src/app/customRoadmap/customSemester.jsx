import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "@/components/CourseSearch";

export default function CustomSemester({ semesterNum }) {
  const [courses, setCourses] = useState([]);
  const [justDropped, setJustDropped] = useState(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.COURSE,
    drop: (item, monitor) => {
      const droppedCourse = monitor.getItem();
      setCourses((prevArray) => [...prevArray, droppedCourse]);
      setJustDropped(true);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  useEffect(() => {
    if (justDropped) {
      const timer = setTimeout(() => {
        setJustDropped(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  });

  return (
    <>
      <div
        className={`border-2 rounded-md p-2 transition-colors ${
          isOver
            ? "border-primary  ease-in-out delay-75 duration-300  "
            : ""
        } ${justDropped ? "border-blue-100 duration-500 " : ""}`}
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
