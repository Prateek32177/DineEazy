import React from "react"
import "../App.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const iconStyle = {
    width: "25px",
    height: "25px",
  };

  
export default function Footer(){

    return (
        <div className="Footer" style={{color:"white",marginTop:"15rem",marginBottom:"5rem",padding:"10px"}}>
            <hr style={{color:"rgba(0,0,0,0.1)",width:"70vw"}}/>
        <p>Copyright &#169; 2023 Prateek Jain <a  href="https://www.linkedin.com/in/prateek-jain-031106131/"><LinkedInIcon style={iconStyle}/></a></p>
        <p>All Rights Reserved @ DineEazy</p>
        </div>
    )
}