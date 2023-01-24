import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "../App.css";
import { db } from "../Services/Firebase/FirebaseConfig";
import { curve, spiral, logo } from "../SVG's/svg";
import Sidenav from "./Sidenav";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Logo from "./Logo"
import Zoom from 'react-reveal/Zoom';
import { Navigate } from "react-router-dom";
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
  //  function addToFirebase(e){
  //     console.log("checking...")
  //     try {
  //         const docRef =  addDoc(collection(db, "testing1"), {
  //          restaurantName:input
  //         });

  //         console.log("Document written with ID: ", docRef.id);
  //       } catch (e) {
  //         console.error("Error adding document: ", e);
  //       }

  // }

  // useEffect(()=>{
  //   readfirebase();
  // },[input])
  // function handleChange(e){
  //     setInput(e.target.value)
  // }
  //  function readfirebase(){  console.log("hello");
  //   getDocs(collection(db, "testing1")).then((querySnapshot)=>
  //   querySnapshot.forEach((doc) => {
  //     setName(doc.data().restaurantName)
  //   console.log("hello",`${doc.id} => ${doc.data().restaurantName}`);
  // }))

  // }
  const [rend, setRend] = useState("block");
  const[menu,setMenu] = useState(false)
  setTimeout(() => setRend("none"), 4000);


  const handleMenu = ()=>{
    setMenu(true)
  }
  return (
    <div style={{backgroundColor:"#CAB6AF",height:"100vh"}}>
      <Sidenav />
      <Logo/>
      {menu&&<Navigate to="/Menu" replace={true}  />}
      <div className="backgroundImg">
      
        {curve}
        <Zoom left cascade duration={5000} delay={4000}>
        <h1
          style={{
            filter: "drop-shadow(2px 4px 6px grey)",
            padding: "30px",
            fontSize: "5rem",
          }}
        >
          {" "}
          Hard Rock Cafe and Restaurant
        </h1>
        </Zoom>
        {curve}
        <button
        onClick={handleMenu}
          style={{
            borderColor: " #D1D9E6 !important",
            margin: "20px 0px",
            fontSize: "1.5rem",
            boxShadow:
              "3px 3px 6px rgb(155 157 168), -3px -3px 6px rgb(218 218 218)",
          }}
        >
          Menu
        </button>
      </div>
    </div>
  );
}

export default HeaderName;
