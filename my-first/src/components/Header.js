import {Component} from 'react';


class Header extends Component {
 render(){
    return(
        <div style={{position:'sticky',backgroundColor:"#f1f1f1",padding:'10px',zIndex:10}}>
            <h2>Header Component</h2>
            <p>Welcome, Piyush here</p>
        </div>
    )
 }
}

export default Header;
