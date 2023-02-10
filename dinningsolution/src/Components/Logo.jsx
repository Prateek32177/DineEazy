import React from "react";
import { logo, logoOrange } from "../SVG's/svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Logo() {
  const toggled = useSelector((state) => state.Counter.themeToggle);
  const Navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => Navigate("/")}
        className="topNavLogo"
        style={{ display: "flex", padding: "2rem 2rem", alignItems: "center" }}
      >
        <div>{toggled ? logoOrange : logo}</div>

        <div>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "white",
              letterSpacing: "4px",
              marginLeft: "5px",
              marginBottom: "0px",
            }}
          >
            DineEazy.
          </h2>
        </div>
      </div>
    </>
  );
}

export default Logo;
