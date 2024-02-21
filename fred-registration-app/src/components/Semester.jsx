import React from "react";

const Semester = ({ number, data }) => {
  return (
    <>
    <div className="">
      <h1 className="py-2 pl-1 text-lg">Semester {number}</h1>
      <div className="border rounded">
        <table className="table">
          <thead>
            <tr>
              <th className="whitespace-nowrap">Course Code</th>
              <th >Course Title</th>
              <th>Credits</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Course.CourseCode}</td>
                <td>{item.Course.Title}</td>
                <td>{item.Course.Credits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default Semester;
