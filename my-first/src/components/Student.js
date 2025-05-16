import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import {increaseMarks, decreaseMarks} from "../store/action/action"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


const Student = () => {
    const [upadatedStudent, setUpdatedStudent] = useState({});
    const students = useSelector((state) => state.studentReducer.students);
    const dispatch = useDispatch();

   
 const {studentId} = useParams();
 
 useEffect(() => {
    const student = students.find((s) => s.id.toString() === studentId);

    if (!student) {
        console.error("Student not found for ID:", studentId);
        return;
    }else{
    setUpdatedStudent(student);
    }
   

    setUpdatedStudent(student);
 }, [students]);
useEffect(() => {
    const fetchQuote = async () => {
        try {
            const student = students.find((s) => s.id.toString() === studentId);

            if (!student) {
                console.error("Student not found for ID:", studentId);
                return;
            }

            const response = await axios.get("https://quoteslate.vercel.app/api/quotes/random?maxLength=70");

            console.log("API Response:", response.data);

            setUpdatedStudent({
                ...student,
                quote: response?.data.quote || "No quote available",
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchQuote();
}, [studentId]);

const handleIncreaseMarks = () => {
    try{
        dispatch(increaseMarks(upadatedStudent.id));
    }catch (error) {
        alert(error.message);
    }
}

const handleDecreaseMarks = () => {
    try{
        dispatch(decreaseMarks(upadatedStudent.id));
    }catch (error) {
        alert(error.message);
    }
}


return (
    <div style={{display:"flex",justifyContent:"space-between"}}>

        <div style={{ display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            
            padding: "10px",
            margin: "auto",
            overflow: "auto" }}>
           <div style={{ flex:1}}>
               
                <p><strong>Roll:</strong> {upadatedStudent.rollNo}</p>
                <p><strong>Marks:</strong> {upadatedStudent.marks}</p>
                              <div style={{ display: "flex", gap: "10px", marginTop: "8px", alignItems: "center" }}>
                    <button
                        onClick={handleDecreaseMarks}
                        style={{   padding: '5px 10px', backgroundColor: '#020202', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    >-</button>
                    <button
                        onClick={handleIncreaseMarks}
                         style={{   padding: '5px 10px', backgroundColor: '#020202', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    >+</button>
                </div>
            </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "auto", overflow: "auto",padding: "10px",
                    width: "30%", }}>
            <img src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${upadatedStudent._name}`} alt={upadatedStudent._name} style={{ width: "50px", borderRadius: "8px" }} />
             <span><strong>{upadatedStudent._name}</strong></span>
            <span style={{textAlign:"center"}}>{upadatedStudent.quote}</span>
    </div>
    </div>
    );
}

export default Student;
