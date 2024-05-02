function isValidArray(array) {
  return Array.isArray(array) && array.length > 0;
}

function isValidCatalog(catalogEntry) {
  return (
    catalogEntry &&
    catalogEntry.catalogID !== undefined &&
    catalogEntry.programName !== undefined
  );
}

function isValidUserCatalogs(userCatalogs) {
  return isValidArray(userCatalogs) && userCatalogs.every(isValidCatalog);
}

//---------------------------------------------------

function isValidCourse(course){
  return (
    course &&
    course.Course !== undefined &&
    course.Grade !== undefined &&
    course.Term!== undefined &&
    course.Status !== undefined
  )
}

function isValidCourses(studentCourses){
  return isValidArray(studentCourses) && studentCourses.every(isValidCourse);
}

module.exports = {isValidUserCatalogs, isValidCourses}