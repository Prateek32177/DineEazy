import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,add,addItemList,removeItem } from "../ReduxStateManagement/MenuSlice";
import "../App.css"
function QuantityCounter(props) {
  const addedItems = useSelector((state) => state.Counter.addedItems);

  // console.log("added Menu items",addedItems)
  const dispatch = useDispatch();
const {count,dishName,detail} = props;

useEffect(()=>{

dispatch(addItemList())
},[count])

  const handleIncrement = () => {
    dispatch(increment(dishName));
  };
  const handleDecrement = () => {
    if (count !== 0) 
    dispatch(decrement(dishName));
  };

  const openCounter = () => {
    dispatch(add(dishName))
  };

  return (
    <div
    className="counterbutton"
      style={
        count == 0
          ? {
              //     display: "flex",
              //   justifyContent: "space-between",
              //   alignItems: "center",
              //   border: "0.2px solid grey",
              //   borderRadius: "100px",
              //   boxShadow: "black 3px 3px 6px 0px",
            }
          : {
              display: "flex",
              justifyContent: "space-between",
              // alignItems: "center",
              // border: "0.2px solid grey",
              // borderRadius: "100px",
              // boxShadow: "black 3px 3px 6px 0px",
              // backgroundColor: "transparent",
            }
      }
    >
      {count !== 0 && (
        <button
          onClick={() => handleDecrement()}
          style={{
            borderRadius: "100px",
            // margin: "0.7rem",
            padding: "0px 6px",
          }}
        >
          <RemoveIcon />
        </button>
      )}
      {count === 0 ? (
        <button
          onClick={() => openCounter()}
          style={{ color: "white", fontSize: "1rem"}}
        >
          ADD
        </button>
      ) : (
        <p style={{ color: "white", margin: "0.7rem", fontSize: "1.5rem" }}>
          {count}
        </p>
      )}
      {count !== 0 && (
        <button
          onClick={() => handleIncrement()}
          style={{
            borderRadius: "100px",
            // margin: "0.7rem",
            padding: "0px 6px",
          }}
        >
          <AddIcon />
        </button>
      )}
    </div>
  );
}

export default QuantityCounter;
