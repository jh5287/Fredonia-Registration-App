SELECT
  StudentID,
  AVG(GPA) AS CGPA
FROM
  StudentFoundationsGPA
GROUP BY
  StudentID;