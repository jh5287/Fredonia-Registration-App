BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[AdvisorStudent] (
    [AdvisorStudentID] INT NOT NULL IDENTITY(1,1),
    [AdvisorID] INT,
    [StudentID] INT,
    CONSTRAINT [AdvisorStudent_pkey] PRIMARY KEY CLUSTERED ([AdvisorStudentID]),
    CONSTRAINT [AdvisorStudent_AdvisorID_StudentID_key] UNIQUE NONCLUSTERED ([AdvisorID],[StudentID])
);

-- AddForeignKey
ALTER TABLE [dbo].[AdvisorStudent] ADD CONSTRAINT [AdvisorStudent_AdvisorID_fkey] FOREIGN KEY ([AdvisorID]) REFERENCES [dbo].[Advisor]([AdvisorID]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AdvisorStudent] ADD CONSTRAINT [AdvisorStudent_StudentID_fkey] FOREIGN KEY ([StudentID]) REFERENCES [dbo].[Student]([StudentID]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
