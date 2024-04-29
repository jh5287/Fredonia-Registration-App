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
('Instructor', 'Assigned to users leading classroom instruction, curriculum implementation, and student assessment in various subjects. Encompasses roles from lecturers to adjunct faculty without specifying academic rank.'),
('Advisor', 'Assigned to users who advise students during registration'); 



 -- Students
INSERT INTO [User] (UserID, FirstName, LastName, Email, Phone) VALUES
(1, 'Jared', 'Russel', 'russ9214@fredonia.edu', '+12223331234'),
(2, 'Ian', 'Cioppa', 'ciop1535@fredonia.edu', '+14445551234'),
(3, 'Camron', 'Walsh', 'wals9256@fredonia.edu', '+16667771234'),
(4, 'Emily', 'Smith', 'smith@fredonia.edu', '+16667771235'),
(5, 'John', 'Davis', 'davis@fredonia.edu', '+16667771236'),
(6, 'Anna', 'Johnson', 'johnson@fredonia.edu', '+16667771237'),
(7, 'Michael', 'Lee', 'lee@fredonia.edu', '+16667771238'),
(8, 'Claire', 'Brown', 'brown@fredonia.edu', '+16667771239'),
(9, 'David', 'White', 'white@fredonia.edu', '+16667771240'),
(10, 'Sarah', 'Lewis', 'lewis@fredonia.edu', '+16667771241'),
(11, 'James', 'Wilson', 'wilson@fredonia.edu', '+16667771242'),
(12, 'Laura', 'Young', 'young@fredonia.edu', '+16667771243'),
(13, 'Mark', 'Hill', 'hill@fredonia.edu', '+16667771244'),
(14, 'Jessica', 'Scott', 'scott@fredonia.edu', '+16667771245'),
(15, 'Brian', 'Moore', 'moore@fredonia.edu', '+16667771246'),
(16, 'Nicole', 'Taylor', 'taylor@fredonia.edu', '+16667771247'),
(17, 'Chris', 'Jones', 'jones@fredonia.edu', '+16667771248'),
(18, 'Megan', 'Clark', 'clark@fredonia.edu', '+16667771249'),
(19, 'Eric', 'Turner', 'turner@fredonia.edu', '+16667771250'),
(20, 'Katie', 'Walker', 'walker@fredonia.edu', '+16667771251'),
(21, 'Adam', 'Roberts', 'roberts@fredonia.edu', '+16667771252'),
(22, 'Holly', 'King', 'king@fredonia.edu', '+16667771253'),
(23, 'Steven', 'Carter', 'carter@fredonia.edu', '+16667771254'),
(24, 'Grace', 'Perry', 'perry@fredonia.edu', '+16667771255'),
(25, 'Ethan', 'Bishop', 'bishop@fredonia.edu', '+16667771256'),
(26, 'Nora', 'Ward', 'ward@fredonia.edu', '+16667771257'),
(27, 'Lucas', 'Barnes', 'barnes@fredonia.edu', '+16667771258'),
(28, 'Zoe', 'Foster', 'foster@fredonia.edu', '+16667771259'),
(29, 'Liam', 'Howard', 'howard@fredonia.edu', '+16667771260'),
(30, 'Sophia', 'Riley', 'riley@fredonia.edu', '+16667771261'),
(31, 'Mason', 'Morris', 'morris@fredonia.edu', '+16667771262'),
(32, 'Isabella', 'Jenkins', 'jenkins@fredonia.edu', '+16667771263');

-- Advisors 
INSERT INTO [User] (UserID, FirstName, LastName, Email, Phone) VALUES
(33, 'John', 'Rogers', 'rogers@fredonia.edu', '+11232343453'), 
(34, 'Zack', 'Myers', 'myers@fredonia.edu', '+16663331234'), 
(35, 'Carl', 'Stone', 'stone@fredonia.edu', '+13453661958'), 
(36, 'Jack', 'Taylor', 'jacktaylor@fredonia.edu', '+13353661958'),
(37, 'Jason', 'Gonser', 'Gonser@fredonia.edu', '+13453871958'); 


-- Roles
  -- Students
INSERT INTO UserRole (UserID, RoleID) VALUES 
(1,1), 
(2,1), 
(3,1), 
(4,1), 
(5,1), 
(6,1), 
(7,1), 
(8,1), 
(9,1), 
(10,1), 
(11,1), 
(12,1), 
(13,1), 
(14,1), 
(15,1), 
(16,1), 
(17,1), 
(18,1), 
(19,1), 
(20,1), 
(21,1), 
(22,1), 
(23,1), 
(24,1), 
(25,1), 
(26,1), 
(27,1), 
(28,1), 
(29,1), 
(30,1), 
(31,1), 
(32,1);  

  -- Advisors
INSERT INTO UserRole (UserID, RoleID) VALUES 
(33, 3), 
(34, 3), 
(35, 3),
(36, 3),
(37, 3);

-- Insert into Student
INSERT INTO Student  (StudentID, UserID, Level, classification) VALUES 
(1, 1, 'Undergraduate', 'Sophomore'),
(2, 2, 'Undergraduate', 'Senior'),
(3, 3, 'Undergraduate', 'Senior'),
(4, 4, 'Undergraduate', 'Senior'),
(5, 5, 'Undergraduate', 'Junior'),
(6, 6, 'Undergraduate', 'Freshman'),
(7, 7, 'Undergraduate', 'Sophomore'),
(8, 8, 'Undergraduate', 'Senior'),
(9, 9, 'Undergraduate', 'Junior'),
(10, 10, 'Undergraduate', 'Freshman'),
(11, 11, 'Undergraduate', 'Sophomore'),
(12, 12, 'Undergraduate', 'Senior'),
(13, 13, 'Undergraduate', 'Junior'),
(14, 14, 'Undergraduate', 'Sophomore'),
(15, 15, 'Undergraduate', 'Freshman'),
(16, 16, 'Undergraduate', 'Junior'),
(17, 17, 'Undergraduate', 'Senior'),
(18, 18, 'Undergraduate', 'Freshman'),
(19, 19, 'Undergraduate', 'Sophomore'),
(20, 20, 'Undergraduate', 'Junior'),
(21, 21, 'Undergraduate', 'Senior'),
(22, 22, 'Undergraduate', 'Sophomore'),
(23, 23, 'Undergraduate', 'Junior'),
(24, 24, 'Undergraduate', 'Freshman'),
(25, 25, 'Undergraduate', 'Sophomore'),
(26, 26, 'Undergraduate', 'Senior'),
(27, 27, 'Undergraduate', 'Junior'),
(28, 28, 'Undergraduate', 'Sophomore'),
(29, 29, 'Undergraduate', 'Freshman'),
(30, 30, 'Undergraduate', 'Senior'),
(31, 31, 'Undergraduate', 'Senior'),
(32, 32, 'Undergraduate', 'Senior');

-- Insert into Department
INSERT INTO Department (Name) VALUES 
('Computer Science'),
('Mathematics'),
('Physics'),
('Biology'), 
('Music'),
('Spanish'), 
('Accounting'), 
('Communication'), 
('Psychology'),
('English'),
('History');

-- Insert into Advisor
INSERT INTO Advisor (UserID, DepartmentID) VALUES
(33, 1), 
(34, 2), 
(35, 5),
(36, 3),
(37, 4); 

-- Insert into AdvisorStudent
INSERT INTO AdvisorStudent(AdvisorID, StudentID) VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(1,6),
(1,7),
(1,8),
(1,9),
(1,10),
(2,11),
(2,12),
(2,13),
(2,14),
(2,15),
(2,16),
(2,17),
(2,18),
(2,19),
(2,20),
(3,21),
(3,22),
(3,23),
(3,24),
(3,25),
(3,26),
(3,27),
(3,28),
(3,29),
(3,30);

INSERT INTO Program (ProgramName, DegreeType, programType) VALUES 
('Computer Science', 'Bachelor', 'Major'),
('Applied Mathematics', 'Master', 'Major'),
('Biology', 'Bachelor', 'Major'),
('Biology', 'N/A', 'Minor'),
('Computer Science', 'N/A', 'Minor'),
('Music Performance', 'Bachelor', 'Major'); 

-- Insert into StudentProgram
INSERT INTO StudentProgram(StudentID, ProgramID) VALUES 
(1, 1),
(1, 4),
(2, 1),
(2, 4),
(3, 1),
(3, 4);

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

INSERT INTO Course (CRN, CourseCode, Title, Credits, Level, DepartmentID) VALUES
(1,'FF', 'Fredonia Foundation Elective', 3, 'Undergraduate', 1),
(2,'RS', 'Required Science Course', 3, 'Undergraduate', 1),
(3,'CSTC', 'Computer Science Track Course', 3, 'Undergraduate', 1),
(4,'ULE', 'Upper Level Elective', 3, 'Undergraduate', 1),
(5,'GE', 'General Elective', 3, 'Undergraduate', 1), 
(6,'BIME', 'BIOL Major Elective (300-400 Level)', 3, 'Undergraduate', 1),
(7,'CAP', 'Capstone', 3, 'Undergraduate', 1);


-- Insert CS Courses into Course
INSERT INTO Course (CRN, CourseCode, Title, Credits, Level, DepartmentID) VALUES
(10001, 'CSIT 121', 'Computer Science I', 3, 'Undergraduate', 1),
(10002, 'CSIT 201', 'Computer Security and Ethics', 3, 'Undergraduate', 1),
(10005, 'CSIT 221', 'Computer Science II', 3, 'Undergraduate', 1),
(10008, 'CSIT 231', 'Systems Programming', 3, 'Undergraduate', 1),
(10009, 'CSIT 241', 'Discrete Mathematics for Computer Sci. I', 3, 'Undergraduate', 1),
(10011, 'MATH 231', 'Linear Algebra', 0, 'Undergraduate', 2),
(10012, 'CSIT 311', 'Assembly Language', 3, 'Undergraduate', 1),
(10013, 'CSIT 321', 'Paradigms of Programming Languages', 3, 'Undergraduate', 1),
(10014, 'CSIT 341', 'Data Structures', 3, 'Undergraduate', 1),
(10015, 'CSIT 455', 'Relational and Object Databases', 3, 'Undergraduate', 1),
(10016, 'CSIT 431', 'Introduction to Operating Systems', 3, 'Undergraduate', 1),
(10017, 'CSIT 435', 'Data Communications and Networks', 3, 'Undergraduate', 1),
(10018, 'CSIT 441', 'Design and Analysis of Algorithms', 3, 'Undergraduate', 1),
(10019, 'CSIT 425', 'Software Engineering', 3.000, 'Undergraduate', 1),
(10020, 'CSIT 461', 'Introduction to AI and Knowledge Engineering', 3.000, 'Undergraduate', 1),
(10021, 'CSIT 324', 'Object Oriented Programming', 3.000, 'Undergraduate', 1),
(10022, 'CSIT 499', 'Senior Project', 3.000, 'Undergraduate', 1),
(10023, 'CSIT 496', 'SpTp: Software Projects', 3.000, 'Undergraduate', 1),
(10024, 'CSIT 300', 'Internship', 3.000, 'Undergraduate', 1),
(35052, 'CSIT 499', 'Senior Project', 3.000, 'Undergraduate', 1);


-- Insert Math Courses into Course
INSERT INTO Course (CRN, CourseCode, Title, Credits, Level, DepartmentID) VALUES
(10003, 'MATH 120', 'Survey of Calculus I', 3, 'Undergraduate', 2),
(10004, 'MATH 122', 'University Calculus I', 0, 'Undergraduate', 2),
(10006, 'MATH 121', 'Survey of Calculus II', 3, 'Undergraduate', 2),
(30186, 'MATH 121', 'Survey of Calculus II', 3.000, 'Undergraduate', 2),
(10007, 'MATH 123', 'University Calculus II', 0, 'Undergraduate', 2), 
(32171, 'STAT 250', 'Statistics for Scientists', 3.000, 'Undergraduate', 2),
(10010, 'MATH 115', 'Survey of Matrix Algebra', 3, 'Undergraduate', 2),
(20029, 'STAT 200', 'Statistical Methods', 3, 'Undergraduate', 2),
(20020, 'STAT 350', 'Probability and Statistics', 0, 'Undergraduate', 2);



-- Insert Music Courses into Course 
INSERT INTO Course (CRN, CourseCode, Title, Credits, Level, DepartmentID) VALUES
(15890, 'MUS 047', 'Special Ens: Wind Orchestra', 1.000, 'Undergraduate', 5),
(10579, 'MUS 120', 'Concert Attendance', 0.000, 'Undergraduate', 5),
(11068, 'MUS 426', 'Saxophone', 2.000, 'Undergraduate', 5),
(35415, 'MUS 047', 'SpEns: Wind Orchestra', 3.000, 'Undergraduate', 5),
(31398, 'MUS 400', 'Recital Seminar', 0.000, 'Undergraduate', 5),
(31584, 'MUS 425', 'Saxophone', 2.000, 'Undergraduate', 5),
(10586, 'MUS 120', 'Concert Attendance', 3.000, 'Undergraduate', 5),
(14327, 'MUS 233', 'Musics of the World', 3.000, 'Undergraduate', 5),
(11382, 'MUS 300', 'Recital Seminar', 0.000, 'Undergraduate', 5),
(11602, 'MUS 326', 'Saxophone', 2.000, 'Undergraduate', 5),
(14658, 'MUS 334', 'Music of Latin America', 3.000, 'Undergraduate', 5),
(12825, 'MUS 355', 'Pedagogy Practicum - Woodwind', 0.000, 'Undergraduate', 5),
(14354, 'THEA 460', 'Performing Arts Org & Mgmt', 3.000, 'Undergraduate', 5),
(32289, 'MUS 028', 'Wind Ensemble', 3.000, 'Undergraduate', 5),
(30524, 'MUS 120', 'Concert Attendance', 3.000, 'Undergraduate', 5),
(31059, 'MUS 300', 'Recital Seminar', 3.000, 'Undergraduate', 5),
(31272, 'MUS 345', 'Saxophone', 3.000, 'Undergraduate', 5),
(35051, 'MUS 363', 'Music Entrepreneurship I', 3.000, 'Undergraduate', 5),
(12738, 'MUS 028', 'Wind Ensemble', 1.000, 'Undergraduate', 5),
(14423, 'MUS 200', 'Recital Seminar', 1.000, 'Undergraduate', 5),
(13957, 'MUS 218', 'Piano Class, Intermediate', 1.000, 'Undergraduate', 5),
(13958, 'MUS 222', 'Aural Skills IV', 2.000, 'Undergraduate', 5),
(13025, 'MUS 224', 'Music Theory IV', 3.000, 'Undergraduate', 5),
(11287, 'MUS 246', 'Saxophone', 3.000, 'Undergraduate', 5),
(10621, 'MUS 264', 'Music History in West Civ II', 3.000, 'Undergraduate', 5),
(15147, 'MUS 272', 'Arts Advocacy and Leadership', 3.000, 'Undergraduate', 5),
(32539, 'MUS 038', 'Saxophone Ensemble', 0.500, 'Undergraduate', 5),
(30748, 'MUS 200', 'Recital Seminar', 0.000, 'Undergraduate', 5),
(30383, 'MUS 217', 'Piano Class, Intermediate', 1.000, 'Undergraduate', 5),
(30433, 'MUS 221', 'Aural Skills III', 2.000, 'Undergraduate', 5),
(30442, 'MUS 223', 'Music Theory III', 3.000, 'Undergraduate', 5),
(30887, 'MUS 225', 'Saxophone', 2.000, 'Undergraduate', 5),
(32416, 'MUS 231', 'Conducting I - Instrumental', 2.000, 'Undergraduate', 5),
(31720, 'MUS 263', 'Music History in West Civ I', 3.000, 'Undergraduate', 5),
(12416, 'MUS 026', 'Concert Band', 1.000, 'Undergraduate', 5),
(10447, 'MUS 100', 'Recital Seminar', 1.000, 'Undergraduate', 5),
(10313, 'MUS 118', 'Piano Class, Elementary', 2.000, 'Undergraduate', 5),
(10316, 'MUS 122', 'Aural Skills II', 2.000, 'Undergraduate', 5),
(13591, 'MUS 124', 'Music Theory II', 3.000, 'Undergraduate', 5),
(10672, 'MUS 126', 'Saxophone', 2.000, 'Undergraduate', 5),
(32286, 'MUS 025', 'All-College Band', 1.000, 'Undergraduate', 5),
(34145, 'MUS 052', 'Fredonia Jazz Orchestra', 0.500, 'Undergraduate', 5),
(30563, 'MUS 100', 'Recital Seminar', 0.000, 'Undergraduate', 5),
(33992, 'MUS 115', 'Music Appreciation -MAJORS', 3.000, 'Undergraduate', 5),
(30380, 'MUS 117', 'Piano Class, Elementary', 1.000, 'Undergraduate', 5),
(30376, 'MUS 121', 'Aural Skills I', 2.000, 'Undergraduate', 5),
(32299, 'MUS 123', 'Music Theory I', 3.000, 'Undergraduate', 5),
(30614, 'MUS 125', 'Saxophone', 2.000, 'Undergraduate', 5);

-- Insert BIO Catalog Courses into Course
INSERT INTO Course (CRN, CourseCode, Title, Credits, Level, DepartmentID) VALUES
(11001, 'BIOL 100', 'Study for Success', 1.000, 'Undergraduate', 4),
(11002, 'BIOL 131', 'Intro Ecology and Evolution', 3.000, 'Undergraduate', 4),
(11003, 'BIOL 132', 'intro Ecology and Evolution Lab 1', 1.000, 'Undergraduate', 4),
(11004, 'CHEM 115', 'General Chemistry Lecture 1', 3.000, 'Undergraduate', 4),
(11005, 'CHEM 125', 'General Chemistry Lab 1', 1.000, 'Undergraduate', 4),
(11006, 'BIOL 133', 'Intro Cell and Molecular Biology', 3.000, 'Undergraduate', 4),
(11007, 'BIOL 134', 'Intro Cell and Molecular Biology Lab', 1.000, 'Undergraduate', 4),
(11008, 'CHEM 116', 'General Chemistry Lecture II', 3.000, 'Undergraduate', 4),
(11009, 'CHEM 126', 'General Chemistry Lab II', 1.000, 'Undergraduate', 4),
(11010, 'STAT 250', 'Statistics for Scientists', 3.000, 'Undergraduate', 4),
(11011, 'BIOL 237', 'Genetics', 3.000, 'Undergraduate', 4),
(11012, 'BIOL 238', 'Genetics Lab', 1.000, 'Undergraduate', 4),
(11013, 'CHEM 215', 'Organic Chemistry Lecture I', 3.000, 'Undergraduate', 4),
(11014, 'CHEM 225', 'Organic Chemistry Lab I', 1.000, 'Undergraduate', 4),
(11015, 'BIOL 243', 'Organismal Biology', 3.000, 'Undergraduate', 4),
(11016, 'BIOL 244', 'Organismal Biology Lab', 1.000, 'Undergraduate', 4),
(11017, 'CHEM 216', 'Organic Chemistry Lecture II', 3.000, 'Undergraduate', 4),
(11018, 'CHEM 226', 'Organic Chemistry Lab II', 1.000, 'Undergraduate', 4),
(11019, 'BIOL 330', 'Ecology', 3.000, 'Undergraduate', 4),
(11020, 'BIOL 331', 'Ecology Lab', 1.000, 'Undergraduate', 4),
(11021, 'BIOL 333', 'Biochemistry', 3.000, 'Undergraduate', 4),
(11022, 'BIOL 334', 'Biochemistry Lab', 1.000, 'Undergraduate', 4),
(11023, 'PHYS 121', 'Physics I', 3.000, 'Undergraduate', 4),
(11024, 'PHYS 123', 'Physics Lab I', 1.000, 'Undergraduate', 4),
(11025, 'PHYS 122', 'Physics II', 3.000, 'Undergraduate', 4),
(11026, 'PHYS 124', 'Physics Lab II', 1.000, 'Undergraduate', 4);

-- Insert Other Courses into Course
INSERT INTO Course (CRN, CourseCode, Title, Credits, Level, DepartmentID) VALUES
(20117, 'SPAN 110', 'Essential Spanish', 3.000, 'Undergraduate', 6),
(31792, 'ACCT 201', 'Prin of Financial Accounting', 3.000, 'Undergraduate', 7),
(34012, 'COMM 101', 'Fundamentals of Communication', 3.000, 'Undergraduate', 8),
(30232, 'PSY 129', 'Foundations of Psychology', 3.000, 'Undergraduate', 9),
(34372, 'AADM 310', 'Fundraising & Grant Writing', 3.000, 'Undergraduate', 10),
(14341, 'HIST 151', 'Global Patterns', 3.000, 'Undergraduate', 11),
(14171, 'ENGL 100', 'Craft of Writing', 3.000, 'Undergraduate', 10),
(33769, 'ENGL 144', 'Reading Humanity', 3.000, 'Undergraduate', 11),
(32857, 'POLI 150', 'World Affairs', 3.000, 'Undergraduate', 11),
(33948, 'ECON 205', 'Principles of Microeconomics', 3.000, 'Undergraduate', 11),
(34410, 'ENGL 260', 'Intro Creative Writing', 3.000, 'Undergraduate', 11);


-- Insert into CourseAttribute
INSERT INTO CourseAttribute (CRN, AttributeID) VALUES 
(1, 1);

-- Insert Jared's classes into CourseAttribute
INSERT INTO CourseAttribute (CRN, AttributeID) VALUES 
(33769, 1), 
(33992, 1), 
(30376, 1), 
(14341, 1), 
(14171, 1), 
(34410, 1), 
(30232, 1), 
(32857, 1), 
(33948, 1), 
(34012, 1);  

