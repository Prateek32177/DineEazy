import React from "react"
import { logo } from "../SVG's/svg";

function Logo(){


    return(
        <div className="topNavLogo" style={{ display: "flex",padding:"2rem 2rem",    alignItems: "center" }}>
        <div style={{  }}>{logo}</div>

        <div style={{ }}>
          <h2 style={{fontSize:"2rem",fontWeight:"bold",    letterSpacing:"4px",marginLeft: "5px",marginBottom:'0px'}}>DineEazy</h2>
        </div>
      </div>
    )


}


export default Logo