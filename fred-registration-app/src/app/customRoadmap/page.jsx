"use client";
import { useState } from "react";
import CustomSemester from "./CustomSemester";
import CourseSearch from "@/components/courseSearch";
import { BsArrowBarLeft, BsArrowBarRight, BsXLg } from "react-icons/bs";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Sidebar({}) {
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
        <nav className={`h-full ${expanded ? " shadow-md px-2" : ""}`}>
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

export default function customRoadmap() {
  const createDefaultCourse = () => ({
    courseCode: "",
    courseTitle: "",
    credits: "",
  });

  const createDefaultSemester = (semesterNum) => ({
    semesterNum,
    courses: [],
  });

  const [semestersData, setSemesterData] = useState(
    Array.from({ length: 8 }, (_, index) => createDefaultSemester(index + 1))
  );

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="flex flex-row gap-x-4 h-screen w-full ">
          <div className="relative flex-1 overflow-y-auto px-2">
            <h1 className={"text-lg pt-1 pb-2"}>Custom Roadmap</h1>
            <div className="grid grid-cols-1 gap-5 h-full ">
              {semestersData.map((semester) => (
                <CustomSemester
                  key={semester.semesterNum}
                  semesterNum={semester.semesterNum}
                  courses={semester.courses}
                />
              ))}
            </div>
          </div>
          <Sidebar />
        </div>
      </DndProvider>
    </>
  );
}
