BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[StudentCatalog] (
    [StudentID] INT NOT NULL,
    [CatalogID] INT NOT NULL,
    CONSTRAINT [StudentCatalog_pkey] PRIMARY KEY CLUSTERED ([StudentID],[CatalogID])
);

-- AddForeignKey
ALTER TABLE [dbo].[StudentCatalog] ADD CONSTRAINT [StudentCatalog_StudentID_fkey] FOREIGN KEY ([StudentID]) REFERENCES [dbo].[Student]([StudentID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[StudentCatalog] ADD CONSTRAINT [StudentCatalog_CatalogID_fkey] FOREIGN KEY ([CatalogID]) REFERENCES [dbo].[Catalog]([CatalogID]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
