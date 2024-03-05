CREATE TABLE 
Role (
    RoleID INT IDENTITY (1, 1) PRIMARY KEY,
    RoleName VARCHAR(64) NOT NULL,
    Description text
);

CREATE TABLE 
Department (
    DepartmentID INT IDENTITY (1, 1) PRIMARY KEY,
    Name VARCHAR(64) NOT NULL UNIQUE
);

CREATE TABLE [User] (
    UserID INT PRIMARY KEY,
    FirstName VARCHAR(64) NOT NULL,
    LastName VARCHAR(64) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Phone VARCHAR(20),
);

CREATE TABLE 
UserRole (
    UserRoleID INT IDENTITY(1,1) PRIMARY KEY,
    UserID INT,
    RoleID INT,
    CONSTRAINT FK_UserRole_User FOREIGN KEY (UserID) REFERENCES [User] (UserID),
    CONSTRAINT FK_UserRole_Role FOREIGN KEY (RoleID) REFERENCES Role (RoleID),
    UNIQUE (UserID, RoleID)
);

CREATE TABLE
  Student (
    StudentID INT IDENTITY (1, 1) PRIMARY KEY,
    UserID INT NOT NULL UNIQUE,
    Level VARCHAR(64) NOT NULL CHECK (Level IN ('Undergraduate', 'Graduate')),
    CONSTRAINT FK_Student_User FOREIGN KEY (UserID) REFERENCES [User] (UserID)
  );

CREATE TABLE
  Instructor (
    InstructorID INT IDENTITY (1, 1) PRIMARY KEY,
    UserID INT NOT NULL UNIQUE,
    DepartmentID INT NOT NULL,
    CONSTRAINT FK_Instructor_Dept FOREIGN KEY (DepartmentID) REFERENCES Department (DepartmentID),
    CONSTRAINT FK_Instructor_User FOREIGN KEY (UserID) REFERENCES [User] (UserID)
  );

CREATE TABLE
  Restriction (
    RestrictionID INT IDENTITY (1, 1) PRIMARY KEY,
    Description VARCHAR(255) NOT NULL UNIQUE
  );

CREATE TABLE
  Fee (
    FeeID INT IDENTITY (1, 1) PRIMARY KEY,
    Description VARCHAR(255) NOT NULL UNIQUE,
    Amount DECIMAL(10, 2) NOT NULL
  );

CREATE TABLE
  Attribute (
    AttributeID INT IDENTITY (1, 1) PRIMARY KEY,
    Description VARCHAR(255) NOT NULL UNIQUE
  );

CREATE TABLE
  Course (
    CRN INT PRIMARY KEY NOT NULL,
    CourseCode VARCHAR(64) NOT NULL,
    Title VARCHAR(256) NOT NULL,
    Credits INT NOT NULL CHECK (Credits BETWEEN 0 and 5),
    Level VARCHAR(64) NOT NULL CHECK (Level IN ('Undergraduate', 'Graduate')),
    DepartmentID INT NOT NULL,
    CONSTRAINT FK_Course_Dept FOREIGN KEY (DepartmentID) REFERENCES Department (DepartmentID)
  );

CREATE TABLE
  CourseFee (
    CRN INT,
    FeeID INT, 
    PRIMARY KEY (CRN, FeeID),
    CONSTRAINT FK_CourseFee_Course FOREIGN KEY (CRN) REFERENCES Course (CRN) ON DELETE CASCADE,
    CONSTRAINT FK_CourseFee_Fee FOREIGN KEY (FeeID) REFERENCES Fee (FeeID) ON DELETE CASCADE
  );

CREATE TABLE
  CourseRestriction (
    CRN INT,
    RestrictionID INT,
    PRIMARY KEY (CRN, RestrictionID),
    CONSTRAINT FK_CourseRest_Course FOREIGN KEY (CRN) REFERENCES Course (CRN) ON DELETE CASCADE,
    CONSTRAINT FK_CourseRest_Restriction FOREIGN KEY (RestrictionID) REFERENCES Restriction (RestrictionID) ON DELETE CASCADE
  );

CREATE TABLE
  CourseAttribute (
    CRN INT,
    AttributeID INT,
    PRIMARY KEY (CRN, AttributeID),
    CONSTRAINT FK_CourseAtt_Course FOREIGN KEY (CRN) REFERENCES Course (CRN) ON DELETE CASCADE,
    CONSTRAINT FK_CourseAtt_Attribute FOREIGN KEY (AttributeID) REFERENCES Attribute (AttributeID) ON DELETE CASCADE
  );

CREATE TABLE
  Term (
    TermID INT IDENTITY (1, 1) PRIMARY KEY,
    Semester VARCHAR(32) NOT NULL,
    Year INT NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    CONSTRAINT CHK_Term_Dates CHECK (StartDate < EndDate),
    CONSTRAINT CHK_Semester CHECK (
      Semester IN ('Fall', 'Spring', 'Summer', 'J-Term')
    )
  );

CREATE TABLE
  StudentRegistration (
    RegistrationID INT IDENTITY (1, 1) PRIMARY KEY,
    StudentID INT NOT NULL,
    CRN INT NOT NULL,
    TermID INT NOT NULL,
    GradeMode VARCHAR(32) NOT NULL CHECK (GradeMode IN ('Pass/Fail', 'Letter')),
    Status VARCHAR(32) NOT NULL DEFAULT 'Registered' CHECK (
      Status IN (
        'Registered',
        'Enrolled',
        'Completed',
        'Withdrawn',
        'Failed'
      )
    ),
    Grade VARCHAR(32) CHECK (
      Grade IN (
        'A+',
        'A',
        'A-',
        'B+',
        'B',
        'B-',
        'C+',
        'C',
        'C-',
        'D+',
        'D',
        'D-',
        'F',
        'W',
        'I',
        'P',
        'NP',
        'S',
        'WC'
      )
      OR Grade IS NULL
    ),
    RegisteredOn DATE NOT NULL,
    CONSTRAINT FK_StudentReg_StudentID FOREIGN KEY (StudentID) REFERENCES Student (StudentID),
    CONSTRAINT FK_StudentReg_Course FOREIGN KEY (CRN) REFERENCES Course (CRN),
    CONSTRAINT FK_StudentReg_Term FOREIGN KEY (TermID) REFERENCES Term (TermID)
  );

CREATE TABLE
  CoursePrerequisite (
    CourseCRN INT,
    PrerequisiteCRN INT,
    PRIMARY KEY (CourseCRN, PrerequisiteCRN),
    CONSTRAINT FK_CoursePrereq_Course FOREIGN KEY (CourseCRN) REFERENCES Course (CRN),
    CONSTRAINT FK_Courseprereq_Course2 FOREIGN KEY (PrerequisiteCRN) REFERENCES Course (CRN)
  );

CREATE TABLE
  CourseCorequisite (
    CourseCRN INT,
    CorequisiteCRN INT,
    PRIMARY KEY (CourseCRN, CorequisiteCRN),
    CONSTRAINT FK_CourseCoreq_Course FOREIGN KEY (CourseCRN) REFERENCES Course (CRN),
    CONSTRAINT FK_CourseCoreq_Course2 FOREIGN KEY (CorequisiteCRN) REFERENCES Course (CRN)
  );

CREATE TABLE
  CourseSchedule (
    ScheduleID INT IDENTITY (1, 1) PRIMARY KEY,
    CRN INT NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    Days VARCHAR(32) NOT NULL CHECK (
      Days IN (
        'M',
        'T',
        'W',
        'R',
        'F',
        'MW',
        'TR',
        'MWF',
        'MTWRF'
      )
    ),
    Time VARCHAR(32) NOT NULL,
    Location VARCHAR(256) NOT NULL,
    InstructorID INT NOT NULL,
    TermID INT NOT NULL,
    Status VARCHAR(32) NOT NULL CHECK (Status IN ('Active', 'Cancelled', 'Completed')),
    InstructionMode VARCHAR(32) NOT NULL CHECK (
      InstructionMode IN ('In-Person', 'Online', 'Hybrid')
    ),
  );

CREATE TABLE
  InstructorDepartment (
    InstructorDepartmentID INT IDENTITY(1,1) PRIMARY KEY,
    DepartmentID INT,
    InstructorID INT,
    CONSTRAINT FK_InstructorDept_Department FOREIGN KEY (DepartmentID) REFERENCES Department (DepartmentID),
    CONSTRAINT FK_InstructorDept_Instructor FOREIGN KEY (InstructorID) REFERENCES Instructor (InstructorID),
    UNIQUE (InstructorID, DepartmentID)
  );

CREATE TABLE
  StudentDepartment (
    StudentDepartmentID INT IDENTITY(1,1) PRIMARY KEY,
    DepartmentID INT,
    StudentID INT,
    CONSTRAINT FK_StudentDept_Department FOREIGN KEY (DepartmentID) REFERENCES Department (DepartmentID),
    CONSTRAINT FK_StudentDept_Student FOREIGN KEY (StudentID) REFERENCES Student (StudentID),
    UNIQUE (StudentID, DepartmentID)
  );

CREATE TABLE
  Program (
    ProgramID INT IDENTITY (1, 1) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL UNIQUE,
    DegreeType VARCHAR(50) NOT NULL CHECK (
      DegreeType IN ('Bachelor', 'Master', 'Doctorate', 'Certificate')
    )
  );

CREATE TABLE
  Catalog (
    CatalogID INT IDENTITY (1, 1) PRIMARY KEY,
    TermID INT NOT NULL,
    ProgramID INT NOT NULL,
    CONSTRAINT FK_Catalog_Term FOREIGN KEY (TermID) REFERENCES Term (TermID),
    CONSTRAINT FK_Catalog_Program FOREIGN KEY (ProgramID) REFERENCES Program (ProgramID),
    CONSTRAINT UC_Catalog_TermProgram UNIQUE (TermID, ProgramID)
  );

CREATE TABLE
  CourseCatalog (
    CRN INT NOT NULL,
    CatalogID INT NOT NULL,
    RecommendedSemester VARCHAR(10) CHECK (
      RecommendedSemester IN ('Fall', 'Spring', 'Summer')
    ),
    RecommendedYear INT CHECK (RecommendedYear IN (1, 2, 3, 4, 5)),
    PRIMARY KEY (CRN, CatalogID),
    CONSTRAINT FK_CourseCatalog_Course FOREIGN KEY (CRN) REFERENCES Course (CRN),
    CONSTRAINT FK_CourseCatalog_Catalog FOREIGN KEY (CatalogID) REFERENCES Catalog (CatalogID)
  );

CREATE TABLE
  GradePoints (
    LetterGrade VARCHAR(2),
    GradePoint DECIMAL(3, 2) NOT NULL,
    PRIMARY KEY (LetterGrade)
  );