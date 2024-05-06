import calculateGPA from "./calculateGPA";
import Icon from "@mdi/react";
import { mdiProgressHelper } from "@mdi/js";
import { cn } from "@/lib/utils";

const RegSemester = ({ number, data }) => {
  const totalCredits = data.reduce((acc, item) => acc + item.Course.Credits, 0);
  const successGrades = ["A", "B"];
  const warnGrades = ["C", "D"];

  return (
    <>
      <div className="rounded-lg shadow px-3 pt-2 pb-4">
        <div className="flex justify-between items-center">
          <h1 className="py-2 pl-1 text-lg font-semibold">
            {data[0]?.Term.Semester + " " + data[0]?.Term.Year}
          </h1>
          <div>
            {totalCredits > 0 ? (
              <span className="text-base">Total Credits: {totalCredits}</span>
            ) : null}{" "}
            {/*if there is no applicable grade do not display it */}
            {calculateGPA(data) > 0.0 ? (
              <span className="text-base">GPA: {calculateGPA(data)}</span>
            ) : null}{" "}
            {/*if there is no applicable grade do not display it */}
          </div>
        </div>

        <div className="border rounded-lg border-base-200 overflow-hidden">
          <table className="table">
            <thead>
              <tr>
                <th className="whitespace-nowrap">Course Code</th>
                <th>Course Title</th>
                <th>Credits</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={cn({
                    "bg-error": item.Grade === "F",
                    "bg-success": item.Grade
                      ? successGrades.some((substring) =>
                          item.Grade.includes(substring)
                        )
                      : false,
                    "bg-warning": item.Grade
                      ? warnGrades.some((substring) =>
                          item.Grade.includes(substring)
                        )
                      : false,
                  })}
                >
                  <td>{item.Course.CourseCode}</td>
                  <td>{item.Course.Title}</td>
                  <td>{item.Course.Credits}</td>
                  <td
                    className={cn({
                      "text-red-600": item.Grade === "F",
                      "text-green-600": item.Grade === "A",
                    })}
                  >
                    {item.Grade === null ? (
                      <span className="tooltip" data-tip="In Progress...">
                        <Icon
                          path={mdiProgressHelper}
                          title="Progress"
                          size={1}
                          color="blue"
                        />
                      </span>
                    ) : (
                      item.Grade
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RegSemester;
