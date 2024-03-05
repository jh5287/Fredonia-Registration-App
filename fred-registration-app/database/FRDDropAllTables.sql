USE [registration]

ALTER TABLE [dbo].[UserRole] DROP CONSTRAINT [FK_UserRole_User]

ALTER TABLE [dbo].[UserRole] DROP CONSTRAINT [FK_UserRole_Role]

ALTER TABLE [dbo].[StudentRegistration] DROP CONSTRAINT [FK_StudentReg_Term]

ALTER TABLE [dbo].[StudentRegistration] DROP CONSTRAINT [FK_StudentReg_StudentID]

ALTER TABLE [dbo].[StudentRegistration] DROP CONSTRAINT [FK_StudentReg_Course]

ALTER TABLE [dbo].[StudentDepartment] DROP CONSTRAINT [FK_StudentDept_Student]

ALTER TABLE [dbo].[StudentDepartment] DROP CONSTRAINT [FK_StudentDept_Department]

ALTER TABLE [dbo].[Student] DROP CONSTRAINT [FK_Student_User]

ALTER TABLE [dbo].[InstructorDepartment] DROP CONSTRAINT [FK_InstructorDept_Instructor]

ALTER TABLE [dbo].[InstructorDepartment] DROP CONSTRAINT [FK_InstructorDept_Department]

ALTER TABLE [dbo].[Instructor] DROP CONSTRAINT [FK_Instructor_User]

ALTER TABLE [dbo].[Instructor] DROP CONSTRAINT [FK_Instructor_Dept]

ALTER TABLE [dbo].[CourseRestriction] DROP CONSTRAINT [FK_CourseRest_Restriction]

ALTER TABLE [dbo].[CourseRestriction] DROP CONSTRAINT [FK_CourseRest_Course]

ALTER TABLE [dbo].[CoursePrerequisite] DROP CONSTRAINT [FK_Courseprereq_Course2]

ALTER TABLE [dbo].[CoursePrerequisite] DROP CONSTRAINT [FK_CoursePrereq_Course]

ALTER TABLE [dbo].[CourseFee] DROP CONSTRAINT [FK_CourseFee_Fee]

ALTER TABLE [dbo].[CourseFee] DROP CONSTRAINT [FK_CourseFee_Course]

ALTER TABLE [dbo].[CourseCorequisite] DROP CONSTRAINT [FK_CourseCoreq_Course2]

ALTER TABLE [dbo].[CourseCorequisite] DROP CONSTRAINT [FK_CourseCoreq_Course]

ALTER TABLE [dbo].[CourseCatalog] DROP CONSTRAINT [FK_CourseCatalog_Course]

ALTER TABLE [dbo].[CourseCatalog] DROP CONSTRAINT [FK_CourseCatalog_Catalog]

ALTER TABLE [dbo].[CourseAttribute] DROP CONSTRAINT [FK_CourseAtt_Course]

ALTER TABLE [dbo].[CourseAttribute] DROP CONSTRAINT [FK_CourseAtt_Attribute]

ALTER TABLE [dbo].[Course] DROP CONSTRAINT [FK_Course_Dept]

ALTER TABLE [dbo].[Catalog] DROP CONSTRAINT [FK_Catalog_Term]

ALTER TABLE [dbo].[Catalog] DROP CONSTRAINT [FK_Catalog_Program]

/****** Object:  Table [dbo].[UserRole]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[UserRole]') AND type in (N'U'))
DROP TABLE [dbo].[UserRole]

/****** Object:  Table [dbo].[User]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[User]') AND type in (N'U'))
DROP TABLE [dbo].[User]

/****** Object:  Table [dbo].[StudentDepartment]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[StudentDepartment]') AND type in (N'U'))
DROP TABLE [dbo].[StudentDepartment]

/****** Object:  Table [dbo].[Student]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Student]') AND type in (N'U'))
DROP TABLE [dbo].[Student]

/****** Object:  Table [dbo].[Role]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Role]') AND type in (N'U'))
DROP TABLE [dbo].[Role]

/****** Object:  Table [dbo].[Restriction]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Restriction]') AND type in (N'U'))
DROP TABLE [dbo].[Restriction]

/****** Object:  Table [dbo].[Program]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Program]') AND type in (N'U'))
DROP TABLE [dbo].[Program]

/****** Object:  Table [dbo].[InstructorDepartment]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[InstructorDepartment]') AND type in (N'U'))
DROP TABLE [dbo].[InstructorDepartment]

/****** Object:  Table [dbo].[Instructor]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Instructor]') AND type in (N'U'))
DROP TABLE [dbo].[Instructor]

/****** Object:  Table [dbo].[Fee]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Fee]') AND type in (N'U'))
DROP TABLE [dbo].[Fee]

/****** Object:  Table [dbo].[Department]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Department]') AND type in (N'U'))
DROP TABLE [dbo].[Department]

/****** Object:  Table [dbo].[CourseSchedule]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CourseSchedule]') AND type in (N'U'))
DROP TABLE [dbo].[CourseSchedule]

/****** Object:  Table [dbo].[CourseRestriction]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CourseRestriction]') AND type in (N'U'))
DROP TABLE [dbo].[CourseRestriction]

/****** Object:  Table [dbo].[CoursePrerequisite]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CoursePrerequisite]') AND type in (N'U'))
DROP TABLE [dbo].[CoursePrerequisite]

/****** Object:  Table [dbo].[CourseFee]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CourseFee]') AND type in (N'U'))
DROP TABLE [dbo].[CourseFee]

/****** Object:  Table [dbo].[CourseCorequisite]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CourseCorequisite]') AND type in (N'U'))
DROP TABLE [dbo].[CourseCorequisite]

/****** Object:  Table [dbo].[CourseCatalog]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CourseCatalog]') AND type in (N'U'))
DROP TABLE [dbo].[CourseCatalog]

/****** Object:  Table [dbo].[CourseAttribute]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CourseAttribute]') AND type in (N'U'))
DROP TABLE [dbo].[CourseAttribute]

/****** Object:  Table [dbo].[Catalog]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Catalog]') AND type in (N'U'))
DROP TABLE [dbo].[Catalog]

/****** Object:  Table [dbo].[Attribute]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Attribute]') AND type in (N'U'))
DROP TABLE [dbo].[Attribute]

/****** Object:  View [dbo].[StudentCGPA]    Script Date: 3/4/2024 8:00:40 PM ******/
DROP VIEW [dbo].[StudentCGPA]

/****** Object:  View [dbo].[StudentGPA]    Script Date: 3/4/2024 8:00:40 PM ******/
DROP VIEW [dbo].[StudentGPA]

/****** Object:  Table [dbo].[StudentRegistration]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[StudentRegistration]') AND type in (N'U'))
DROP TABLE [dbo].[StudentRegistration]

/****** Object:  Table [dbo].[Term]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Term]') AND type in (N'U'))
DROP TABLE [dbo].[Term]

/****** Object:  Table [dbo].[Course]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Course]') AND type in (N'U'))
DROP TABLE [dbo].[Course]

/****** Object:  Table [dbo].[GradePoints]    Script Date: 3/4/2024 8:00:40 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GradePoints]') AND type in (N'U'))
DROP TABLE [dbo].[GradePoints]
