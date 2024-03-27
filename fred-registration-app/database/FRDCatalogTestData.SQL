---------------- Catalog Data ---------------- 
-- Insert into Catalog
INSERT INTO Catalog (TermID, ProgramID) VALUES (1, 1);

-- Insert into CourseCatalog (Example Catalog for a Computer Science Degree)
-- Year 1
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (1, 1, 'Fall', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (2, 1, 'Fall', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (3, 1, 'Fall', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (22, 1, 'Fall', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (22, 1, 'Fall', 1);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (5, 1, 'Spring', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (6, 1, 'Spring', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (22, 1, 'Spring', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (22, 1, 'Spring', 1);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (22, 1, 'Spring', 1);

-- Year 2
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (8, 1, 'Fall', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (9, 1, 'Fall', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (10, 1, 'Fall', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (22, 1, 'Fall', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (22, 1, 'Fall', 2);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (12, 1, 'Spring', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (13, 1, 'Spring', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (22, 1, 'Spring', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (22, 1, 'Spring', 2);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (23, 1, 'Spring', 2);

-- Year 3
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (14, 1, 'Fall', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (15, 1, 'Fall', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (23, 1, 'Fall', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (25, 1, 'Fall', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (25, 1, 'Fall', 3);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (16, 1, 'Spring', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (17, 1, 'Spring', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (18, 1, 'Spring', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (19, 1, 'Spring', 3);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (26, 1, 'Spring', 3);

-- Year 4
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (24, 1, 'Fall', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (24, 1, 'Fall', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (24, 1, 'Fall', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (26, 1, 'Fall', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (26, 1, 'Fall', 4);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (21, 1, 'Spring', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (24, 1, 'Spring', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (24, 1, 'Spring', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (25, 1, 'Spring', 4);
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES (26, 1, 'Spring', 4);


---------------- Student Data ---------------- 

-- Insert into StudentRegistrations
-- Year1
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(3, 1, 8, 'Letter', 'Completed', 'A', '2023-08-15'),
(3, 2, 8, 'Letter', 'Completed', 'B', '2023-08-15'),
(3, 3, 8, 'Letter', 'Failed', 'F', '2023-08-15'); 
(3, 33769, 8, 'Letter', 'Completed', 'A', '2023-08-15'); 
(3, 33992, 8, 'Letter', 'Completed', 'A', '2023-08-15'); 

INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(3, 5, 9, 'Letter', 'Completed', 'A', '2024-01-20'),
(3, 6, 9, 'Letter', 'Completed', 'B', '2024-01-20'),

--Retaking failed class from first semester
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(3, 3, 9, 'Letter', 'Completed', 'A', '2024-01-20');

-- Year 2
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(3, 8, 11, 'Letter', 'Completed', 'B', '2024-08-15'),
(3, 9, 11, 'Letter', 'Completed', 'A', '2024-08-15'),
(3, 10, 11, 'Letter', 'Completed', 'C', '2024-08-15');

INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(3, 12, 12, 'Letter', 'Completed', 'B', '2025-01-20'),
(3, 13, 12, 'Letter', 'Completed', 'C', '2025-01-20');

-- Year 3
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(3, 14, 14, 'Letter', 'Completed', 'A', '2025-08-15'),
(3, 15, 14, 'Letter', 'Completed', 'A', '2025-08-15');

INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(3, 16, 15, 'Letter', 'Enrolled', NULL, '2026-01-20'),
(3, 17, 15, 'Letter', 'Enrolled', NULL, '2026-01-20'),
(3, 18, 15, 'Letter', 'Enrolled', NULL, '2026-01-20'),
(3, 19, 15, 'Letter', 'Enrolled', NULL, '2026-01-20'); 
