import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import students from "../data/students.json";
import axios from 'axios';


const Student = () => {
    const [upadatedStudent, setUpdatedStudent] = useState({});
   
 const {studentId} = useParams();
 
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
