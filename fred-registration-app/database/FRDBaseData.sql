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
INSERT INTO Student  (UserID, Level) VALUES 
(1, 'Undergraduate'),
(2, 'Undergraduate'),
(3, 'Undergraduate'); 

-- Insert into Department
INSERT INTO Department (Name) VALUES 
('Computer Science'),
('Mathematics'),
('Physics'),
('Biology');

-- Insert into Program
INSERT INTO Program (Name, DegreeType, programType) VALUES ('Computer Science B.Sc', 'Bachelor', 'Major');
INSERT INTO Program (Name, DegreeType, programType) VALUES ('Applied Mathematics M.Sc', 'Master', 'Major');
INSERT INTO Program (Name, DegreeType, programType) VALUES ('Biology B.Sc', 'Bachelor', 'Major');
INSERT INTO Program (Name, DegreeType, programType) VALUES ('Biology Minor', 'N/A', 'Minor');
INSERT INTO Program (Name, DegreeType, programType) VALUES ('Computer Science Minor', 'N/A', 'Minor');

-- Insert into StudentProgram
INSERT INTO StudentProgram(StudentID, ProgramID) VALUES (1, 1)
INSERT INTO StudentProgram(StudentID, ProgramID) VALUES (1, 4)
INSERT INTO StudentProgram(StudentID, ProgramID) VALUES (2, 1)
INSERT INTO StudentProgram(StudentID, ProgramID) VALUES (2, 4)
INSERT INTO StudentProgram(StudentID, ProgramID) VALUES (3, 1)
INSERT INTO StudentProgram(StudentID, ProgramID) VALUES (3, 4)

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
INSERT INTO Attribute (Description) VALUES ('Fredonia Foundation');