SELECT
  SR.StudentID,
  SR.termid,
  SUM(GP.GradePoint * C.credits) / SUM(C.credits) AS GPA
FROM
  studentRegistration AS SR
  JOIN course AS C ON SR.crn = C.CRN
  JOIN CourseAttribute AS CA ON C.CRN = CA.CRN
  JOIN Attribute AS A ON CA.AttributeID = A.AttributeID
  JOIN GradePoints AS GP ON SR.grade = GP.LetterGrade
  JOIN Term AS T ON SR.termid = T.termID
WHERE
  GETDATE() > T.EndDate
  AND A.Description = 'Foundation'
GROUP BY
  SR.StudentID,
  SR.termid;