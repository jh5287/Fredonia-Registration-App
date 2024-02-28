BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Attribute] (
    [AttributeID] INT NOT NULL IDENTITY(1,1),
    [Description] TEXT,
    CONSTRAINT [PK__Attribut__C189298A9D588A55] PRIMARY KEY CLUSTERED ([AttributeID])
);

-- CreateTable
CREATE TABLE [dbo].[Catalog] (
    [CatalogID] INT NOT NULL IDENTITY(1,1),
    [TermID] INT,
    [ProgramID] INT,
    CONSTRAINT [PK__Catalog__C2513B48325E343E] PRIMARY KEY CLUSTERED ([CatalogID])
);

-- CreateTable
CREATE TABLE [dbo].[Course] (
    [CRN] INT NOT NULL IDENTITY(1,1),
    [CourseCode] VARCHAR(64),
    [Title] VARCHAR(256),
    [Credits] INT,
    [Level] VARCHAR(64),
    [DepartmentID] INT,
    CONSTRAINT [PK__Course__C1F887FFECF40417] PRIMARY KEY CLUSTERED ([CRN])
);

-- CreateTable
CREATE TABLE [dbo].[CourseAttribute] (
    [CRN] INT NOT NULL,
    [AttributeID] INT NOT NULL,
    CONSTRAINT [PK__CourseAt__7DE015677FA13090] PRIMARY KEY CLUSTERED ([CRN],[AttributeID])
);

-- CreateTable
CREATE TABLE [dbo].[CourseCatalog] (
    [CRN] INT NOT NULL,
    [CatalogID] INT NOT NULL,
    [RecommendedSemester] VARCHAR(10),
    [RecommendedYear] INT,
    CONSTRAINT [PK__CourseCa__5DDD944B393E61DA] PRIMARY KEY CLUSTERED ([CRN],[CatalogID])
);

-- CreateTable
CREATE TABLE [dbo].[CourseCorequisite] (
    [CourseCRN] INT NOT NULL,
    [CorequisiteCRN] INT NOT NULL,
    CONSTRAINT [PK__CourseCo__875F77891D5B2418] PRIMARY KEY CLUSTERED ([CourseCRN],[CorequisiteCRN])
);

-- CreateTable
CREATE TABLE [dbo].[CourseFee] (
    [CRN] INT NOT NULL,
    [FeeID] INT NOT NULL,
    CONSTRAINT [PK__CourseFe__4AC0FCDFF4D69E13] PRIMARY KEY CLUSTERED ([CRN],[FeeID])
);

-- CreateTable
CREATE TABLE [dbo].[CoursePrerequisite] (
    [CourseCRN] INT NOT NULL,
    [PrerequisiteCRN] INT NOT NULL,
    CONSTRAINT [PK__CoursePr__5438AF5F0DA87C5C] PRIMARY KEY CLUSTERED ([CourseCRN],[PrerequisiteCRN])
);

-- CreateTable
CREATE TABLE [dbo].[CourseRestriction] (
    [CRN] INT NOT NULL,
    [RestrictionID] INT NOT NULL,
    CONSTRAINT [PK__CourseRe__74D15F969ADC0852] PRIMARY KEY CLUSTERED ([CRN],[RestrictionID])
);

-- CreateTable
CREATE TABLE [dbo].[CourseSchedule] (
    [ScheduleID] INT NOT NULL IDENTITY(1,1),
    [CRN] INT,
    [StartDate] DATE,
    [EndDate] DATE,
    [Days] VARCHAR(32),
    [Time] VARCHAR(32),
    [Location] VARCHAR(256),
    [InstructorID] INT,
    [TermID] INT,
    [Status] VARCHAR(32),
    [InstructionMode] VARCHAR(32),
    CONSTRAINT [PK__CourseSc__9C8A5B69BABE1545] PRIMARY KEY CLUSTERED ([ScheduleID])
);

-- CreateTable
CREATE TABLE [dbo].[Department] (
    [DepartmentID] INT NOT NULL IDENTITY(1,1),
    [Name] VARCHAR(64),
    CONSTRAINT [PK__Departme__B2079BCDE4B7CE0A] PRIMARY KEY CLUSTERED ([DepartmentID])
);

-- CreateTable
CREATE TABLE [dbo].[Fee] (
    [FeeID] INT NOT NULL IDENTITY(1,1),
    [Description] TEXT,
    [Amount] DECIMAL(10,2),
    CONSTRAINT [PK__Fee__B387B20986EFD026] PRIMARY KEY CLUSTERED ([FeeID])
);

-- CreateTable
CREATE TABLE [dbo].[Instructor] (
    [InstructorID] INT NOT NULL IDENTITY(1,1),
    [FirstName] VARCHAR(64),
    [LastName] VARCHAR(64),
    [DepartmentID] INT,
    CONSTRAINT [PK__Instruct__9D010B7B570456D1] PRIMARY KEY CLUSTERED ([InstructorID])
);

-- CreateTable
CREATE TABLE [dbo].[InstructorDepartment] (
    [DepartmentID] INT NOT NULL,
    [InstructorID] INT NOT NULL,
    CONSTRAINT [PK__Instruct__1BD78B7A460AE624] PRIMARY KEY CLUSTERED ([DepartmentID],[InstructorID])
);

-- CreateTable
CREATE TABLE [dbo].[Program] (
    [ProgramID] INT NOT NULL IDENTITY(1,1),
    [Name] VARCHAR(255),
    [DegreeType] VARCHAR(50),
    CONSTRAINT [PK__Program__752560380B0DF6B7] PRIMARY KEY CLUSTERED ([ProgramID])
);

-- CreateTable
CREATE TABLE [dbo].[Restriction] (
    [RestrictionID] INT NOT NULL IDENTITY(1,1),
    [Description] TEXT,
    CONSTRAINT [PK__Restrict__529D869A54375F65] PRIMARY KEY CLUSTERED ([RestrictionID])
)

-- CreateTable
CREATE TABLE [dbo].[Student] (
    [StudentID] INT NOT NULL IDENTITY(1,1),
    [FirstName] VARCHAR(64),
    [LastName] VARCHAR(64),
    [Level] VARCHAR(64),
    [DepartmentID] INT,
    CONSTRAINT [PK__Student__32C52A79591BDCD9] PRIMARY KEY CLUSTERED ([StudentID])
);

-- CreateTable
CREATE TABLE [dbo].[StudentDepartment] (
    [DepartmentID] INT NOT NULL,
    [StudentID] INT NOT NULL,
    CONSTRAINT [PK__StudentD__312BC96A9E5AF4F6] PRIMARY KEY CLUSTERED ([DepartmentID],[StudentID])
);

-- CreateTable
CREATE TABLE [dbo].[StudentRegistration] (
    [RegistrationID] INT NOT NULL IDENTITY(1,1),
    [StudentID] INT,
    [CRN] INT,
    [TermID] INT,
    [GradeMode] VARCHAR(32),
    [Status] VARCHAR(32),
    [Grade] VARCHAR(32),
    [RegisteredOn] DATE,
    CONSTRAINT [PK__StudentR__6EF58830FEBF26DF] PRIMARY KEY CLUSTERED ([RegistrationID])
);

-- CreateTable
CREATE TABLE [dbo].[Term] (
    [TermID] INT NOT NULL IDENTITY(1,1),
    [TermName] VARCHAR(64),
    [StartDate] DATE,
    [EndDate] DATE,
    CONSTRAINT [PK__Term__410A2E457A03D0CE] PRIMARY KEY CLUSTERED ([TermID])
);

-- AddForeignKey
ALTER TABLE [dbo].[Catalog] ADD CONSTRAINT [FK__Catalog__Program__160F4887] FOREIGN KEY ([ProgramID]) REFERENCES [dbo].[Program]([ProgramID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Catalog] ADD CONSTRAINT [FK__Catalog__TermID__151B244E] FOREIGN KEY ([TermID]) REFERENCES [dbo].[Term]([TermID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Course] ADD CONSTRAINT [FK__Course__Departme__6A30C649] FOREIGN KEY ([DepartmentID]) REFERENCES [dbo].[Department]([DepartmentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseAttribute] ADD CONSTRAINT [FK__CourseAtt__Attri__75A278F5] FOREIGN KEY ([AttributeID]) REFERENCES [dbo].[Attribute]([AttributeID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseAttribute] ADD CONSTRAINT [FK__CourseAttri__CRN__74AE54BC] FOREIGN KEY ([CRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseCatalog] ADD CONSTRAINT [FK__CourseCat__Catal__19DFD96B] FOREIGN KEY ([CatalogID]) REFERENCES [dbo].[Catalog]([CatalogID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseCatalog] ADD CONSTRAINT [FK__CourseCatal__CRN__18EBB532] FOREIGN KEY ([CRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseCorequisite] ADD CONSTRAINT [FK__CourseCor__Coreq__03F0984C] FOREIGN KEY ([CorequisiteCRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseCorequisite] ADD CONSTRAINT [FK__CourseCor__Cours__02FC7413] FOREIGN KEY ([CourseCRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseFee] ADD CONSTRAINT [FK__CourseFee__CRN__6D0D32F4] FOREIGN KEY ([CRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseFee] ADD CONSTRAINT [FK__CourseFee__FeeID__6E01572D] FOREIGN KEY ([FeeID]) REFERENCES [dbo].[Fee]([FeeID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CoursePrerequisite] ADD CONSTRAINT [FK__CoursePre__Cours__7F2BE32F] FOREIGN KEY ([CourseCRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CoursePrerequisite] ADD CONSTRAINT [FK__CoursePre__Prere__00200768] FOREIGN KEY ([PrerequisiteCRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseRestriction] ADD CONSTRAINT [FK__CourseRes__Restr__71D1E811] FOREIGN KEY ([RestrictionID]) REFERENCES [dbo].[Restriction]([RestrictionID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseRestriction] ADD CONSTRAINT [FK__CourseRestr__CRN__70DDC3D8] FOREIGN KEY ([CRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseSchedule] ADD CONSTRAINT [FK__CourseSch__Instr__07C12930] FOREIGN KEY ([InstructorID]) REFERENCES [dbo].[Instructor]([InstructorID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseSchedule] ADD CONSTRAINT [FK__CourseSch__TermI__08B54D69] FOREIGN KEY ([TermID]) REFERENCES [dbo].[Term]([TermID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CourseSchedule] ADD CONSTRAINT [FK__CourseSched__CRN__06CD04F7] FOREIGN KEY ([CRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Instructor] ADD CONSTRAINT [FK__Instructo__Depar__5EBF139D] FOREIGN KEY ([DepartmentID]) REFERENCES [dbo].[Department]([DepartmentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[InstructorDepartment] ADD CONSTRAINT [FK__Instructo__Depar__0B91BA14] FOREIGN KEY ([DepartmentID]) REFERENCES [dbo].[Department]([DepartmentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[InstructorDepartment] ADD CONSTRAINT [FK__Instructo__Instr__0C85DE4D] FOREIGN KEY ([InstructorID]) REFERENCES [dbo].[Instructor]([InstructorID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Student] ADD CONSTRAINT [FK__Student__Departm__619B8048] FOREIGN KEY ([DepartmentID]) REFERENCES [dbo].[Department]([DepartmentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[StudentDepartment] ADD CONSTRAINT [FK__StudentDe__Depar__0F624AF8] FOREIGN KEY ([DepartmentID]) REFERENCES [dbo].[Department]([DepartmentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[StudentDepartment] ADD CONSTRAINT [FK__StudentDe__Stude__10566F31] FOREIGN KEY ([StudentID]) REFERENCES [dbo].[Student]([StudentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[StudentRegistration] ADD CONSTRAINT [FK__StudentRe__Stude__7A672E12] FOREIGN KEY ([StudentID]) REFERENCES [dbo].[Student]([StudentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[StudentRegistration] ADD CONSTRAINT [FK__StudentRe__TermI__7C4F7684] FOREIGN KEY ([TermID]) REFERENCES [dbo].[Term]([TermID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[StudentRegistration] ADD CONSTRAINT [FK__StudentRegi__CRN__7B5B524B] FOREIGN KEY ([CRN]) REFERENCES [dbo].[Course]([CRN]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

