import {React} from 'react'
import { Link } from 'react-router-dom'
import students from "../data/students.json"


export default function StudentGallery() {
    return (
        <div style={{flex:1, flexWrap:"wrap",display:"flex", justifyContent:"center",gap:"20px",padding:"30px",flexDirection:'row'}}>
            {students.map((student) => (
                    <Link to={`/student/${student.id}`} style={{textDecoration:"none"}}>
                <div key={student.id} style={{display:'flex', flexDirection:"column", alignItems:"center",borderRadius:"10px", backgroundClip:"#fff",cursor:"pointer",width:"150px"}}>
                    <img src="https://th.bing.com/th/id/OIP.PnA78VPdcpzB-eu8gNPy7wHaJt?cb=iwc1&rs=1&pid=ImgDetMain"
                    alt={student._name}
                    style={{width:"100px",borderRadius:"8px"}} />
                    <p style={{color:"black"}}>{student._name}</p>
                </div>
                    </Link>
            ))}
        </div>
    )
}