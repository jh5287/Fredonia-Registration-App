const CourseComboBox = ({ data, currentCourse, courseStatus, handleCourseChange, index }) => {
    if(courseStatus?.Status === "Completed" || courseStatus?.Status === "Enrolled") {
        return (
            <select defaultValue={'DEFAULT'} className="select select-primary w-full" onChange={handleCourseChange} disabled>
                <option value="DEFAULT" disabled>{currentCourse}</option>
                {data.map((item, index) => (
                    <option key={index} value={item.Course.CourseCode}>{item.Course.Title}</option>
                ))}
            </select>
        );
    }
    else{
    return (
        <select defaultValue={'DEFAULT'} className="select select-primary w-full" onChange={(e) => handleCourseChange(e, index)}>
            <option value="DEFAULT" disabled>{currentCourse}</option>
            {data.map((item, index) => (
                <option key={index} value={item.Course.CourseCode}>{item.Course.Title}</option>
            ))}
        </select>
    );}
};

export default CourseComboBox;