import React,{useEffect,useState} from "react"
import Logo from "./Logo"
import Sidenav from "./Sidenav"
import HeaderName from "./HeaderName"
import Footer from "./Footer"
import MenuIcon from '@mui/icons-material/Menu';

const iconStyle = {
    color: "white",
    width: "35px",
    height: "35px",
    alignItems: "center",
    padding:"15px",
    filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.4))",
    cursor:'pointer'
  };

export default function HomePage(){

    const [navbarShadow, setNavbarShadow] = useState("")
  
    const changeLogo = () => {
     
      if (window.scrollY >= 20) {
        setNavbarShadow("rgba(0, 0, 0, 0.45) 0px 25px 20px -20px")
      } else {
        setNavbarShadow("")
      }
    }
  
    useEffect(() => {
      window.addEventListener("scroll", changeLogo)
  
    })
    return (
        <>
        <div style={{position:"fixed",width:"100%",zIndex:3,backgroundColor:"#1E2026",top:0,display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:navbarShadow }}>
        <Logo/>
        <MenuIcon style={iconStyle}/>
        </div>
       
        <Sidenav/>
        <HeaderName/>
        <Footer/>
        </>
    )
}