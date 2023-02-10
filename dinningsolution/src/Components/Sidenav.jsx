import React,{useState,useEffect} from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import { db } from "../Services/Firebase/FirebaseConfig";
import "./Styles.css"
import {  doc, getDoc } from "firebase/firestore";
import {spiral} from "../SVG's/svg"
import { sideNavIconStyle } from "./StyleObject/Styles";
import readfirebase from "../Services/Utility/reduxstates";


function Sidenav() {
  const [details,setDetails]=useState({})

  useEffect(()=>{
readfirebase().then((data)=>setDetails(data));
  },[])

  return (
    <div className="sidenav">
        {spiral}
      <a href={details.instagramLink} ><InstagramIcon style={sideNavIconStyle} /></a>
      <a href={details.instagramLink}><FacebookIcon style={sideNavIconStyle} /></a>
      <a href={details.googleMapLocation}><ShareLocationIcon style={sideNavIconStyle} /></a>
      {spiral}
    </div>
  );
}

export default Sidenav