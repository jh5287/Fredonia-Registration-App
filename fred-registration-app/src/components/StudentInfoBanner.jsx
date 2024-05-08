import React from "react";

const StudentInfoBanner = ({ studentInfo }) => {
  const fName = studentInfo?.FirstName;
  const lName = studentInfo?.LastName;
  const email = studentInfo?.Email;

  const studentID = studentInfo?.Student?.StudentID;
  const level = studentInfo?.Student?.Level;
  const classification = studentInfo?.Student.Classification; 
  const studentPrograms = studentInfo?.Student?.StudentProgram;

  return (
    <div className="p-4 rounded-lg">
      <div className="flex flex-row gap-x-4">
        <div className="basis-1/3 border rounded-lg  px-1 py-1 ">
          <p className="text-xs text-gray-500">Name</p>
          <p className="">
            {fName} {lName}
          </p>
        </div>
        <div className="basis-1/3 border  rounded-lg px-1 py-1">
          <p className="text-xs text-gray-500">Student ID</p>
          <p className="">{studentID}</p>
        </div>
        <div className="basis-1/3 border rounded-lg px-1 py-1">
          <p className="text-xs text-gray-500">Email</p>
          <p className="">{email}</p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap py-2 gap-x-4">
        <div className="">
          <span className="font-bold">Level</span> {level}
        </div>
        <div className="">
          <span className="font-bold">Classification</span> {classification}
        </div>
        {studentPrograms?.map((program, index) => (
          <div key={index} className="">
            <span className="font-bold">{program.Program.ProgramType}</span>{" "}
            {program.Program.ProgramName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentInfoBanner;
