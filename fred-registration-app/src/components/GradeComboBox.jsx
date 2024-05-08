const GradeComboBox = ({ handleGradeChange, index }) => {
    return (
        <select defaultValue={'DEFAULT'} className="select select-primary w-full" onChange={(e) => handleGradeChange(e, index)}>
            <option value="DEFAULT" >Select a grade</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="D-">D-</option>
            <option value="F">F</option>
            <option value="S">S</option>
            <option value="WC">WC</option>
        </select>
    );
};

export default GradeComboBox;