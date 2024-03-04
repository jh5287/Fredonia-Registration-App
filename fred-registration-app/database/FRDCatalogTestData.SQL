---------------- Catalog Data ---------------- 

-- Insert into Course
INSERT INTO Course (CRN, CourseCode, Title, Credits, Level, DepartmentID) VALUES
(1, 'CSIT 121', 'Computer Science I', 3, 'Undergraduate', 1),
(2, 'CSIT 201', 'Computer Security and Ethics', 3, 'Undergraduate', 1),
(3, 'MATH 120', 'Survey of Calculus I', 3, 'Undergraduate', 2),
(4, 'MATH 122', 'University Calculus I', 0, 'Undergraduate', 2),
(5, 'CSIT 221', 'Computer Science II', 3, 'Undergraduate', 1),
(6, 'MATH 121', 'Survey of Calculus II', 3, 'Undergraduate', 2),
(7, 'MATH 123', 'University Calculus II', 0, 'Undergraduate', 2), 
(8, 'CSIT 231', 'Systems Programming', 3, 'Undergraduate', 1),
(9, 'CSIT 241', 'Discrete Mathematics for Computer Sci. I', 3, 'Undergraduate', 1),
(10, 'MATH 115', 'Survey of Matrix Algebra', 3, 'Undergraduate', 2),
(11, 'MATH 231', 'Linear Algebra', 0, 'Undergraduate', 2),
(12, 'CSIT 311', 'Assembly Language', 3, 'Undergraduate', 1),
(13, 'CSIT 321', 'Paradigms of Programming Languages', 3, 'Undergraduate', 1),
(14, 'CSIT 341', 'Data Structures', 3, 'Undergraduate', 1),
(15, 'CSIT 455', 'Relational and Object Databases', 3, 'Undergraduate', 1),
(16, 'CSIT 431', 'Introduction to Operating Systems', 3, 'Undergraduate', 1),
(17, 'CSIT 435', 'Data Communications and Networks', 3, 'Undergraduate', 1),
(18, 'CSIT 441', 'Design and Analysis of Algorithms', 3, 'Undergraduate', 1),
(19, 'STAT 200', 'Statistical Methods', 3, 'Undergraduate', 2),
(20, 'STAT 350', 'Probability and Statistics', 0, 'Undergraduate', 2),
(21, 'CSIT 425', 'Software Engineering', 3, 'Undergraduate', 1);


INSERT INTO Course (CourseCode, Title, Credits, Level, DepartmentID) VALUES
(22, 'FF101', 'Fredonia Foundation Elective 1', 3, 'Undergraduate', 1),
(23, 'FF102', 'Fredonia Foundation Elective 2', 3, 'Undergraduate', 1),
(24, 'FF103', 'Fredonia Foundation Elective 3', 3, 'Undergraduate', 1),
(25, 'FF104', 'Fredonia Foundation Elective 4', 3, 'Undergraduate', 1),
(26, 'FF105', 'Fredonia Foundation Elective 5', 3, 'Undergraduate', 1),
(27, 'FF106', 'Fredonia Foundation Elective 6', 3, 'Undergraduate', 1),
(28, 'FF107', 'Fredonia Foundation Elective 7', 3, 'Undergraduate', 1),
(29, 'FF108', 'Fredonia Foundation Elective 8', 3, 'Undergraduate', 1),
(30, 'FF109', 'Fredonia Foundation Elective 9', 3, 'Undergraduate', 1),
(31,'RS306', 'Required Science Course 1', 3, 'Undergraduate', 1),
(32,'RS307', 'Required Science Course 2', 3, 'Undergraduate', 1),
(33,'CSITXXX1', 'Computer Science Track Course 1', 3, 'Undergraduate', 1),
(34,'CSITXXX2', 'Computer Science Track Course 2', 3, 'Undergraduate', 1),
(35,'CSITXXX3', 'Computer Science Track Course 3', 3, 'Undergraduate', 1),
(36,'CSITXXX4', 'Computer Science Track Course 4', 3, 'Undergraduate', 1),
(37,'CSITXXX5', 'Computer Science Track Course 5', 3, 'Undergraduate', 1),
(38,'ULE101', 'Upper Level Elective 1', 3, 'Undergraduate', 1),
(39,'ULE102', 'Upper Level Elective 2', 3, 'Undergraduate', 1),
(40,'ULE103', 'Upper Level Elective 3', 3, 'Undergraduate', 1),
(41,'GE101', 'General Elective 1', 3, 'Undergraduate', 1),
(42,'GE102', 'General Elective 2', 3, 'Undergraduate', 1),
(43,'GE103', 'General Elective 3', 3, 'Undergraduate', 1),
(44,'GE104', 'General Elective 4', 3, 'Undergraduate', 1);

-- Insert into CourseFee
INSERT INTO CourseFee (CRN, FeeID) VALUES 
(1, 1), 
(2, 2);

-- Insert into CourseRestriction
INSERT INTO CourseRestriction (CRN, RestrictionID) VALUES 
(1, 1), 
(2, 2);

-- Insert into CourseAttribute
INSERT INTO CourseAttribute (CRN, AttributeID) VALUES 
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1);


-- Insert into Catalog
INSERT INTO Catalog (TermID, ProgramID) VALUES (1, 1);

-- Insert into CourseCatalog (Example Catalog for a Computer Science Degree)
-- Year 1
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (1, 1, 'Fall', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (2, 1, 'Fall', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (3, 1, 'Fall', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (22, 1, 'Fall', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (23, 1, 'Fall', 1);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (5, 1, 'Spring', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (6, 1, 'Spring', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (24, 1, 'Spring', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (25, 1, 'Spring', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (26, 1, 'Spring', 1);

-- Year 2
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (8, 1, 'Fall', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (9, 1, 'Fall', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (10, 1, 'Fall', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (27, 1, 'Fall', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (28, 1, 'Fall', 2);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (12, 1, 'Spring', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (13, 1, 'Spring', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (29, 1, 'Spring', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (30, 1, 'Spring', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (31, 1, 'Spring', 2);

-- Year 3
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (14, 1, 'Fall', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (15, 1, 'Fall', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (38, 1, 'Fall', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (39, 1, 'Fall', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (32, 1, 'Fall', 3);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (16, 1, 'Spring', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (17, 1, 'Spring', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (18, 1, 'Spring', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (19, 1, 'Spring', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (41, 1, 'Spring', 3);

-- Year 4
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (33, 1, 'Fall', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (34, 1, 'Fall', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (35, 1, 'Fall', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (42, 1, 'Fall', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (43, 1, 'Fall', 4);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (21, 1, 'Spring', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (36, 1, 'Spring', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (37, 1, 'Spring', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (40, 1, 'Spring', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (44, 1, 'Spring', 4);


---------------- Student Data ---------------- 

-- Insert into StudentRegistrations
-- Year1
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(3, 1, 8, 'Letter', 'Completed', 'A', '2023-08-15'),
(3, 2, 8, 'Letter', 'Completed', 'B', '2023-08-15'),
(3, 3, 8, 'Letter', 'Failed', 'F', '2023-08-15'),
(3, 22, 8, 'Letter', 'Completed', 'A', '2023-08-15'),
(3, 23, 8, 'Letter', 'Completed', 'A', '2023-08-15');

INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(3, 5, 9, 'Letter', 'Completed', 'A', '2024-01-20'),
(3, 6, 9, 'Letter', 'Completed', 'B', '2024-01-20'),
(3, 24, 9, 'Letter', 'Completed', 'C', '2024-01-20'),
(3, 25, 9, 'Letter', 'Completed', 'A', '2024-01-20'),
(3, 26, 9, 'Letter', 'Completed', 'B', '2024-01-20');
--Retaking failed class from first semester
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(3, 3, 9, 'Letter', 'Completed', 'A', '2024-01-20');

-- Year 2
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(3, 8, 11, 'Letter', 'Completed', 'B', '2024-08-15'),
(3, 9, 11, 'Letter', 'Completed', 'A', '2024-08-15'),
(3, 10, 11, 'Letter', 'Completed', 'C', '2024-08-15'),
(3, 27, 11, 'Letter', 'Completed', 'A', '2024-08-15'),
(3, 28, 11, 'Letter', 'Completed', 'A', '2024-08-15');

INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(3, 12, 12, 'Letter', 'Completed', 'B', '2025-01-20'),
(3, 13, 12, 'Letter', 'Completed', 'C', '2025-01-20'),
(3, 29, 12, 'Letter', 'Completed', 'A', '2025-01-20'),
(3, 30, 12, 'Letter', 'Completed', 'A', '2025-01-20'),
(3, 31, 12, 'Letter', 'Completed', 'A', '2025-01-20');

-- Year 3
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(3, 14, 14, 'Letter', 'Completed', 'A', '2025-08-15'),
(3, 15, 14, 'Letter', 'Completed', 'A', '2025-08-15'),
(3, 38, 14, 'Letter', 'Completed', 'C', '2025-08-15'),
(3, 39, 14, 'Letter', 'Completed', 'B', '2025-08-15'),
(3, 32, 14, 'Letter', 'Completed', 'A', '2025-08-15');

INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(3, 16, 15, 'Letter', 'Enrolled', NULL, '2026-01-20'),
(3, 17, 15, 'Letter', 'Enrolled', NULL, '2026-01-20'),
(3, 18, 15, 'Letter', 'Enrolled', NULL, '2026-01-20'),
(3, 19, 15, 'Letter', 'Enrolled', NULL, '2026-01-20'),
(3, 41, 15, 'Letter', 'Enrolled', NULL, '2026-01-20');
