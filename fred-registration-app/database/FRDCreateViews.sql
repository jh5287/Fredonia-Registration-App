-- Regular GPA / CGPA
CREATE VIEW
  StudentGPA AS
SELECT
  sr.StudentID,
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
  sr.StudentID,
  sr.termid;

GO
CREATE VIEW
  StudentCGPA AS
SELECT
  StudentID,
  AVG(GPA) AS CGPA
FROM
  StudentGPA
GROUP BY
  StudentID;

-- Foundations GPA / CGPA
CREATE VIEW
	StudentFoundationsGPA AS
SELECT
  SR.StudentID,
  SR.termid,
  SUM(GP.GradePoint * C.credits) / SUM(C.credits) AS GPA
FROM
  studentRegistration SR
  JOIN course C ON SR.crn = C.CRN
  JOIN CourseAttribute CA ON C.CRN = CA.CRN
  JOIN Attribute A ON CA.AttributeID = A.AttributeID
  JOIN GradePoints GP ON SR.grade = GP.LetterGrade
  JOIN Term T ON SR.termid = T.termID
WHERE
  GETDATE () > T.EndDate AND A.Description = 'Foundation'
GROUP BY
  SR.StudentID,
  SR.termid;

GO
CREATE VIEW
  StudentFoundationsCGPA AS
SELECT
  StudentID,
  AVG(GPA) AS CGPA
FROM
  StudentFoundationsGPA
GROUP BY
  StudentID;