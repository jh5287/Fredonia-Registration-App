// Fetch catalog data
const fetchCatalogCourses = async (catalogID) => {
  try {
    const res = await fetch(`/api/catalog?catID=${catalogID}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch catalog:", err);
  }
};

const fetchStudentCatalogs = async (email) => {
  try{
    const res = await fetch(`/api/student/studentCatalog?email=${email}`);
    const data = res.json(); 
    return data; 
  }catch(error){
    console.log("Error fetching StudentCatalog data: ", error); 
  }
}

// Fetch user course data
const fetchUserCourses = async (email) => {
  try {
    const response = await fetch(
      `/api/student/studentCourses?email=${email}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
  }
};

// Fetch user CGPA data
const fetchUserCGPA = async (email) => {
  try {
    const response = await fetch(`/api/student/CGPA?email=${email}`);
    const data = await response.json();
    console.log("User CGPA data after fetch from backend: ", data); 
    if (Array.isArray(data) && data.length > 0 || data.CGPA) {

      const cgpa = parseFloat(userCGPAData.CGPA);

      if (!isNaN(cgpa)) {
        return cgpa;
      } else {
        console.log("CGPA is not a valid number.");
      }
    } else {
      console.log("No CGPA data found for the user.");
    }
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
  }
};


const fetchFoundationsCGPA = async () => {
  try {
    const userEmail = "wals9256@fredonia.edu";
    const response = await fetch(`/api/student/CGPA?email=${userEmail}`);
    const data = await response.json();
    console.log("User CGPA data after fetch from backend: ", data); 
    if (Array.isArray(data) && data.length > 0 || data.FoundationsCGPA) {

      // Try and convert CGPA to a number
      const cgpa = parseFloat(data.FoundationsCGPA);

      if (!isNaN(cgpa)) {
        // Check if conversion was successful
        return cgpa;
      } else {
        // Handle case where CGPA is not a valid number
        console.log("FoundationsCGPA is not a valid number.");
      }
    } else {
      console.log("No FoundationsCGPA data found for the user.");
    }
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
  }
}

// Fetch user course data
const fetchStudentInfo = async (email) => {
  try {
    const response = await fetch(`/api/student/studentInfo?email=${email}`);
    const data = await response.json();
    const studentInfo = Array.isArray(data) && data.length > 0 ? data[0] : null;
    return studentInfo;
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
  }
};

export {
  fetchCatalogCourses,
  fetchUserCourses,
  fetchUserCGPA,
  fetchFoundationsCGPA,
  fetchStudentInfo,
  fetchStudentCatalogs
};
