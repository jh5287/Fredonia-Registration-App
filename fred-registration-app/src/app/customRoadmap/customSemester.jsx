import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "@/components/CourseSearch";


export default function CustomSemester({ semesterNum }) {
  const [courses, setCourses] = useState([]);
  const [justDropped, setJustDropped] = useState(false);
  const [dropSuccess, setDropSuccess] = useState(true);

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.COURSE,
      drop: (item, monitor) => {
        const droppedCourse = monitor.getItem();
        const CourseAlreadyExists = courses.some(
          (course) => course.CRN === droppedCourse.CRN
        );

        if (!CourseAlreadyExists) {
          setDropSuccess(true);
          setCourses((prevArray) => [...prevArray, droppedCourse]);
        } else {
          setDropSuccess(false);
        }

        setJustDropped(true);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [courses]
  );

  useEffect(() => {
    if (justDropped) {
      const timer = setTimeout(() => {
        console.log("HERE"); 
        setJustDropped(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  },[ justDropped, dropSuccess]);

  return (
    <>
      <div
        className={`border-2 rounded-md p-2 transition-colors duration-300 ${
          isOver ? "border-primary ease-in-out delay-75" : ""
        } ${
          justDropped
            ? dropSuccess
              ? "border-blue-200 delay-75"
              : "border-red-400"
            : ""
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
