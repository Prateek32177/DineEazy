import "./App.css";
import React,{useState} from "react";
import OrderConfirm from "./Components/OrderReceived.jsx";
import FullWidthTabs from "./Components/TabwithSwipws";
import HeaderName from "./Components/HeaderName";
import LabelBottomNavigation from "./Components/BottomNav";
import SwipeableEdgeDrawer from "./Components/Swipeabledrawer";
import { Routes, Route, Link } from "react-router-dom";
import {logo1} from "./SVG's/svg"
import Flip from "react-reveal/Flip";


function App() {
  const [rend, setRend] = useState("block");

  setTimeout(() => setRend("none"), 4000);
  return (
    <>
      <div className="App">
      <div id="overlay" style={{ display: `${rend}` }}>
          <div id="text">
            {" "}
            {logo1}
           {" "}
            <Flip duration={2000} top cascade>
              <h2
                id="h21"
                style={{
                  color: "#7C40FF",
                  letterSpacing: "3px",
                  fontWeight: "bolder",
                }}
              >

            DineEazy
              </h2>
              </Flip>
              <Flip duration={2000} top cascade>
            <h5
              id="h51"
              style={{ color: "#7C40FF", letterSpacing: "7px" }}
            >
             Experience The Fine Dinning
            </h5>
            </Flip>
          </div>
        </div>
        <Routes>
          <Route path="/orderConfirmed" element={<OrderConfirm />}></Route>
          <Route
            index
            path="/"
            element={
              <>
                <HeaderName />
              </>
            }
          ></Route>
          <Route
            path="/Menu"
            element={
              <>
               
                <SwipeableEdgeDrawer />
                <FullWidthTabs />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
