export default function CustomSemester({ semesterNum, courses }) {
  return (
    <>
      <div>
        <h1 className="w-full py-2 pl-2 text-lg">
          Semester {semesterNum ? semesterNum : ""}
        </h1>
        <div className="overflow-hidden">
          <table className="table">
            <thead>
              <tr>
                <th className="whitespace-nowrap">Course Code</th>
                <th>Course Title</th>
                <th>Credits</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.courseCode}>
                  <td>{course.courseCode}</td>
                  <td className="w-[60%]">{course.courseTitle}</td>
                  <td>{course.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
