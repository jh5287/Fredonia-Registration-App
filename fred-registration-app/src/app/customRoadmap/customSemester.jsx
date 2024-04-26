import { useEffect, useState } from "react";
import { useDrop, useDrag } from "react-dnd";
import { CourseSearchItemTypes } from "@/components/CourseSearch";
import { FaTrash } from "react-icons/fa";

const CustomSemesterItemTypes = {
  COURSE: "DraggableSemesterCourse",
};

function CourseTrashBin({ courses, setCourses }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: CustomSemesterItemTypes.COURSE,
    drop: (item, monitor) => {
      const droppedCourse = monitor.getItem();
      const filteredCourses = courses.filter(
        (course) => course.CRN !== droppedCourse.CRN
      );
      setCourses(filteredCourses);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      className={`m-h-24 w-full flex justify-center p-4 transition-colors duration-300
       bg-gradient-to-b from-white to-gray-300 `}
      ref={drop}
    >
      <FaTrash
        className={`size-8 transition duration-300 text-gray-400 ${
          isOver ? "scale-125" : ""
        }`}
      />
    </div>
  );
}

function DraggableSemesterCourse({ course, setCourseIsDragging }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: CustomSemesterItemTypes.COURSE,
    item: course,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: () => setCourseIsDragging(false),
    item: () => {
      setCourseIsDragging(true);
      return course;
    },
  }));

  return (
    <tr
      ref={drag}
      className={`${isDragging ? "cursor-move bg-blue-50 " : ""}`}
      key={course.CourseCode}
    >
      <td>{course?.CourseCode}</td>
      <td className="w-[40]">{course?.Title}</td>
      <td>{course?.Credits}</td>
    </tr>
  );
}

export default function CustomSemester({ semesterNum }) {
  const [courses, setCourses] = useState([]);
  const [justDropped, setJustDropped] = useState(false);
  const [dropSuccess, setDropSuccess] = useState(true);
  const [courseIsDragging, setCourseIsDragging] = useState(false);

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: CourseSearchItemTypes.COURSE,
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
        setJustDropped(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [justDropped, dropSuccess]);

  return (
    <>
      <div
        className={`border-2 rounded-md p-2 transition-colors duration-300 h-full relative ${
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
            {courses.map((course, index) => (
              <DraggableSemesterCourse
                course={course}
                setCourseIsDragging={setCourseIsDragging}
                key={course.CRN || index}
              />
            ))}
          </tbody>
        </table>
        {courseIsDragging && (
          <div className="absolute bottom-0 left-0 right-0">
            <CourseTrashBin courses={courses} setCourses={setCourses} />
          </div>
        )}
      </div>
    </>
  );
}
