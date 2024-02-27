CREATE VIEW
  StudentGPA AS
SELECT
  sr.studentid,
  sr.termid,
  SUM(gp.GradePoint * c.credits) / SUM(c.credits) AS GPA
FROM
  studentRegistration sr
  JOIN course c ON sr.crn = c.crn
  JOIN GradePoints gp ON sr.grade = gp.LetterGrade
  JOIN Term t ON sr.termid = t.termID
WHERE
  GETDATE () > t.EndDate
GROUP BY
  sr.studentid,
  sr.termid;



-- GO command allows multiple batch statements
GO

CREATE VIEW
  StudentCGPA AS
SELECT
  studentid,
  AVG(GPA) AS CGPA
FROM
  StudentGPA
GROUP BY
  studentid;