import React,{useState,useEffect} from "react";
import IcecreamOutlinedIcon from '@mui/icons-material/IcecreamOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import "./Styles.css"
import {spiral} from "../SVG's/svg"
function Sidenav() {
  const iconStyle = {
    color: "white",
    width: "25px",
    height: "25px",
    alignItems: "center",
    padding:"5px",
  };

  const [navbarLogo, setNavbarLogo] = useState("#61524f")
  
  const [scrolled, setScrolled] = useState(0)

  //navbar scroll changeBackground function
  //logo scroll function
  function onScrollPage(){
    const winHeightPx =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;
const scrolledPercentage = `${scrolled / winHeightPx * 100}%`;

console.log(document.documentElement.scrollTop);

   setScrolled(document.documentElement.scrollTop)
if(scrolled >= 20){
var element =  document.getElementsByClassName('sidenav');
element.style.backgroundColor = '#FF00AA';
} else {
var element = document.getElementsByClassName('sidenav');
element.style.backgroundColor = 'black';
}
}
  const changeLogo = () => {
    console.log("Scroll y",window.scrollY)
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
    window.addEventListener("scroll", onScrollPage)
  })


  return (
    <div className="sidenav">
        {spiral}
      <IcecreamOutlinedIcon style={{...iconStyle,color:navbarLogo}} />
      <LunchDiningOutlinedIcon style={{...iconStyle,color:navbarLogo}} />
      <SoupKitchenOutlinedIcon style={{...iconStyle,color:navbarLogo}} />
      <FastfoodOutlinedIcon style={{...iconStyle,color:navbarLogo}} />
      <RestaurantMenuOutlinedIcon style={{...iconStyle,color:navbarLogo}} />
      {spiral}
    </div>
  );
}


export default Sidenav