import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import "../App.css";
import { db } from "../Services/Firebase/FirebaseConfig";
import { curve, curveOrange } from "../SVG's/svg";
import svg from "../SVG's/Dine.svg";
import svg2 from "../SVG's/Dine2.svg";
import { useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import NavigateButton from "./CommonComponent/NavigateButton";
import { headerSmallChipStyle,headerchipStyle } from "./StyleObject/Styles";
import readfirebase from "../Services/Utility/reduxstates";


const restaurantType = [false,false,false]
//index  0 for veg restaurant
// index 1 for non veg restaurant
// index 2 for veg & non-veg restaurant

const cuisineList = ["Medeterrerian Cuisine", "Italian Cuisine"];

function HeaderName() {
  const toggled = useSelector((state) => state.Counter.themeToggle);

  const [details, setDetails] = useState({});

  useEffect(() => {
    readfirebase()
      .then((data) => setDetails(data))
      .catch(() => setDetails({ ...details, name: "Hard Rock cafe. India" }));
  },[]);


  const [heroImageShadow, setHeroImageShadow] = useState(" ");
  const shadow = toggled ? "#FF5F00" : "#7C40FF";
  const changeLogo = () => {
    if (window.scrollY >= 25 && window.scrollY < 65) {
      setHeroImageShadow(
        `${shadow} 0px 2px 4px 0px, ${shadow} 0px 2px 16px 0px`
      );
    } else if (window.scrollY >= 65 && window.scrollY < 105) {
      setHeroImageShadow(
        `${shadow} 0px 2px 4px 0px, ${shadow} 0px 2px 16px 0px`
      );
    } else if (window.scrollY >= 105 && window.scrollY < 245) {
      setHeroImageShadow(
        `${shadow} 0px 2px 4px 0px, ${shadow} 0px 2px 16px 0px`
      );
    } else {
      setHeroImageShadow("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeLogo);
  });

  return (

    <div>

      <div className="HeroImage">
        <div
          className="HerHeading"
          style={{
            textAlign: "left",
            padding: "30px 50px",
            marginTop: "7rem",
          }}
        >
          {toggled ? curveOrange : curve}
          <div
            style={{ wordBreak: "normal", hyphens: "auto", marginTop: "2rem" }}
          >
            <h4>Welcome to the</h4>
            <h3> {details.name}</h3>
            <div>
              {cuisineList.map((cuisine) => (
                <Chip
                  style={headerchipStyle}
                  label={cuisine}
                  variant="outlined"
                  color="primary"
                />
              ))}
            </div>
            <div style={{ margin: "10px 0" }}>
           { (restaurantType[0]||restaurantType[2])&&<Chip
                style={headerSmallChipStyle}
                label="Veg"
                variant="filled"
                color="success"
              />}
              {(restaurantType[1]||restaurantType[2])&&<Chip
                style={headerSmallChipStyle}
                label="Non-Veg"
                variant="filled"
                color="error"
              />}
            </div>
          </div>
          {toggled ? curveOrange : curve}
          <img
            style={{ boxShadow: heroImageShadow }}
            src={toggled ? svg2 : svg}
            alt="HeroImage"
          ></img>
        </div>
      </div>
      <NavigateButton buttonName={"Menu"} path={"/Menu"}/>
    </div>
  );
}

export default HeaderName;
