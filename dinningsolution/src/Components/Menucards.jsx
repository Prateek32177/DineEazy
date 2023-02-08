import React from "react";
import QuantityCounter from "./Quantitybutton";
import { useSelector } from "react-redux";
import "../App.css";
import { pureVeg, nonVeg } from "../SVG's/svg";
import img3 from "../images/pizza.png";

const cardStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#1E2026",
  padding: "20px",
  borderRadius: "20px",
  margin: "20px 0px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
};

const imgStyle = { height: "60px", width: "60px", filter: "invert(100%)" };

function Menucards(props) {
  const { detail } = props;
  const toggled = useSelector((state) => state.Counter.themeToggle);

  return (
    <>
      <div className="dishCard" style={cardStyle}>
        <div className="dishImage">
          <img src={img3} style={imgStyle} alt="dishimage"></img>
        </div>

        <div style={{ marginLeft: "30px", textAlign: "left" }}>
          <div
            className="dishDescp"
            style={{ marginRight: "5px",display: "flex", alignItems: "center" }}
          >
              <p
                style={{
                  color: "white",
                  fontSize: "15px",
                  marginRight: "10px",
                }}
              >
                {detail.itemName}
              </p>
              <p>
                {detail &&
                  ((detail.type === 0 && pureVeg) ||
                    (detail.type === 1 && nonVeg))}
              </p>
          </div>
          <p
                style={{
                  color: "white",
                  fontSize: "10px",
                  marginRight: "10px",
                }}
              >
                {detail.itemName}
              </p>
          <div style={{ display: "flex",alignItems:"baseline",justifyContent:"space-between" }}>
            <span
              style={{
                borderRadius: "5px",
                padding: "2px 15px",
                color: "white",
                fontSize: "15px",
                backgroundColor: toggled ? "#FF5F00" : "#7C40FF",
              }}
            >
              {detail.itemPrice}/-
            </span>
             <div style={{marginLeft:"2rem"}}>

             <QuantityCounter
                detail={detail}
                dishName={detail.itemName}
                count={detail.quantity}
              />
             </div>

          </div>
        </div>
        {/* foodType 0 for veg foods other are non veg also check if food is eligible to categorise into veg and non veg like beverages are neither of both */}
      </div>
    </>
  );
}

export default Menucards;
