import {Component} from 'react';
import {Link} from "react-router-dom"

class Header extends Component {
 render(){
    return(
        <div style={{position:'relative',backgroundColor:"#1D1D1D",paddingBottom:'20px', alignItems:"center",flexDirection:"column",display:'flex'}}>
            <h2 style={{color:"white"}}>Student Profile</h2>
            <p style={{color:"white"}}>Welcome Back!</p>
        <nav style={{ backgroundColor:'#eee', paddingInline:'1rem',paddingBlock:'.5rem',borderRadius:20,flex:1}}>
            <Link to= "/" style={{padding:"1rem",textDecoration:"none", color:'#1D1D1D'}}>Home</Link>
             <Link to= "/student" style={{padding:"1rem", textDecoration:"none", color:'#1D1D1D'}}>Students</Link>
             <Link to= "/contact" style={{padding:"1rem", textDecoration:"none", color:'#1D1D1D'}}>Contact Us</Link>
        </nav>
        </div>
    )
 }
}

export default Header;
