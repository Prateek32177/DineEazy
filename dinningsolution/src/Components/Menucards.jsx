import React,{useState} from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import img1 from "../images/food.png";
import img2 from "../images/hamburger.png";
import img3 from "../images/pizza.png";
import img4 from "../images/spaguetti.png";
import QuantityCounter from "./Quantitybutton";
import "./Styles.css";

const menuCard=[
    {
        itemName:"Burger",
        itemPrice:"299/-",
        img:img1
    },
    {
        itemName:"Pizza",
        itemPrice:"399/-",
        img:img2
    },
    {
        itemName:"Chole Bhature",
        itemPrice:"299/-",
        img:img3
    },
    {
        itemName:"Pav Bhaji",
        itemPrice:"199/-",
        img:img4
    }
]

function Menucards() {
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#1E2026",
    padding: "20px",
    borderRadius: "20px",
    margin: "20px 0px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
  };
  const imgStyle = { height: "50px", width: "50px", filter: "invert(100%)" };
  const [icon,setIcon] = useState("")
  
  function handleAdd() {
setIcon("App-logo")
  }

  return (
    <>
    {
        menuCard.map((item)=>(
            <div className="dishCard" style={cardStyle}>
            <div className="dishImage">
              <img src={item.img} style={imgStyle} alt="dishimage" ></img>
            </div>
            <div className="dishDescp">
              <p style={{ color: "white", fontSize: "15px" }}>{item.itemName}</p>
              <span style={{borderRadius:"5px",padding:"5px 15px", color: "white", fontSize: "15px",backgroundColor:"#7C40FF" }}>{item.itemPrice}</span>

            </div>
            <QuantityCounter/>
            {/* <IconButton className={icon} onClick={handleAdd}>
            <AddCircleOutlineOutlinedIcon  style={{ color: "7C40FF", height: 60, width: 60 }}/>
            </IconButton> */}
          </div>
        ))
    }
    
    </>
  );
}

export default Menucards;
