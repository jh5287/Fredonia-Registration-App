---------------- Catalog Data ---------------- 
-- Insert into Catalog
INSERT INTO Catalog (TermID, ProgramID) VALUES 
(1, 1),
(1, 3),
(1, 6); 

-- Insert into CourseCatalog (Example Catalog for a Computer Science Degree)
-- Year 1
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(10001, 1, 'Fall', 1),
(10002, 1, 'Fall', 1),
(10003, 1, 'Fall', 1),
(1, 1, 'Fall', 1),
(1, 1, 'Fall', 1);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES
(10005, 1, 'Spring', 1),
(10006, 1, 'Spring', 1),
(1, 1, 'Spring', 1),
(1, 1, 'Spring', 1),
(1, 1, 'Spring', 1);

-- Year 2
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(10008, 1, 'Fall', 2),
(10009, 1, 'Fall', 2),
(10010, 1, 'Fall', 2),
(1, 1, 'Fall', 2),
(1, 1, 'Fall', 2);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(10012, 1, 'Spring', 2),
(10013, 1, 'Spring', 2),
(1, 1, 'Spring', 2),
(1, 1, 'Spring', 2),
(1, 1, 'Spring', 2);

-- Year 3
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(10014, 1, 'Fall', 3),
(10015, 1, 'Fall', 3),
(2, 1, 'Fall', 3),
(4, 1, 'Fall', 3),
(4, 1, 'Fall', 3);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(10016, 1, 'Spring', 3),
(10017, 1, 'Spring', 3),
(10018, 1, 'Spring', 3),
(10019, 1, 'Spring', 3),
(5, 1, 'Spring', 3);

-- Year 4
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(3, 1, 'Fall', 4),
(3, 1, 'Fall', 4),
(3, 1, 'Fall', 4),
(5, 1, 'Fall', 4),
(5, 1, 'Fall', 4);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(10021, 1, 'Spring', 4),
(3, 1, 'Spring', 4),
(3, 1, 'Spring', 4),
(4, 1, 'Spring', 4),
(5, 1, 'Spring', 4);


-- Insert into CourseCatalog Computer Science Track 2
-- Year 1
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(10001, 3, 'Fall', 1),
(34181, 3, 'Fall', 1),
(31812, 3, 'Fall', 1),
(10003, 3, 'Fall', 1),
(1, 3, 'Fall', 1);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES
(10005, 3, 'Spring', 1),
(10006, 3, 'Spring', 1),
(1, 3, 'Spring', 1),
(1, 3, 'Spring', 1),
(1, 3, 'Spring', 1);

-- Year 2
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(10008, 3, 'Fall', 2),
(10009, 3, 'Fall', 2),
(32171, 3, 'Fall', 2),
(1, 3, 'Fall', 2),
(1, 3, 'Fall', 2);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(10012, 3, 'Spring', 2),
(10013, 3, 'Spring', 2),
(1, 3, 'Spring', 2),
(1, 3, 'Spring', 2),
(1, 3, 'Spring', 2);

-- Year 3
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(10014, 3, 'Fall', 3),
(10015, 3, 'Fall', 3),
(1, 3, 'Fall', 3),
(4, 3, 'Fall', 3),
(4, 3, 'Fall', 3);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(10016, 3, 'Spring', 3),
(10017, 3, 'Spring', 3),
(10018, 3, 'Spring', 3),
(10019, 3, 'Spring', 3),
(1, 3, 'Spring', 3);

-- Year 4
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(4, 3, 'Fall', 4),
(4, 3, 'Fall', 4),
(4, 3, 'Fall', 4),
(1, 3, 'Fall', 4),
(1, 3, 'Fall', 4);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(10021, 3, 'Spring', 4),
(4, 3, 'Spring', 4),
(4, 3, 'Spring', 4),
(5, 3, 'Spring', 4),
(5, 3, 'Spring', 4);


-- Insert Bio courses into CourseCatalog
  -- Year 1
    -- Fall
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(11001, 2, 'Fall', 1),
(11002, 2, 'Fall', 1),
(11003, 2, 'Fall', 1),
(11004, 2, 'Fall', 1),
(11005, 2, 'Fall', 1),
(1, 2, 'Fall', 1),
(1, 2, 'Fall', 1);


    -- Spring
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(11006, 2, 'Spring', 1),
(11007, 2, 'Spring', 1),
(11008, 2, 'Spring', 1),
(11009, 2, 'Spring', 1),
(11010, 2, 'Spring', 1),
(1, 2, 'Spring', 1); 

  -- Year 2
   -- Fall
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(11011, 2, 'Fall', 2),
(11012, 2, 'Fall', 2),
(11013, 2, 'Fall', 2),
(11014, 2, 'Fall', 2),
(1, 2, 'Fall', 2),
(5, 2, 'Fall', 2);

    -- Spring
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(11015, 2, 'Spring', 2),
(11016, 2, 'Spring', 2),
(11017, 2, 'Spring', 2),
(11018, 2, 'Spring', 2),
(1, 2, 'Spring', 2),
(5, 2, 'Spring', 2),
(5, 2, 'Spring', 2);


-- Year 3 
   -- Fall
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(11019, 2, 'Fall', 3),
(11020, 2, 'Fall', 3),
(11021, 2, 'Fall', 3),
(11022, 2, 'Fall', 3),
(11023, 2, 'Fall', 3),
(11024, 2, 'Fall', 3),
(1, 2, 'Fall', 3);

    -- Spring
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(11025, 2, 'Spring', 3),
(11026, 2, 'Spring', 3),
(1, 2, 'Spring', 3),
(6, 2, 'Spring', 3),
(5, 2, 'Spring', 3),
(5, 2, 'Spring', 3);


-- Year 4 
   -- Fall
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(7, 2, 'Fall', 4),
(6, 2, 'Fall', 4),
(6, 2, 'Fall', 4),
(5, 2, 'Fall', 4),
(5, 2, 'Fall', 4),
(5, 2, 'Fall', 4);


    -- Spring
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(7, 2, 'Spring', 4),
(6, 2, 'Spring', 4),
(5, 2, 'Spring', 4),
(5, 2, 'Spring', 4),
(5, 2, 'Spring', 4); 
