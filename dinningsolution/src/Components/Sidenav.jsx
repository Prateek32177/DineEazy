import React,{useState,useEffect} from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import "./Styles.css"
import {spiral} from "../SVG's/svg"

const iconStyle = {
    color: "white",
    width: "25px",
    height: "25px",
    alignItems: "center",
    padding:"5px",
    filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.4))"
  };


function Sidenav() {
  
  const [navbarLogo, setNavbarLogo] = useState("white")
  
  const changeLogo = () => {
   
    if (window.scrollY >= 400) {
      setNavbarLogo("white")
    } else {
      setNavbarLogo("white")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeLogo)

  })


  return (
    <div className="sidenav">
        {spiral}
      <a ><InstagramIcon style={{...iconStyle,color:navbarLogo}} /></a>
      <a><FacebookIcon style={{...iconStyle,color:navbarLogo}} /></a>
      <a><ShareLocationIcon style={{...iconStyle,color:navbarLogo}} /></a>
      {spiral}
    </div>
  );
}


export default Sidenav