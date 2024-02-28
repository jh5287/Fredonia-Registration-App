SELECT
  StudentID,
  AVG(GPA) AS CGPA
FROM
  StudentGPA
GROUP BY
  StudentID;