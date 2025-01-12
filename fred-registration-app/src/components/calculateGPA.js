const calculateGPA = (data) => {
  try {
    let totalCredits = 0;
    let totalPoints = 0;
    
    data.forEach((item) => {
      const grade = item.modifiedGrade ? item.modifiedGrade : item.Grade;
      totalCredits += item.Course.Credits;
      switch (grade) {
        case 'A':
          totalPoints += 4 * item.Course.Credits;
          break;
        case 'A-':
          totalPoints += 3.7 * item.Course.Credits;
          break;
        case 'B+':
          totalPoints += 3.3 * item.Course.Credits;
          break;
        case 'B':
          totalPoints += 3 * item.Course.Credits;
          break;
        case 'B-':
          totalPoints += 2.7 * item.Course.Credits;
          break;
        case 'C+':
          totalPoints += 2.3 * item.Course.Credits;
          break;
        case 'C':
          totalPoints += 2 * item.Course.Credits;
          break;
        case 'C-':
          totalPoints += 1.7 * item.Course.Credits;
          break;
        case 'D+':
          totalPoints += 1.3 * item.Course.Credits;
          break;
        case 'D':
          totalPoints += 1 * item.Course.Credits;
          break;
        case 'D-':
          totalPoints += 0.7 * item.Course.Credits;
          break;
        case 'S':
          totalCredits -= item.Course.Credits;
          break;
        case 'WC':
          totalCredits -= item.Course.Credits;
          break;
        default:
          totalPoints += 0;
      }
    });
    return ((totalPoints / totalCredits).toFixed(2) !== "NaN" ? (totalPoints / totalCredits).toFixed(2) : null);
  }
  catch (error) {
    console.error("Failed to calculate GPA:", error);
    return null;
  }
};
export default calculateGPA;