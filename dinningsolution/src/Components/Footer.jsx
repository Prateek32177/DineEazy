import React from "react"
import "../App.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const iconStyle = {
    width: "25px",
    height: "25px",
    marginLeft:"5px"
  };

  
export default function Footer(){

    return (
        <div className="Footer" style={{color:"white",marginTop:"5rem",marginBottom:"5rem",padding:"10px",fontSize:'smaller'}}>
            <hr style={{color:"rgba(0,0,0,0.1)",width:"70vw"}}/>
            <div  style={{display:"inline-flex",alignItems:"center"}} >
            <p style={{margin:'1rem',fontFamily: 'sans-serif'}}> About </p> &#x2022;
            <p style={{margin:'1rem',fontFamily: 'sans-serif'}}> Contact Us </p> &#x2022;
            <p style={{margin:'1rem',fontFamily: 'sans-serif'}}> Privacy policy</p>
        </div>
        <br></br>
        <div style={{display:"inline-flex",alignItems:"end"}}>
      
            <p>Copyright &#169; 2023 Prateek Jain </p>
            <a  href="https://www.linkedin.com/in/prateek-jain-031106131/"><LinkedInIcon style={iconStyle}/></a>
        </div>
        <p>All Rights Reserved @ DineEazy</p>
        </div>
    )
}