import { useState } from 'react';


const Content = (props) => {
    const [marks, setMarks] = useState(0);
console.log(marks)
    const increaseMarks = () => {
        if (marks >= 100) {
            alert("Student marks cannot be more than 100")
        } else {
            setMarks(prev => prev + 5)
        }
    }

    return (
        <div style={{flexGrow:1, padding: '20px', margin: 'auto',overflow:"auto" }}>
            <div style={{ display: "flex", gap: "10px" }}>
                <p><strong>First Name:</strong> {props.firstName}</p>
                <p><strong>Roll Number:</strong> {props.rollNumber}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center",flexDirection:"column" }}>
                <p><strong>Marks:</strong> {marks}</p>
                <button onClick={increaseMarks}>Increase Marks</button>
            </div>
        </div>
    );
}

export default Content;
