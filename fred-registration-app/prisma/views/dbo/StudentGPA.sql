SELECT
  sr.StudentID,
  sr.termid,
  SUM(gp.GradePoint * c.credits) / SUM(c.credits) AS GPA
FROM
  studentRegistration AS sr
  JOIN course AS c ON sr.crn = c.crn
  JOIN GradePoints AS gp ON sr.grade = gp.LetterGrade
  JOIN Term AS t ON sr.termid = t.termID
WHERE
  GETDATE() > t.EndDate
GROUP BY
  sr.StudentID,
  sr.termid;