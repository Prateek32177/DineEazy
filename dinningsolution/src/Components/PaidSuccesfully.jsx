import React from "react";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

function Confirmation(props) {
  const [start, setStart] = useState("block");
  const [start2, setStart2] = useState("none");
  setTimeout(() => {
    setStart("none");
    setStart2("block");
  }, 3000);

  return (
    <div className="confirm">
      <CircularProgress style={{ display: `${start}` }} color="success" />
      <div style={{ display: `${start2}`, textAlign: "center" }}>
        <TaskAltRoundedIcon
          sx={{ color: "green", width: "5rem", height: "5rem" }}
        />
        <h4>Payment successful !</h4>
        <strong>Thanks for Choosing DineEazy !</strong>
      </div>
    </div>
  );
}

export default Confirmation;
