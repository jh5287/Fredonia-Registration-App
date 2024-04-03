---------------- Static Data ---------------- 

-- Insert grade mappings
INSERT INTO GradePoints (LetterGrade, GradePoint) VALUES
('A+', 4.0), ('A', 4.0), ('A-', 3.7),
('B+', 3.3), ('B', 3.0), ('B-', 2.7),
('C+', 2.3), ('C', 2.0), ('C-', 1.7),
('D+', 1.3), ('D', 1.0), ('D-', 0.7),
('F', 0.0);

-- Insert into Role
INSERT INTO Role (RoleName, Description) VALUES 
('Student', 'Identifies users who are actively enrolled in academic programs, granting them access to course registrations, learning materials, and academic services. This role is assigned to individuals pursuing undergraduate, graduate, or professional studies within the institution.'),
('Instructor', 'Assigned to users leading classroom instruction, curriculum implementation, and student assessment in various subjects. Encompasses roles from lecturers to adjunct faculty without specifying academic rank.');

  -- Students
INSERT INTO [User] (UserID, FirstName, LastName, Email, Phone) VALUES
(1, 'Jared', 'Russel', 'russ9214@fredonia.edu', '+12223331234'),
(2, 'Ian', 'Cioppa', 'ciop1535@fredonia.edu', '+14445551234'),
(3,'Camron', 'Walsh', 'wals9256@fredonia.edu', '+16667771234'); 

-- Roles
INSERT INTO UserRole (UserID, RoleID) VALUES 
(1,1), 
(2,1), 
(3,1); 

-- Insert into Student
INSERT INTO Student  (StudentID, UserID, Level, classification) VALUES 
(1,1, 'Undergraduate', 'Sophomore'),
(2,2, 'Undergraduate', 'Senior'),
(03702574,3, 'Undergraduate', 'Senior'); 

-- Insert into Department
INSERT INTO Department (Name) VALUES 
('Computer Science'),
('Mathematics'),
('Physics'),
('Biology');

-- Insert into Program
INSERT INTO Program (ProgramName, DegreeType, programType) VALUES 
('Computer Science', 'Bachelor', 'Major'),
('Applied Mathematics', 'Master', 'Major'),
('Biology', 'Bachelor', 'Major'),
('Biology', 'N/A', 'Minor'),
('Computer Science', 'N/A', 'Minor');

-- Insert into StudentProgram
INSERT INTO StudentProgram(StudentID, ProgramID) VALUES 
(1, 1),
(1, 4),
(2, 1),
(2, 4),
(03702574, 1),
(03702574, 4);

-- Insert into Term
INSERT INTO Term (Semester, Year, StartDate, EndDate) VALUES 
('Summer', 2018, '2018-06-01', '2018-08-15'),
('Fall', 2018, '2018-09-01', '2018-12-15'),
('Spring', 2019, '2019-01-15', '2019-05-30'),
('Summer', 2019, '2019-06-01', '2019-08-15'),
('Fall', 2019, '2019-09-01', '2019-12-15'),
('Spring', 2020, '2020-01-15', '2020-05-30'),
('Summer', 2020, '2020-06-01', '2020-08-15'),
('Fall', 2020, '2020-09-01', '2020-12-15'),
('Spring', 2021, '2021-01-15', '2021-05-30'),
('Summer', 2021, '2021-06-01', '2021-08-15'),
('Fall', 2021, '2021-09-01', '2021-12-15'),
('Spring', 2022, '2022-01-15', '2022-05-30'),
('Summer', 2022, '2022-06-01', '2022-08-15'),
('Fall', 2022, '2022-09-01', '2022-12-15'),
('Spring', 2023, '2023-01-15', '2023-05-30'),
('Summer', 2023, '2023-06-01', '2023-08-15'),
('Fall', 2023, '2023-09-01', '2023-12-15'),
('Spring', 2024, '2024-01-15', '2024-05-30'),
('Summer', 2024, '2024-06-01', '2024-08-15'),
('Fall', 2024, '2024-09-01', '2024-12-15');

-- Insert into Restriction
INSERT INTO Restriction (Description) VALUES ('Prerequisite: Intro to Programming');
INSERT INTO Restriction (Description) VALUES ('Must be a Physics major');

-- Insert into Fee
INSERT INTO Fee (Description, Amount) VALUES ('Lab Fee', 50.00);
INSERT INTO Fee (Description, Amount) VALUES ('Material Fee', 25.00);

-- Insert into Attribute
INSERT INTO Attribute (Description) VALUES ('Foundation');
INSERT INTO Attribute (Description) VALUES ('Upper Level');

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


INSERT INTO Course (CRN, CourseCode, Title, Credits, Level, DepartmentID) VALUES
(22,'FF', 'Fredonia Foundation Elective', 3, 'Undergraduate', 1),
(23,'RS', 'Required Science Course', 3, 'Undergraduate', 1),
(24,'CSTC', 'Computer Science Track Course', 3, 'Undergraduate', 1),
(25,'ULE', 'Upper Level Elective', 3, 'Undergraduate', 1),
(26,'GE', 'General Elective', 3, 'Undergraduate', 1); 

-- Insert Jared's Courses into Course
INSERT INTO Course (CRN, CourseCode, Title, Credits, Level, DepartmentID) VALUES
(10069, 'CSIT 321', 'Paradigms of Programming Languages', 3.000, 'Undergraduate', 1),
(16287, 'CSIT 425', 'Software Engineering', 3.000, 'Undergraduate', 1),
(15378, 'CSIT 461', 'Introduction to AI and Knowledge Engineering', 3.000, 'Undergraduate', 1),
(15379, 'CSIT 496', 'SpTp: Software Projects', 3.000, 'Undergraduate', 1),
(14507, 'CSIT 499', 'Senior Project', 3.000, 'Undergraduate', 1),
(30042, 'CSIT 300', 'Internship', 1.000, 'Undergraduate', 1),
(30044, 'CSIT 311', 'Assembly Lang/Computer Org', 3.000, 'Undergraduate', 1),
(33281, 'CSIT 431', 'Intro Operating Systems', 3.000, 'Undergraduate', 1),
(31790, 'CSIT 455', 'Relational/Object Databases', 3.000, 'Undergraduate', 1),
(35052, 'CSIT 499', 'Senior Project', 3.000, 'Undergraduate', 1),
(20117, 'SPAN 110', 'Essential Spanish', 3.000, 'Undergraduate', 1),
(10066, 'CSIT 231', 'Systems Programming', 3.000, 'Undergraduate', 1),
(14942, 'CSIT 324', 'Object Oriented Programming', 3.000, 'Undergraduate', 1),
(10070, 'CSIT 341', 'Data Structures', 3.000, 'Undergraduate', 1),
(15890, 'MUS 047', 'Special Ens: Wind Orchestra', 1.000, 'Undergraduate', 1),
(10579, 'MUS 120', 'Concert Attendance', 0.000, 'Undergraduate', 1),
(11068, 'MUS 426', 'Saxophone', 2.000, 'Undergraduate', 1),
(30040, 'CSIT 221', 'Computer Science II', 3.000, 'Undergraduate', 1),
(31789, 'CSIT 241', 'Discrete Mathematics I', 3.000, 'Undergraduate', 1),
(30186, 'MATH 121', 'Survey of Calculus II', 3.000, 'Undergraduate', 1),
(35415, 'MUS 047', 'SpEns: Wind Orchestra', 3.000, 'Undergraduate', 1),
(31398, 'MUS 400', 'Recital Seminar', 0.000, 'Undergraduate', 1),
(31584, 'MUS 425', 'Saxophone', 2.000, 'Undergraduate', 1),
(32171, 'STAT 250', 'Statistics for Scientists', 3.000, 'Undergraduate', 1),
(10059, 'CSIT 121', 'Computer Science I', 3.000, 'Undergraduate', 1),
(10586, 'MUS 120', 'Concert Attendance', 3.000, 'Undergraduate', 1),
(14327, 'MUS 233', 'Musics of the World', 3.000, 'Undergraduate', 1),
(11382, 'MUS 300', 'Recital Seminar', 0.000, 'Undergraduate', 1),
(11602, 'MUS 326', 'Saxophone', 2.000, 'Undergraduate', 1),
(14658, 'MUS 334', 'Music of Latin America', 3.000, 'Undergraduate', 1),
(12825, 'MUS 355', 'Pedagogy Practicum - Woodwind', 0.000, 'Undergraduate', 1),
(14354, 'THEA 460', 'Performing Arts Org & Mgmt', 3.000, 'Undergraduate', 1),
(31792, 'ACCT 201', 'Prin of Financial Accounting', 3.000, 'Undergraduate', 1),
(34012, 'COMM 101', 'Fundamentals of Communication', 3.000, 'Undergraduate', 1),
(32289, 'MUS 028', 'Wind Ensemble', 3.000, 'Undergraduate', 1),
(30524, 'MUS 120', 'Concert Attendance', 3.000, 'Undergraduate', 1),
(31059, 'MUS 300', 'Recital Seminar', 3.000, 'Undergraduate', 1),
(31272, 'MUS 345', 'Saxophone', 3.000, 'Undergraduate', 1),
(35051, 'MUS 363', 'Music Entrepreneurship I', 3.000, 'Undergraduate', 1),
(30232, 'PSY 129', 'Foundations of Psychology', 3.000, 'Undergraduate', 1),
(12738, 'MUS 028', 'Wind Ensemble', 1.000, 'Undergraduate', 1),
(14423, 'MUS 200', 'Recital Seminar', 1.000, 'Undergraduate', 1),
(13957, 'MUS 218', 'Piano Class, Intermediate', 1.000, 'Undergraduate', 1),
(13958, 'MUS 222', 'Aural Skills IV', 2.000, 'Undergraduate', 1),
(13025, 'MUS 224', 'Music Theory IV', 3.000, 'Undergraduate', 1),
(11287, 'MUS 246', 'Saxophone', 3.000, 'Undergraduate', 1),
(10621, 'MUS 264', 'Music History in West Civ II', 3.000, 'Undergraduate', 1),
(15147, 'MUS 272', 'Arts Advocacy and Leadership', 3.000, 'Undergraduate', 1),
(34372, 'AADM 310', 'Fundraising & Grant Writing', 3.000, 'Undergraduate', 1),
(34410, 'ENGL 260', 'Intro Creative Writing', 3.000, 'Undergraduate', 1),
(32539, 'MUS 038', 'Saxophone Ensemble', 0.500, 'Undergraduate', 1),
(30748, 'MUS 200', 'Recital Seminar', 0.000, 'Undergraduate', 1),
(30383, 'MUS 217', 'Piano Class, Intermediate', 1.000, 'Undergraduate', 1),
(30433, 'MUS 221', 'Aural Skills III', 2.000, 'Undergraduate', 1),
(30442, 'MUS 223', 'Music Theory III', 3.000, 'Undergraduate', 1),
(30887, 'MUS 225', 'Saxophone', 2.000, 'Undergraduate', 1),
(32416, 'MUS 231', 'Conducting I - Instrumental', 2.000, 'Undergraduate', 1),
(31720, 'MUS 263', 'Music History in West Civ I', 3.000, 'Undergraduate', 1),
(14171, 'ENGL 100', 'Craft of Writing', 3.000, 'Undergraduate', 1),
(14341, 'HIST 151', 'Global Patterns', 3.000, 'Undergraduate', 1),
(12416, 'MUS 026', 'Concert Band', 1.000, 'Undergraduate', 1),
(10447, 'MUS 100', 'Recital Seminar', 1.000, 'Undergraduate', 1),
(10313, 'MUS 118', 'Piano Class, Elementary', 2.000, 'Undergraduate', 1),
(10316, 'MUS 122', 'Aural Skills II', 2.000, 'Undergraduate', 1),
(13591, 'MUS 124', 'Music Theory II', 3.000, 'Undergraduate', 1),
(10672, 'MUS 126', 'Saxophone', 2.000, 'Undergraduate', 1),
(33769, 'ENGL 144', 'Reading Humanity', 3.000, 'Undergraduate', 1),
(32286, 'MUS 025', 'All-College Band', 1.000, 'Undergraduate', 1),
(34145, 'MUS 052', 'Fredonia Jazz Orchestra', 0.500, 'Undergraduate', 1),
(30563, 'MUS 100', 'Recital Seminar', 0.000, 'Undergraduate', 1),
(33992, 'MUS 115', 'Music Appreciation -MAJORS', 3.000, 'Undergraduate', 1),
(30380, 'MUS 117', 'Piano Class, Elementary', 1.000, 'Undergraduate', 1),
(30376, 'MUS 121', 'Aural Skills I', 2.000, 'Undergraduate', 1),
(32299, 'MUS 123', 'Music Theory I', 3.000, 'Undergraduate', 1),
(30614, 'MUS 125', 'Saxophone', 2.000, 'Undergraduate', 1);

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
(22, 1);

-- Insert Jared's classes into CourseAttribute
INSERT INTO CourseAttribute (CRN, AttributeID) VALUES 
(33769, 1), 
(33992, 1), 
(30376, 1), 
(14341, 1), 
(14171, 1), 
(34410, 1), 
(30232, 1), 
(34012, 1);  

