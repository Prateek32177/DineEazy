import React,{useState,useEffect} from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import { db } from "../Services/Firebase/FirebaseConfig";
import "./Styles.css"
import {  doc, getDoc } from "firebase/firestore";
import {spiral} from "../SVG's/svg"
 import { useSelector,useDispatch } from "react-redux";
const iconStyle = {
    color: "white",
    width: "25px",
    height: "25px",
    alignItems: "center",
    padding:"5px",
    filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.4))"
  };


function Sidenav() {
  const [details,setDetails]=useState({})
  const dispatch = useDispatch()

const docRef = doc(db, "Restaurants", "Hard Rock Cafe");

async function readfirebase(){  
const docSnap =  await getDoc(docRef);
if (docSnap.exists()) {
  // console.log("Document data:", docSnap.data());
  // setDetails(docSnap.data())
  return docSnap.data()

} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
}

  useEffect(()=>{
readfirebase().then((data)=>setDetails(data));

  },[])
  console.log("details",details)

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
      <a href={details.instagramLink} ><InstagramIcon style={{...iconStyle,color:navbarLogo}} /></a>
      <a href={details.instagramLink}><FacebookIcon style={{...iconStyle,color:navbarLogo}} /></a>
      <a href={details.googleMapLocation}><ShareLocationIcon style={{...iconStyle,color:navbarLogo}} /></a>
      {spiral}
    </div>
  );
}


export default Sidenav