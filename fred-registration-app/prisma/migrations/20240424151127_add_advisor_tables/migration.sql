BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Attribute] (
    [AttributeID] INT NOT NULL IDENTITY(1,1),
    [Description] VARCHAR(255) NOT NULL,
    CONSTRAINT [PK__Attribut__C189298ADDA1D524] PRIMARY KEY CLUSTERED ([AttributeID]),
    CONSTRAINT [UQ__Attribut__4EBBBAC933E0E21A] UNIQUE NONCLUSTERED ([Description])
);

-- CreateTable
CREATE TABLE [dbo].[Catalog] (
    [CatalogID] INT NOT NULL IDENTITY(1,1),
    [TermID] INT NOT NULL,
    [ProgramID] INT NOT NULL,
    CONSTRAINT [PK__Catalog__C2513B48DE795AB3] PRIMARY KEY CLUSTERED ([CatalogID]),
    CONSTRAINT [UC_Catalog_TermProgram] UNIQUE NONCLUSTERED ([TermID],[ProgramID])
);

-- CreateTable
CREATE TABLE [dbo].[Course] (
    [CRN] INT NOT NULL,
    [CourseCode] VARCHAR(64) NOT NULL,
    [Title] VARCHAR(256) NOT NULL,
    [Credits] INT NOT NULL,
    [Level] VARCHAR(64) NOT NULL,
    [DepartmentID] INT NOT NULL,
    CONSTRAINT [PK__Course__C1F887FF45D0B27C] PRIMARY KEY CLUSTERED ([CRN])
);

-- CreateTable
CREATE TABLE [dbo].[CourseAttribute] (
    [CRN] INT NOT NULL,
    [AttributeID] INT NOT NULL,
    CONSTRAINT [PK__CourseAt__7DE01567121E6F96] PRIMARY KEY CLUSTERED ([CRN],[AttributeID])
);

-- CreateTable
CREATE TABLE [dbo].[CourseCatalog] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [CRN] INT NOT NULL,
    [CatalogID] INT NOT NULL,
    [RecommendedSemester] VARCHAR(10),
    [RecommendedYear] INT,
    CONSTRAINT [PK__CourseCa__3214EC276DB861AC] PRIMARY KEY CLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[CourseCorequisite] (
    [CourseCRN] INT NOT NULL,
    [CorequisiteCRN] INT NOT NULL,
    CONSTRAINT [PK__CourseCo__875F778934DB4F76] PRIMARY KEY CLUSTERED ([CourseCRN],[CorequisiteCRN])
);

-- CreateTable
CREATE TABLE [dbo].[CourseFee] (
    [CRN] INT NOT NULL,
    [FeeID] INT NOT NULL,
    CONSTRAINT [PK__CourseFe__4AC0FCDFE9714F2D] PRIMARY KEY CLUSTERED ([CRN],[FeeID])
);

-- CreateTable
CREATE TABLE [dbo].[CoursePrerequisite] (
    [CourseCRN] INT NOT NULL,
    [PrerequisiteCRN] INT NOT NULL,
    CONSTRAINT [PK__CoursePr__5438AF5F937AB0AE] PRIMARY KEY CLUSTERED ([CourseCRN],[PrerequisiteCRN])
);

-- CreateTable
CREATE TABLE [dbo].[CourseRestriction] (
    [CRN] INT NOT NULL,
    [RestrictionID] INT NOT NULL,
    CONSTRAINT [PK__CourseRe__74D15F966B35B10F] PRIMARY KEY CLUSTERED ([CRN],[RestrictionID])
);

-- CreateTable
CREATE TABLE [dbo].[CourseSchedule] (
    [ScheduleID] INT NOT NULL IDENTITY(1,1),
    [CRN] INT NOT NULL,
    [StartDate] DATE NOT NULL,
    [EndDate] DATE NOT NULL,
    [Days] VARCHAR(32) NOT NULL,
    [Time] VARCHAR(32) NOT NULL,
    [Location] VARCHAR(256) NOT NULL,
    [InstructorID] INT NOT NULL,
    [TermID] INT NOT NULL,
    [Status] VARCHAR(32) NOT NULL,
    [InstructionMode] VARCHAR(32) NOT NULL,
    CONSTRAINT [PK__CourseSc__9C8A5B6946688541] PRIMARY KEY CLUSTERED ([ScheduleID])
);

-- CreateTable
CREATE TABLE [dbo].[Department] (
    [DepartmentID] INT NOT NULL IDENTITY(1,1),
    [Name] VARCHAR(64) NOT NULL,
    CONSTRAINT [PK__Departme__B2079BCDBCCE9A9D] PRIMARY KEY CLUSTERED ([DepartmentID]),
    CONSTRAINT [UQ__Departme__737584F63F5CD29A] UNIQUE NONCLUSTERED ([Name])
);

-- CreateTable
CREATE TABLE [dbo].[Fee] (
    [FeeID] INT NOT NULL IDENTITY(1,1),
    [Description] VARCHAR(255) NOT NULL,
    [Amount] DECIMAL(10,2) NOT NULL,
    CONSTRAINT [PK__Fee__B387B209494AB316] PRIMARY KEY CLUSTERED ([FeeID]),
    CONSTRAINT [UQ__Fee__4EBBBAC984CE0C8D] UNIQUE NONCLUSTERED ([Description])
);

-- CreateTable
CREATE TABLE [dbo].[Instructor] (
    [InstructorID] INT NOT NULL IDENTITY(1,1),
    [UserID] INT NOT NULL,
    [DepartmentID] INT NOT NULL,
    CONSTRAINT [PK__Instruct__9D010B7BA7C19F27] PRIMARY KEY CLUSTERED ([InstructorID]),
    CONSTRAINT [UQ__Instruct__1788CCADF827E300] UNIQUE NONCLUSTERED ([UserID])
);

-- CreateTable
CREATE TABLE [dbo].[Advisor] (
    [AdvisorID] INT NOT NULL IDENTITY(1,1),
    [UserID] INT NOT NULL,
    [DepartmentID] INT NOT NULL,
    CONSTRAINT [Advisor_pkey] PRIMARY KEY CLUSTERED ([AdvisorID]),
    CONSTRAINT [Advisor_UserID_key] UNIQUE NONCLUSTERED ([UserID])
);

-- CreateTable
CREATE TABLE [dbo].[InstructorDepartment] (
    [InstructorDepartmentID] INT NOT NULL IDENTITY(1,1),
    [DepartmentID] INT,
    [InstructorID] INT,
    CONSTRAINT [PK__Instruct__C26B8DCC79CF3B48] PRIMARY KEY CLUSTERED ([InstructorDepartmentID]),
    CONSTRAINT [InstructorDepartment_InstructorID_DepartmentID_key] UNIQUE NONCLUSTERED ([InstructorID],[DepartmentID])
);

-- CreateTable
CREATE TABLE [dbo].[AdvisorDepartment] (
    [AdvisorDepartmentID] INT NOT NULL IDENTITY(1,1),
    [DepartmentID] INT,
    [AdvisorID] INT,
    CONSTRAINT [AdvisorDepartment_pkey] PRIMARY KEY CLUSTERED ([AdvisorDepartmentID]),
    CONSTRAINT [AdvisorDepartment_AdvisorID_DepartmentID_key] UNIQUE NONCLUSTERED ([AdvisorID],[DepartmentID])
);

-- CreateTable
CREATE TABLE [dbo].[Program] (
    [ProgramID] INT NOT NULL IDENTITY(1,1),
    [ProgramName] VARCHAR(255) NOT NULL,
    [DegreeType] VARCHAR(50),
    [ProgramType] VARCHAR(50) NOT NULL,
    CONSTRAINT [PK__Program__75256038FEC26693] PRIMARY KEY CLUSTERED ([ProgramID])
);

-- CreateTable
CREATE TABLE [dbo].[Restriction] (
    [RestrictionID] INT NOT NULL IDENTITY(1,1),
    [Description] VARCHAR(255) NOT NULL,
    CONSTRAINT [PK__Restrict__529D869AE65B7DFF] PRIMARY KEY CLUSTERED ([RestrictionID]),
    CONSTRAINT [UQ__Restrict__4EBBBAC9226D51C5] UNIQUE NONCLUSTERED ([Description])
);

-- CreateTable
CREATE TABLE [dbo].[Student] (
    [StudentID] INT NOT NULL,
    [UserID] INT NOT NULL,
    [Level] VARCHAR(64) NOT NULL,
    [Classification] VARCHAR(64) NOT NULL,
    CONSTRAINT [PK__Student__32C52A79E116FA56] PRIMARY KEY CLUSTERED ([StudentID]),
    CONSTRAINT [UQ__Student__1788CCAD7CFBB5E8] UNIQUE NONCLUSTERED ([UserID])
);

-- CreateTable
CREATE TABLE [dbo].[StudentDepartment] (
    [StudentDepartmentID] INT NOT NULL IDENTITY(1,1),
    [DepartmentID] INT,
    [StudentID] INT,
    CONSTRAINT [PK__StudentD__9A6DB1BA3A6BE6B7] PRIMARY KEY CLUSTERED ([StudentDepartmentID]),
    CONSTRAINT [UQ__StudentD__F9E553C46D0851EF] UNIQUE NONCLUSTERED ([StudentID],[DepartmentID])
);

-- CreateTable
CREATE TABLE [dbo].[StudentRegistration] (
    [RegistrationID] INT NOT NULL IDENTITY(1,1),
    [StudentID] INT NOT NULL,
    [CRN] INT NOT NULL,
    [TermID] INT NOT NULL,
    [GradeMode] VARCHAR(32) NOT NULL,
    [Status] VARCHAR(32) NOT NULL CONSTRAINT [DF__StudentRe__Statu__6C190EBB] DEFAULT 'Registered',
    [Grade] VARCHAR(32),
    [RegisteredOn] DATE NOT NULL,
    CONSTRAINT [PK__StudentR__6EF58830928DE560] PRIMARY KEY CLUSTERED ([RegistrationID])
);

-- CreateTable
CREATE TABLE [dbo].[Term] (
    [TermID] INT NOT NULL IDENTITY(1,1),
    [Semester] VARCHAR(32) NOT NULL,
    [Year] INT NOT NULL,
    [StartDate] DATE NOT NULL,
    [EndDate] DATE NOT NULL,
    CONSTRAINT [PK__Term__410A2E45E9BFEDEB] PRIMARY KEY CLUSTERED ([TermID])
);

-- CreateTable
CREATE TABLE [dbo].[GradePoints] (
    [LetterGrade] VARCHAR(2) NOT NULL,
    [GradePoint] DECIMAL(3,2) NOT NULL,
    CONSTRAINT [PK__GradePoi__BC0CE0584CEB936C] PRIMARY KEY CLUSTERED ([LetterGrade])
);

-- CreateTable
CREATE TABLE [dbo].[Role] (
    [RoleID] INT NOT NULL IDENTITY(1,1),
    [RoleName] VARCHAR(64) NOT NULL,
    [Description] TEXT,
    CONSTRAINT [PK__Role__8AFACE3A856FED9E] PRIMARY KEY CLUSTERED ([RoleID])
);

-- CreateTable
CREATE TABLE [dbo].[User] (
    [UserID] INT NOT NULL,
    [FirstName] VARCHAR(64) NOT NULL,
    [LastName] VARCHAR(64) NOT NULL,
    [Email] VARCHAR(100) NOT NULL,
    [Phone] VARCHAR(20),
    CONSTRAINT [PK__User__1788CCACE2465B33] PRIMARY KEY CLUSTERED ([UserID]),
    CONSTRAINT [UQ__User__A9D10534DA174BBB] UNIQUE NONCLUSTERED ([Email])
);

-- CreateTable
CREATE TABLE [dbo].[UserRole] (
    [UserRoleID] INT NOT NULL IDENTITY(1,1),
    [UserID] INT,
    [RoleID] INT,
    CONSTRAINT [PK__UserRole__3D978A55D335C793] PRIMARY KEY CLUSTERED ([UserRoleID]),
    CONSTRAINT [UQ__UserRole__AF27604EB91BF82B] UNIQUE NONCLUSTERED ([UserID],[RoleID])
);

-- CreateTable
CREATE TABLE [dbo].[StudentProgram] (
    [StudentID] INT NOT NULL,
    [ProgramID] INT NOT NULL,
    CONSTRAINT [PK_StudentProgram] PRIMARY KEY CLUSTERED ([StudentID],[ProgramID])
);

-- AddForeignKey
ALTER TABLE [dbo].[Catalog] ADD CONSTRAINT [FK__Catalog__Program__160F4887] FOREIGN KEY ([ProgramID]) REFERENCES [dbo].[Program]([ProgramID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Catalog] ADD CONSTRAINT [FK__Catalog__TermID__151B244E] FOREIGN KEY ([TermID]) REFERENCES [dbo].[Term]([TermID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Course] ADD CONSTRAINT [FK__Course__Departme__6A30C649] FOREIGN KEY ([DepartmentID]) REFERENCES [dbo].[Department]([DepartmentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseAttribute] ADD CONSTRAINT [FK__CourseAtt__Attri__75A278F5] FOREIGN KEY ([AttributeID]) REFERENCES [dbo].[Attribute]([AttributeID]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseAttribute] ADD CONSTRAINT [FK__CourseAttri__CRN__74AE54BC] FOREIGN KEY ([CRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseCatalog] ADD CONSTRAINT [FK__CourseCat__Catal__19DFD96B] FOREIGN KEY ([CatalogID]) REFERENCES [dbo].[Catalog]([CatalogID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseCatalog] ADD CONSTRAINT [FK__CourseCatal__CRN__18EBB532] FOREIGN KEY ([CRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseCorequisite] ADD CONSTRAINT [FK__CourseCor__Cours__02FC7413] FOREIGN KEY ([CourseCRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseCorequisite] ADD CONSTRAINT [FK__CourseCor__Coreq__03F0984C] FOREIGN KEY ([CorequisiteCRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseFee] ADD CONSTRAINT [FK__CourseFee__CRN__6D0D32F4] FOREIGN KEY ([CRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseFee] ADD CONSTRAINT [FK__CourseFee__FeeID__6E01572D] FOREIGN KEY ([FeeID]) REFERENCES [dbo].[Fee]([FeeID]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CoursePrerequisite] ADD CONSTRAINT [FK__CoursePre__Cours__7F2BE32F] FOREIGN KEY ([CourseCRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CoursePrerequisite] ADD CONSTRAINT [FK__CoursePre__Prere__00200768] FOREIGN KEY ([PrerequisiteCRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseRestriction] ADD CONSTRAINT [FK__CourseRestr__CRN__70DDC3D8] FOREIGN KEY ([CRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseRestriction] ADD CONSTRAINT [FK__CourseRes__Restr__71D1E811] FOREIGN KEY ([RestrictionID]) REFERENCES [dbo].[Restriction]([RestrictionID]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Instructor] ADD CONSTRAINT [FK__Instructo__Depar__5EBF139D] FOREIGN KEY ([DepartmentID]) REFERENCES [dbo].[Department]([DepartmentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Instructor] ADD CONSTRAINT [FK_Instructor_User] FOREIGN KEY ([UserID]) REFERENCES [dbo].[User]([UserID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Advisor] ADD CONSTRAINT [Advisor_DepartmentID_fkey] FOREIGN KEY ([DepartmentID]) REFERENCES [dbo].[Department]([DepartmentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Advisor] ADD CONSTRAINT [Advisor_UserID_fkey] FOREIGN KEY ([UserID]) REFERENCES [dbo].[User]([UserID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[InstructorDepartment] ADD CONSTRAINT [FK__Instructo__Depar__0B91BA14] FOREIGN KEY ([DepartmentID]) REFERENCES [dbo].[Department]([DepartmentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[InstructorDepartment] ADD CONSTRAINT [FK__Instructo__Instr__0C85DE4D] FOREIGN KEY ([InstructorID]) REFERENCES [dbo].[Instructor]([InstructorID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AdvisorDepartment] ADD CONSTRAINT [AdvisorDepartment_DepartmentID_fkey] FOREIGN KEY ([DepartmentID]) REFERENCES [dbo].[Department]([DepartmentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AdvisorDepartment] ADD CONSTRAINT [AdvisorDepartment_AdvisorID_fkey] FOREIGN KEY ([AdvisorID]) REFERENCES [dbo].[Advisor]([AdvisorID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Student] ADD CONSTRAINT [FK_Student_User] FOREIGN KEY ([UserID]) REFERENCES [dbo].[User]([UserID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[StudentDepartment] ADD CONSTRAINT [FK__StudentDe__Depar__0F624AF8] FOREIGN KEY ([DepartmentID]) REFERENCES [dbo].[Department]([DepartmentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[StudentDepartment] ADD CONSTRAINT [FK__StudentDe__Stude__10566F31] FOREIGN KEY ([StudentID]) REFERENCES [dbo].[Student]([StudentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[StudentRegistration] ADD CONSTRAINT [FK__StudentRegi__CRN__7B5B524B] FOREIGN KEY ([CRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[StudentRegistration] ADD CONSTRAINT [FK__StudentRe__Stude__7A672E12] FOREIGN KEY ([StudentID]) REFERENCES [dbo].[Student]([StudentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[StudentRegistration] ADD CONSTRAINT [FK__StudentRe__TermI__7C4F7684] FOREIGN KEY ([TermID]) REFERENCES [dbo].[Term]([TermID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[UserRole] ADD CONSTRAINT [FK_UserRole_Role] FOREIGN KEY ([RoleID]) REFERENCES [dbo].[Role]([RoleID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[UserRole] ADD CONSTRAINT [FK_UserRole_User] FOREIGN KEY ([UserID]) REFERENCES [dbo].[User]([UserID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[StudentProgram] ADD CONSTRAINT [FK_StudentProgram_Program] FOREIGN KEY ([ProgramID]) REFERENCES [dbo].[Program]([ProgramID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[StudentProgram] ADD CONSTRAINT [FK_StudentProgram_Student] FOREIGN KEY ([StudentID]) REFERENCES [dbo].[Student]([StudentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
