import React from "react"
import { logo,logoOrange } from "../SVG's/svg";
import { useSelector } from "react-redux";
function Logo(){
  const toggled = useSelector((state)=>state.Counter.themeToggle)

    return(
        <div className="topNavLogo" style={{ display: "flex",padding:"2rem 2rem",    alignItems: "center" }}>
        <div style={{  }}>{toggled?logoOrange:logo}</div>

        <div style={{ }}>
          <h2 style={{fontSize:"2rem",fontWeight:"bold", color:"white",   letterSpacing:"4px",marginLeft: "5px",marginBottom:'0px'}}>DineEazy.</h2>
        </div>
      </div>
    )


}


export default Logo