import React from "react"
import "../App.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import { footerIconStyle } from "./StyleObject/Styles";

export default function Footer(){

    return (
        <div className="Footer" style={{color:"white",marginTop:"5rem",marginBottom:"5rem",padding:"10px",fontSize:'smaller'}}>
            <hr style={{color:"rgba(0,0,0,0.1)",width:"70vw"}}/>
            <div  style={{display:"inline-flex",alignItems:"center"}} >
            <Link to={"/about"} onClick={()=>window.scrollTo({top:0,left:0,behavior:"smooth"})} name="About" style={{margin:'1rem',fontFamily: 'sans-serif',textDecoration:"none"}}> About </Link> &#x2022;
            <Link to={"/contact"} onClick={()=>window.scrollTo({top:0,left:0,behavior:"smooth"})} name="Contact" style={{margin:'1rem',fontFamily: 'sans-serif',textDecoration:"none"}}> Contact Us </Link> &#x2022;
            <Link  to={"/privacypolicy"} onClick={()=>window.scrollTo({top:0,left:0,behavior:"smooth"})} name="Privacy" style={{margin:'1rem',fontFamily: 'sans-serif',textDecoration:"none"}}> Privacy Policy</Link>
        </div>
        <br></br>
        <div style={{display:"inline-flex",alignItems:"end"}}>
      
            <p>Copyright &#169; 2023 Prateek Jain </p>
            <a  href="https://www.linkedin.com/in/prateek-jain-031106131/"><LinkedInIcon style={footerIconStyle}/></a>
        </div>
        <p>All Rights Reserved @ DineEazy</p>
        </div>
    )
}