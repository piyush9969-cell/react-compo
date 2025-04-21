import {Component} from 'react';


class Footer extends Component{
 render(){
    return(
        <div style={{position:"sticky",backgroundColor:"#f1f1f1",padding:'10px',zIndex:10}}>
            <h2>Footer Component</h2>
            <p>Links and Citations exists here</p>
        </div>
    )
 }
}

export default Footer;
