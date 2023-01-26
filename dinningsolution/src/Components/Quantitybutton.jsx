import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function QuantityCounter(props) {
    const {usageArea, Quantity} = props
  const [count, setCount] = useState(0);
  // #7C40FF
  const handleDecrement = () => {
    let temp = count;
    if (count !== 0) {
      setCount(temp - 1);
    }
  };

  const handleIncrement = () => {
    let temp = count;
    setCount(temp + 1);
  };
  const openCounter = () => {
    let temp = count;
    if (count == 0) {
      setCount(temp + 1);
    }
  };

  return (
    <div
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
              alignItems: "center",
              border: "0.2px solid grey",
              borderRadius: "100px",
              boxShadow: "black 3px 3px 6px 0px",
              backgroundColor: "transparent",
            }
      }
    >
      {count != 0 && (
        <button
          onClick={handleDecrement}
          style={{
            borderRadius: "100px",
            margin: "0.7rem",
            padding: "0px 12px",
          }}
        >
          <RemoveIcon />
        </button>
      )}
      {count == 0 ? usageArea!=="addedIem"&&(
        <button
          onClick={openCounter}
          style={{ color: "white", fontSize: "1rem" }}
        >
          ADD
        </button>
      ) : (
        <p style={{ color: "white", margin: "0.7rem", fontSize: "1.5rem" }}>
          {count}
        </p>
      )}
      {count != 0 && (
        <button
          onClick={handleIncrement}
          style={{
            borderRadius: "100px",
            margin: "0.7rem",
            padding: "0px 12px",
          }}
        >
          <AddIcon />
        </button>
      )}
    </div>
  );
}

export default QuantityCounter;
