import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "../App.css";
import { db } from "../Services/Firebase/FirebaseConfig";
import { curve } from "../SVG's/svg";
import { Navigate } from "react-router-dom";
import svg from "../SVG's/Dine.svg";
import {addToFirebase} from "../ReduxStateManagement/MenuSlice.js"

const iconStyle = {
  color: "grey",
  width: "25px",
  height: "25px",
  alignItems: "center",
  padding: "10px",
};


function HeaderName() {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    addToFirebase()
    setMenu(true);
  };
  return (
    // <div style={{ backgroundColor: "#CAB6AF", height: "100vh" }}>

    <div>
      {menu && <Navigate to="/Menu" replace={true} />}

      <div className="HeroImage">
        <div
          className="HerHeading"
          style={{
            textAlign: "left",
            padding: "30px 50px",
            marginTop:"7rem"
          }}
        >
          {curve}
          <div>
            <h4>Welcome to the</h4>
            <h1> Hard Rock Cafe and Restaurant</h1>
          </div>
          {curve}
          <img src={svg} alt="HeroImage"></img>
        </div>
      </div>
      <button
        className="sidenavButton"
        onClick={handleMenu}
      >
        Menu
      </button>
    </div>
  );
}

export default HeaderName;
