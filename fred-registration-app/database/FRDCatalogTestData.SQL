---------------- Catalog Data ---------------- 
-- Insert into Catalog
INSERT INTO Catalog (TermID, ProgramID) VALUES (1, 1);

-- Insert into CourseCatalog (Example Catalog for a Computer Science Degree)
-- Year 1
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(1, 1, 'Fall', 1),
(2, 1, 'Fall', 1),
(3, 1, 'Fall', 1),
(22, 1, 'Fall', 1),
(22, 1, 'Fall', 1);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES
(5, 1, 'Spring', 1),
(6, 1, 'Spring', 1),
(22, 1, 'Spring', 1),
(22, 1, 'Spring', 1),
(22, 1, 'Spring', 1);

-- Year 2
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(8, 1, 'Fall', 2),
(9, 1, 'Fall', 2),
(10, 1, 'Fall', 2),
(22, 1, 'Fall', 2),
(22, 1, 'Fall', 2);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(12, 1, 'Spring', 2),
(13, 1, 'Spring', 2),
(22, 1, 'Spring', 2),
(22, 1, 'Spring', 2),
(23, 1, 'Spring', 2);

-- Year 3
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(14, 1, 'Fall', 3),
(15, 1, 'Fall', 3),
(23, 1, 'Fall', 3),
(25, 1, 'Fall', 3),
(25, 1, 'Fall', 3);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(16, 1, 'Spring', 3),
(17, 1, 'Spring', 3),
(18, 1, 'Spring', 3),
(19, 1, 'Spring', 3),
(26, 1, 'Spring', 3);

-- Year 4
INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(24, 1, 'Fall', 4),
(24, 1, 'Fall', 4),
(24, 1, 'Fall', 4),
(26, 1, 'Fall', 4),
(26, 1, 'Fall', 4);

INSERT INTO CourseCatalog (CRN, CatalogID, RecommendedSemester, RecommendedYear) VALUES 
(21, 1, 'Spring', 4),
(24, 1, 'Spring', 4),
(24, 1, 'Spring', 4),
(25, 1, 'Spring', 4),
(26, 1, 'Spring', 4);


---------------- Student Data ---------------- 

-- Insert into StudentRegistrations
-- Year1
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(03702574, 1, 8, 'Letter', 'Completed', 'A', '2023-08-15'),
(03702574, 2, 8, 'Letter', 'Completed', 'B', '2023-08-15'),
(03702574, 3, 8, 'Letter', 'Failed', 'F', '2023-08-15'),
(03702574, 33769, 8, 'Letter', 'Completed', 'A', '2023-08-15'), 
(03702574, 33992, 8, 'Letter', 'Completed', 'A', '2023-08-15'); 

INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(03702574, 5, 9, 'Letter', 'Completed', 'A', '2024-01-20'),
(03702574, 6, 9, 'Letter', 'Completed', 'B', '2024-01-20'),
(03702574, 33992, 8, 'Letter', 'Completed', 'A', '2023-08-15'),
(03702574, 30376, 8, 'Letter', 'Completed', 'B', '2023-08-15'), 
(03702574, 14341, 8, 'Letter', 'Completed', 'A', '2023-08-15'); 

--Retaking failed class from first semester
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(03702574, 3, 9, 'Letter', 'Completed', 'A', '2024-01-20');

-- Year 2
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(03702574, 8, 11, 'Letter', 'Completed', 'B', '2024-08-15'),
(03702574, 9, 11, 'Letter', 'Completed', 'A', '2024-08-15'),
(03702574, 10, 11, 'Letter', 'Completed', 'C', '2024-08-15');

INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(03702574, 12, 12, 'Letter', 'Completed', 'B', '2025-01-20'),
(03702574, 13, 12, 'Letter', 'Completed', 'C', '2025-01-20');

-- Year 3
INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(03702574, 14, 14, 'Letter', 'Completed', 'A', '2025-08-15'),
(03702574, 15, 14, 'Letter', 'Completed', 'A', '2025-08-15');

INSERT INTO StudentRegistration (StudentID, CRN, TermID, GradeMode, Status, Grade, RegisteredOn) VALUES 
(03702574, 16, 15, 'Letter', 'Enrolled', NULL, '2026-01-20'),
(03702574, 17, 15, 'Letter', 'Enrolled', NULL, '2026-01-20'),
(03702574, 18, 15, 'Letter', 'Enrolled', NULL, '2026-01-20'),
(03702574, 19, 15, 'Letter', 'Enrolled', NULL, '2026-01-20'); 
