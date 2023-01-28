import React,{useState} from "react";
import VerticalLinearStepper from "./Stepper";
import BackButton from "./BackButton";
import { Navigate } from "react-router-dom";

function OrderConfirm() {
    const [billing, setBilling] = useState(false);
    const handleBilling = () => {
        setBilling(true);
    };
  return (
    <div style={{color: "white" }}>
      {billing && <Navigate to="/Billing" />}
      <BackButton color={"white"} pageName={"Order Tracking"}/>
      <div style={{margin:"35px"}}>
      <VerticalLinearStepper />
      </div>
      <button
        className="sidenavButton"
        onClick={handleBilling}
      >
        Proceed For Billing
      </button>
    </div>
  );
}

export default OrderConfirm;
