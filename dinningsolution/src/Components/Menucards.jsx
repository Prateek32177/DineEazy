import React from "react";
import QuantityCounter from "./Quantitybutton";
import "../App.css"
const cardStyle = {
  display: "flex",
  justifyContent:"space-between",
  alignItems: "center",
  backgroundColor: "#1E2026",
  padding: "20px",
  borderRadius: "20px",
  margin: "20px 0px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
};


const imgStyle = { height: "50px", width: "50px", filter: "invert(100%)" };

function Menucards(props) {
  const {detail} = props


  return (
    <>

            <div className="dishCard" style={cardStyle}>
            <div className="dishImage">
              <img src={detail.img} style={imgStyle} alt="dishimage" ></img>
            </div>
            <div className="dishDescp" style={{width:"min-content"}}>
              <p style={{ color: "white", fontSize: "15px" }}>{detail.itemName}</p>
              <span style={{borderRadius:"5px",padding:"5px 15px", color: "white", fontSize: "15px",backgroundColor:"#7C40FF" }}>{detail.itemPrice}/-</span>

            </div>
            <QuantityCounter detail={detail} dishName={detail.itemName} count={detail.quantity}/>
          </div>
    
    
    </>
  );
}

export default Menucards;
