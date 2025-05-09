import { useState } from 'react';
import { useParams } from 'react-router-dom';
import students from "../data/students.json";


const Student = () => {
   
 const {studentId} = useParams();

 const student = students.find((s) => s.id.toString() === studentId)

    return (
        <div style={{flexGrow:1, padding: '20px', margin: 'auto',overflow:"auto" }}>
           <div style={{ display: "flex", gap: "10px" }}>
                <p><strong>First Name:</strong> {student._name}</p>
                <p><strong>Roll Number:</strong> {student.rollNo}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center",flexDirection:"column" }}>
                <p><strong>Marks:</strong> {student.marks}</p>
            </div>
        </div>
    );
}

export default Student;
