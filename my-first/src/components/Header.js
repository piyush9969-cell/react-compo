import {Component} from 'react';


class Header extends Component {
 render(){
    return(
        <div style={{position:'sticky',backgroundColor:"#f1f1f1",padding:'10px', alignItems:"center",flexDirection:"column",display:'flex'}}>
            <h2>Student Profile</h2>
            <p>Welcome Back!</p>
        </div>
    )
 }
}

export default Header;
