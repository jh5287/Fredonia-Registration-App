"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { BsArrowBarLeft, BsXLg } from "react-icons/bs";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CustomSemester from "./CustomSemester";
import CourseSearch from "@/components/CourseSearch";

function CourseSearchSidebar({}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      {!expanded ? (
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="object-left-top"
        >
          <BsArrowBarLeft className="size-8" />
        </button>
      ) : (
        ""
      )}
      <aside className={`${expanded ? "w-1/2" : "w-0"}`}>
        <nav className={`h-full ${expanded ? " px-2" : ""}`}>
          <div
            className={`relative overflow-hidden h-full ${
              expanded ? "w-full" : "w-0"
            }`}
          >
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="absolute top-0 right-0 py-2"
            >
              <BsXLg className="size-5" />
            </button>
            <CourseSearch />
          </div>
        </nav>
      </aside>
    </>
  );
}

const SemesterContext = createContext(null);
export const useSemesters = () => useContext(SemesterContext);

export default function customRoadmap() {
  const createDefaultSemester = (semesterNum) => ({
    semesterNum,
    courses: [],
  });

  const [semesters, setSemesters] = useState(
    Array.from({ length: 8 }, (_, index) => createDefaultSemester(index + 1))
  );

  const addCourse = (semesterNum, course) => {
    setSemesters((prevSemesters) =>
      prevSemesters.map((semester) =>
        semester.semesterNum === semesterNum
          ? { ...semester, courses: [...semester.courses, course] }
          : semester
      )
    );
  };

  const dropCourse = (semesterNum, courseCRN) => {
    setSemesters((prevSemesters) =>
      prevSemesters.map((semester) =>
        semester.semesterNum === semesterNum
          ? {
              ...semester,
              courses: semester.courses.filter(
                (course) => course.CRN !== courseCRN
              ),
            }
          : semester
      )
    );
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="flex flex-row gap-x-4 h-screen bg-base-100 rounded-lg m-3 p-3 pb-8">
          <div className="relative flex-1 overflow-y-auto px-2">
            <h1 className={"text-lg pt-1 pb-2"}>Custom Roadmap</h1>
            <div className="grid grid-cols-1 gap-5 h-full ">
              <SemesterContext.Provider
                value={{ semesters, addCourse, dropCourse }}
              >
                {semesters.map((semester, index) => (
                  <CustomSemester
                    key={semester.semesterNum || index}
                    semesterNum={semester.semesterNum}
                    courses={semester.courses}
                  />
                ))}
              </SemesterContext.Provider>
            </div>
          </div>
          <CourseSearchSidebar />
        </div>
      </DndProvider>
    </>
  );
}
