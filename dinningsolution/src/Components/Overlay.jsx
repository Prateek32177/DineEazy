import React,{useState,useEffect} from "react";
import Flip from "react-reveal/Flip";
import {logo1,logo1Orange} from  "../SVG's/svg";
import "../App.css"
import { useSelector } from "react-redux";

export default function Overlay() {

    const [rend, setRend] = useState("block");
    const toggled = useSelector((state)=>state.Counter.themeToggle)
    useEffect(()=>{
      setTimeout(() => setRend("none"), 4000);
    },[])

  return (
    <>
      <div id="overlay" style={{ display: `${rend}` }}>
        <div id="text">
          {toggled?logo1Orange:logo1}
          <Flip duration={2000} top cascade>
            <h2
              id="h21"
              style={{
                color: toggled?"#FF5F00":"#7C40FF",
                letterSpacing: "3px",
                fontWeight: "bolder",
              }}
            >
              DineEazy
            </h2>
          </Flip>
          <Flip duration={2000} top cascade>
            <h5 id="h51" style={{ color: toggled?"#FF5F00":"#7C40FF", letterSpacing: "7px" }}>
              Experience The Fine Dinning
            </h5>
          </Flip>
        </div>
      </div>
    </>
  );
}
