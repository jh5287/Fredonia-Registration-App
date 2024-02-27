--* The inserted data from FRDMinimalCatalog has only 1 created catalog, which 
--* is catalog 1 for the CS departement. The following queries all use catalog 1.

-- Catalogs for all Programs
SELECT * 
FROM Program as P JOIN Catalog as C
	ON P.ProgramID = C.ProgramID

-- All classes in a catalog
SELECT * 
FROM CourseCatalog as CC JOIN Course 
	ON (CC.CRN = Course.CRN)
WHERE CC.CatalogID = 1

-- Classes in a semester + year from a catalog
-- Change Semester ("Fall" / "Spring") and Year (1, 2, 3, 4))
SELECT * 
FROM CourseCatalog as CC JOIN Course
	ON (CC.CRN = Course.CRN)
WHERE CC.CatalogID = 1
AND CC.RecommendedSemester = 'Fall'
And CC.RecommendedYear = 1; 

