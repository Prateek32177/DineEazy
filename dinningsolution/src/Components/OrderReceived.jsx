import React from "react";
import VerticalLinearStepper from "./Stepper";
import BackButton from "./BackButton";

function OrderConfirm() {

  return (
    <div style={{ backgroundColor: "#1E2026", color: "white", width:"100%",height:"100vh" }}>
      <BackButton color={"white"} pageName={"Order Tracking"}/>
      <div style={{margin:"35px"}}>
      <VerticalLinearStepper />
      </div>
      
    </div>
  );
}

export default OrderConfirm;
