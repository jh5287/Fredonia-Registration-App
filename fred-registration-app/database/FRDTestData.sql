---------------- Static Data ---------------- 

-- Insert grade mappings
INSERT INTO GradePoints (LetterGrade, GradePoint) VALUES
('A+', 4.0), ('A', 4.0), ('A-', 3.7),
('B+', 3.3), ('B', 3.0), ('B-', 2.7),
('C+', 2.3), ('C', 2.0), ('C-', 1.7),
('D+', 1.3), ('D', 1.0), ('D-', 0.7),
('F', 0.0);







---------------- Catalog Data ---------------- 

-- Insert into Department
INSERT INTO Department (Name) VALUES ('Computer Science');
INSERT INTO Department (Name) VALUES ('Mathematics');
INSERT INTO Department (Name) VALUES ('Physics');
INSERT INTO Department (Name) VALUES ('Biology');

-- Insert into Instructor
INSERT INTO Instructor (FirstName, LastName, DepartmentID) VALUES ('John', 'Doe', 2);
INSERT INTO Instructor (FirstName, LastName, DepartmentID) VALUES ('Jane', 'Smith', 2);
INSERT INTO Instructor (FirstName, LastName, DepartmentID) VALUES ('Dave', 'Greene', 2);
INSERT INTO Instructor (FirstName, LastName, DepartmentID) VALUES ('Anne', 'Rogers', 3);
INSERT INTO Instructor (FirstName, LastName, DepartmentID) VALUES ('Brian', 'Stone', 4);

-- Insert into Student
INSERT INTO Student (FirstName, LastName, Level, DepartmentID, Email, Phone) VALUES ('Alice', 'Johnson', 'Undergraduate', 1, 'AliceJ@fredonia.edu', '123-456-7891');
INSERT INTO Student (FirstName, LastName, Level, DepartmentID, Email, Phone) VALUES ('Bob', 'Brown', 'Graduate', 2, 'BobB@fredonia.edu', '123-456-7891');
INSERT INTO Student (FirstName, LastName, Level, DepartmentID, Email, Phone) VALUES ('Liam', 'Taylor', 'Graduate', 3, 'LiamT@fredonia.edu', '123-456-7891');
INSERT INTO Student (FirstName, LastName, Level, DepartmentID, Email, Phone) VALUES ('Jake', 'Smith', 'Graduate', 4, 'JakeS@fredonia.edu', '123-456-7891');

-- Insert into Restriction
INSERT INTO Restriction (Description) VALUES ('Prerequisite: Intro to Programming');
INSERT INTO Restriction (Description) VALUES ('Must be a Physics major');

-- Insert into Fee
INSERT INTO Fee (Description, Amount) VALUES ('Lab Fee', 50.00);
INSERT INTO Fee (Description, Amount) VALUES ('Material Fee', 25.00);

-- Insert into Attribute
INSERT INTO Attribute (Description) VALUES ('Fredonia Foundation');

-- Insert into Course
INSERT INTO Course (CourseCode, Title, Credits, Level, DepartmentID) VALUES
('CSIT 121', 'Computer Science I', 3, '100', 1),
('CSIT 201', 'Computer Security and Ethics', 3, '200', 1),
('MATH 120', 'Survey of Calculus I', 3, '100', 2),
('MATH 122', 'University Calculus I', 0, '100', 2), -- Assuming 0 credits means it's an option in place of MATH 120
('CSIT 221', 'Computer Science II', 3, '200', 1),
('MATH 121', 'Survey of Calculus II', 3, '100', 2),
('MATH 123', 'University Calculus II', 0, '100', 2), -- Option in place of MATH 121
('CSIT 231', 'Systems Programming', 3, '200', 1),
('CSIT 241', 'Discrete Mathematics for Computer Sci. I', 3, '200', 1),
('MATH 115', 'Survey of Matrix Algebra', 3, '100', 2),
('MATH 231', 'Linear Algebra', 0, '200', 2), -- Option in place of MATH 115
('CSIT 311', 'Assembly Language', 3, '300', 1),
('CSIT 321', 'Paradigms of Programming Languages', 3, '300', 1),
('CSIT 341', 'Data Structures', 3, '300', 1),
('CSIT 455', 'Relational and Object Databases', 3, '400', 1),
('CSIT 431', 'Introduction to Operating Systems', 3, '400', 1),
('CSIT 435', 'Data Communications and Networks', 3, '400', 1),
('CSIT 441', 'Design and Analysis of Algorithms', 3, '400', 1),
('STAT 200', 'Statistical Methods', 3, '200', 2),
('STAT 350', 'Probability and Statistics', 0, '300', 2), -- Option in place of STAT 200
('CSIT 425', 'Software Engineering', 3, '400', 1);


INSERT INTO Course (CourseCode, Title, Credits, Level, DepartmentID) VALUES
('FF101', 'Fredonia Foundation Elective 1', 3, '100', 1),
('FF102', 'Fredonia Foundation Elective 2', 3, '100', 1),
('FF103', 'Fredonia Foundation Elective 3', 3, '100', 1),
('FF104', 'Fredonia Foundation Elective 4', 3, '100', 1),
('FF105', 'Fredonia Foundation Elective 5', 3, '100', 1),
('FF106', 'Fredonia Foundation Elective 6', 3, '100', 1),
('FF107', 'Fredonia Foundation Elective 7', 3, '100', 1),
('FF108', 'Fredonia Foundation Elective 8', 3, '100', 1),
('FF109', 'Fredonia Foundation Elective 9', 3, '100', 1),
('RS306', 'Required Science Course 1', 3, '300', 1),
('RS307', 'Required Science Course 2', 3, '300', 1),
('CSITXXX1', 'Computer Science Track Course 1', 3, '300', 1),
('CSITXXX2', 'Computer Science Track Course 2', 3, '300', 1),
('CSITXXX3', 'Computer Science Track Course 3', 3, '300', 1),
('CSITXXX4', 'Computer Science Track Course 4', 3, '300', 1),
('CSITXXX5', 'Computer Science Track Course 5', 3, '300', 1),
('ULE101', 'Upper Level Elective 1', 3, '300', 1),
('ULE102', 'Upper Level Elective 2', 3, '300', 1),
('ULE103', 'Upper Level Elective 3', 3, '300', 1),
('GE101', 'General Elective 1', 3, '100', 1),
('GE102', 'General Elective 2', 3, '100', 1),
('GE103', 'General Elective 3', 3, '100', 1),
('GE104', 'General Elective 4', 3, '100', 1);

-- Insert into CourseFee
INSERT INTO CourseFee (CRN, FeeID) VALUES (1, 1);
INSERT INTO CourseFee (CRN, FeeID) VALUES (2, 2);

-- Insert into CourseRestriction
INSERT INTO CourseRestriction (CRN, RestrictionID) VALUES (1, 1);
INSERT INTO CourseRestriction (CRN, RestrictionID) VALUES (2, 2);

-- Insert into CourseAttribute
INSERT INTO CourseAttribute (CRN, AttributeID) VALUES (22, 1);
INSERT INTO CourseAttribute (CRN, AttributeID) VALUES (23, 1);
INSERT INTO CourseAttribute (CRN, AttributeID) VALUES (24, 1);
INSERT INTO CourseAttribute (CRN, AttributeID) VALUES (25, 1);
INSERT INTO CourseAttribute (CRN, AttributeID) VALUES (26, 1);
INSERT INTO CourseAttribute (CRN, AttributeID) VALUES (27, 1);

-- Insert into Term
INSERT INTO Term (TermName, StartDate, EndDate) VALUES ('Fall 2020', '2020-09-01', '2020-12-15');
INSERT INTO Term (TermName, StartDate, EndDate) VALUES ('Spring 2021', '2021-01-15', '2021-05-30');
INSERT INTO Term (TermName, StartDate, EndDate) VALUES ('Fall 2021', '2021-09-01', '2021-12-15');
INSERT INTO Term (TermName, StartDate, EndDate) VALUES ('Spring 2022', '2022-01-15', '2022-05-30');
INSERT INTO Term (TermName, StartDate, EndDate) VALUES ('Fall 2022', '2022-09-01', '2022-12-15');
INSERT INTO Term (TermName, StartDate, EndDate) VALUES ('Spring 2023', '2023-01-15', '2023-05-30');
INSERT INTO Term (TermName, StartDate, EndDate) VALUES ('Fall 2023', '2023-09-01', '2023-12-15');
INSERT INTO Term (TermName, StartDate, EndDate) VALUES ('Spring 2024', '2024-01-15', '2024-05-30');
INSERT INTO Term (TermName, StartDate, EndDate) VALUES ('Fall 2024', '2024-09-01', '2024-12-15');

-- Insert into StudentRegistrations
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (1, 1, 1, 'Pass/Fail', 'Enrolled', 'A', '2023-08-15');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (2, 3, 1, 'Pass/Fail', 'Enrolled', 'B', '2023-08-15');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (3, 2, 1, 'Pass/Fail', 'Enrolled', 'F', '2023-08-15');

-- Insert into CoursePrerequisites
INSERT INTO CoursePrerequisite (CourseCRN, PrerequisiteCRN) VALUES (1, 2);

-- Insert into CourseCorequisites
INSERT INTO CourseCorequisite (CourseCRN, CorequisiteCRN) VALUES (1, 2);

-- Insert into CourseSchedule
DECLARE @CRN INT = 1;
DECLARE @TermID INT = 1; 
DECLARE @Days VARCHAR(32) = 'MWF';
DECLARE @Time VARCHAR(32) = '10:00-11:30';
DECLARE @Location VARCHAR(256) = 'Room 101';
DECLARE @InstructorID INT = 1;
DECLARE @Status VARCHAR(32) = 'Active';
DECLARE @InstructionMode VARCHAR(32) = 'In-person';

WHILE @CRN <= (SELECT MAX(CRN) FROM Course)
BEGIN
    INSERT INTO CourseSchedule (CRN, StartDate, EndDate, Days, Time, Location, InstructorID, TermID, Status, InstructionMode)
    VALUES (@CRN, '2023-09-01', '2023-12-15', @Days, @Time, @Location, @InstructorID, @TermID, @Status, @InstructionMode);

    -- Increment CRN for the next course
    SET @CRN = @CRN + 1;
END

-- Insert into InstructorDepartment
INSERT INTO InstructorDepartment (DepartmentID, InstructorID) VALUES (1, 1);

-- Insert into StudentDepartment
INSERT INTO StudentDepartment (DepartmentID, StudentID) VALUES (1, 1);

-- Insert into Program
INSERT INTO Program (Name, DegreeType) VALUES ('Computer Science B.Sc', 'Bachelor');
INSERT INTO Program (Name, DegreeType) VALUES ('Applied Mathematics M.Sc', 'Master');
INSERT INTO Program (Name, DegreeType) VALUES ('Biology B.Sc', 'Bachelor');

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

-- Insert into Student
INSERT INTO Student (FirstName, LastName, Level, DepartmentID, Email, Phone) VALUES ('Camron', 'Walsh', 'Undergraduate', 1, 'camronwalsh@gmail.com', '123-456-7891');

-- Insert into StudentRegistrations
--Year1
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 1, 3, 'Letter', 'Completed', 'A', '2023-08-15');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 2, 3, 'Letter', 'Completed', 'B', '2023-08-15');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 3, 3, 'Letter', 'Failed', 'F', '2023-08-15');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 22, 3, 'Letter', 'Completed', 'A', '2023-08-15');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 23, 3, 'Letter', 'Completed', 'A', '2023-08-15');

INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 5, 4, 'Letter', 'Completed', 'A', '2024-01-20');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 6, 4, 'Letter', 'Completed', 'B', '2024-01-20');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 24, 4, 'Letter', 'Completed', 'C', '2024-01-20');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 25, 4, 'Letter', 'Completed', 'A', '2024-01-20');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 26, 4, 'Letter', 'Completed', 'B', '2024-01-20');
--Retaking failed class from first semester
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 3, 4, 'Letter', 'Completed', 'A', '2024-01-20');

--Year2
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 8, 5, 'Letter', 'Completed', 'B', '2024-08-15');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 9, 5, 'Letter', 'Completed', 'A', '2024-08-15');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 10, 5, 'Letter', 'Completed', 'C', '2024-08-15');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 27, 5, 'Letter', 'Completed', 'A', '2024-08-15');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 28, 5, 'Letter', 'Completed', 'A', '2024-08-15');

INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 12, 6, 'Letter', 'Completed', 'B', '2025-01-20');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 13, 6, 'Letter', 'Completed', 'C', '2025-01-20');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 29, 6, 'Letter', 'Completed', 'A', '2025-01-20');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 30, 6, 'Letter', 'Completed', 'A', '2025-01-20');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 31, 6, 'Letter', 'Completed', 'A', '2025-01-20');

--Year 3
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 14, 7, 'Letter', 'Completed', 'A', '2025-08-15');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 15, 7, 'Letter', 'Completed', 'A', '2025-08-15');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 38, 7, 'Letter', 'Completed', 'C', '2025-08-15');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 39, 7, 'Letter', 'Completed', 'B', '2025-08-15');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 32, 7, 'Letter', 'Completed', 'A', '2025-08-15');

INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 16, 8, 'Letter', 'Enrolled', NULL, '2026-01-20');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 17, 8, 'Letter', 'Enrolled', NULL, '2026-01-20');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 18, 8, 'Letter', 'Enrolled', NULL, '2026-01-20');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 19, 8, 'Letter', 'Enrolled', NULL, '2026-01-20');
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES (5, 41, 8, 'Letter', 'Enrolled', NULL, '2026-01-20');

-- Insert into StudentDepartment
INSERT INTO StudentDepartment (DepartmentID, StudentID) VALUES (1, 4);
