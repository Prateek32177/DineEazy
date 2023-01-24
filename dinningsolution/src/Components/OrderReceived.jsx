import React from "react";
import VerticalLinearStepper from "./Stepper";
import {useNavigate} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function OrderConfirm() {

const navigate = useNavigate()

  return (
    <div
      style={{ backgroundColor: "#1E2026", color: "white", width:"100%",height:"100vh" }}>
      <div
        onClick={() => navigate(-1)}
        style={{
          marginLeft: "3rem",
          display: "flex",
          alignSelf: "flex-start",
          cursor: "pointer",
        }}
      >
        <ArrowBackIcon
          style={{
            width: "23px",
            height: "23px",
            marginRight: "5px",
            color: "grey",
          }}
        />
        <h6 style={{ color: "grey" }}>Back</h6>
      </div>
      <div style={{margin:"35px"}}>
      <VerticalLinearStepper />
      </div>
      
    </div>
  );
}

export default OrderConfirm;
