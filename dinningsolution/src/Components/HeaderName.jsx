import React, { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import "../App.css";
import { db } from "../Services/Firebase/FirebaseConfig";
import { curve, curveOrange } from "../SVG's/svg";
import { Navigate } from "react-router-dom";
import svg from "../SVG's/Dine.svg";
import svg2 from "../SVG's/Dine2.svg";
import { setMenuList, setTabDescp } from "../ReduxStateManagement/MenuSlice";
import { useDispatch, useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import { pureVeg, nonVeg, drinks } from "../SVG's/svg";
import { useCallback } from "react";

const iconStyle = {
  color: "grey",
  width: "25px",
  height: "25px",
  alignItems: "center",
  padding: "10px",
};

const chipStyle = {
  color: "white",
  border: "1px solid white",
  borderRadius: "5px",
  margin: "0.5rem",
  fontSize: "1.3rem",
};

const restaurantType = [false,false,false]
//index  0 for veg restaurant
// index 1 for non veg restaurant
// index 2 for veg & non-veg restaurant

const cuisineList = ["Medeterrerian Cuisine", "Italian Cuisine"];

function HeaderName() {
  const toggled = useSelector((state) => state.Counter.themeToggle);

  const [details, setDetails] = useState({});
  const dispatch = useDispatch();

  const docRef = doc(db, "Restaurants", "Hard Rock Cafe");

async function readfirebase() {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      // setDetails(docSnap.data())
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    readfirebase()
      .then((data) => setDetails(data))
      .catch(() => setDetails({ ...details, name: "Hard Rock cafe. India" }));
  },[]);

  // useEffect(()=>{
  //   dispatch(setMenuList(details.menu))
  //   dispatch(setTabDescp(details.menuCategories))

  //     },[details])
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

  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
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
                  style={chipStyle}
                  label={cuisine}
                  variant="outlined"
                  color="primary"
                />
              ))}
            </div>
            <div style={{ margin: "10px 0" }}>
           { (restaurantType[0]||restaurantType[2])&&<Chip
                style={{ fontSize: "1rem", margin: "0.5rem" }}
                label="Veg"
                variant="filled"
                color="success"
              />}
              {(restaurantType[1]||restaurantType[2])&&<Chip
                style={{ fontSize: "1rem", margin: "0.5rem" }}
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
      <button
        className={
          toggled
            ? "sidenavButton sidenavButtonOrange"
            : "sidenavButton sidenavButtonViolet"
        }
        onClick={handleMenu}
      >
        Menu
      </button>
    </div>
  );
}

export default HeaderName;
