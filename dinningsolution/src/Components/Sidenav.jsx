import React,{useState,useEffect} from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import "./Styles.css"
import {spiral} from "../SVG's/svg"



function Sidenav() {
  const iconStyle = {
    color: "white",
    width: "25px",
    height: "25px",
    alignItems: "center",
    padding:"5px",
    filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.4))"
  };

  const [navbarLogo, setNavbarLogo] = useState("#61524f")
  
  const [scrolled, setScrolled] = useState(0)

  //navbar scroll changeBackground function
  //logo scroll function

  const changeLogo = () => {
   
    if (window.scrollY >= 400) {
      setNavbarLogo("white")
    } else {
      setNavbarLogo("#61524f")
    }
  }

  useEffect(() => {
    // changeLogo()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeLogo)

  })


  return (
    <div className="sidenav">
        {spiral}
      <InstagramIcon style={{...iconStyle,color:navbarLogo}} />
      <FacebookIcon style={{...iconStyle,color:navbarLogo}} />
      <ShareLocationIcon style={{...iconStyle,color:navbarLogo}} />
      {spiral}
    </div>
  );
}


export default Sidenav