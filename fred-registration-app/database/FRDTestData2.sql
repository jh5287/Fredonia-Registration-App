---------------- Static Data ---------------- 

-- Insert grade mappings
INSERT INTO GradePoints (LetterGrade, GradePoint) VALUES
('A+', 4.0), ('A', 4.0), ('A-', 3.7),
('B+', 3.3), ('B', 3.0), ('B-', 2.7),
('C+', 2.3), ('C', 2.0), ('C-', 1.7),
('D+', 1.3), ('D', 1.0), ('D-', 0.7),
('F', 0.0);


----------------------------------------------
-- Insert into Role
INSERT INTO Role (RoleName, Destription) VALUES ('Student', 'Identifies users who are actively enrolled in academic programs, granting them access to course registrations, learning materials, and academic services. This role is assigned to individuals pursuing undergraduate, graduate, or professional studies within the institution.')
INSERT INTO Role (RoleName, Destription) VALUES ('Instructor', 'Assigned to users leading classroom instruction, curriculum implementation, and student assessment in various subjects. Encompasses roles from lecturers to adjunct faculty without specifying academic rank.')

-- Insert into Department
INSERT INTO Department (Name) VALUES ('Computer Science');
INSERT INTO Department (Name) VALUES ('Mathematics');
INSERT INTO Department (Name) VALUES ('Physics');
INSERT INTO Department (Name) VALUES ('Biology');

-- Insert into User
  -- Students
INSERT INTO User (FirstName, LastName, Email, Phone, RoleID) VALUES ('Jared', 'Russel', 'russ9214@fredonia.edu', '+12223331234', 1); 
INSERT INTO User (FirstName, LastName, Email, Phone, RoleID) VALUES ('Ian', 'Cioppa', 'ciop1535@fredonia.edu', '+14445551234', 1); 
INSERT INTO User (FirstName, LastName, Email, Phone, RoleID) VALUES ('Camron', 'Walsh', 'wals9256@fredonia.edu', '+16667771234', 1); 

  -- Instructors
INSERT INTO User (FirstName, LastName, Email, Phone, RoleID) VALUES ('Adam', 'Smith', 'smith1234@fredonia.edu', '+18889991234', 2); 

-- Insert into Student
INSERT INTO Student  (UserID, Level) VALUES (1, 'Undergraduate'); 
INSERT INTO Student  (UserID, Level) VALUES (2, 'Undergraduate'); 
INSERT INTO Student  (UserID, Level) VALUES (3, 'Undergraduate'); 

-- Insert into Course


-- Insert into Term
INSERT INTO Term (Semester, Year, StartDate, EndDate) VALUES ('Fall', 2020, '2020-09-01', '2020-12-15');
INSERT INTO Term (Semester, Year, StartDate, EndDate) VALUES ('Spring', 2021, '2021-01-15', '2021-05-30');
INSERT INTO Term (Semester, Year, StartDate, EndDate) VALUES ('Fall', 2021, '2021-09-01', '2021-12-15');
INSERT INTO Term (Semester, Year, StartDate, EndDate) VALUES ('Spring', 2022, '2022-01-15', '2022-05-30');
INSERT INTO Term (Semester, Year, StartDate, EndDate) VALUES ('Fall', 2022, '2022-09-01', '2022-12-15');
INSERT INTO Term (Semester, Year, StartDate, EndDate) VALUES ('Spring', 2023, '2023-01-15', '2023-05-30');
INSERT INTO Term (Semester, Year, StartDate, EndDate) VALUES ('Fall', 2023, '2023-09-01', '2023-12-15');
INSERT INTO Term (Semester, Year, StartDate, EndDate) VALUES ('Spring', 2024, '2024-01-15', '2024-05-30');
INSERT INTO Term (Semester, Year, StartDate, EndDate) VALUES ('Fall', 2024, '2024-09-01', '2024-12-15');
