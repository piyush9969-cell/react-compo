import {React, useEffect, useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import students from "../data/students.json"
import axios from 'axios'
import { set } from 'react-hook-form';


export default function StudentGallery() {


    return (
    <>

        <div style={{flex:1, flexWrap:"wrap",display:"flex", justifyContent:"center",gap:"20px",padding:"30px",flexDirection:'row'}}>
           
            {students.map((student) => (
                    <Link to={`${student.id}`} style={{textDecoration:"none"}} key={student}>
                <div style={{display:'flex', flexDirection:"column", alignItems:"center",borderRadius:"10px", backgroundClip:"#fff",cursor:"pointer",width:"150px"}}>
                    <img src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${student._name}`}
                    alt={student._name}
                    style={{width:"100px",borderRadius:"8px"}} />
                    <p style={{color:"black"}}>{student._name}</p>
                </div>
                    </Link>
            ))}
        </div>
        <div style={{position:"sticky",bottom:"0",backgroundColor: "rgba(255, 255, 255, 1)"}}>
            <Outlet/>
        </div>
        </>
    )
}