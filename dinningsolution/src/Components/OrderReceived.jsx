import React,{useState} from "react";
import VerticalLinearStepper from "./Stepper";
import BackButton from "./BackButton";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function OrderConfirm() {
  const toggled = useSelector((state)=>state.Counter.themeToggle)
    const [billing, setBilling] = useState(false);
    const [billingEnable, setBillingEnable] = useState(false);
    const handleBilling = () => {
        setBilling(true);
       
    };
    setTimeout(()=>setBillingEnable(true),5000)
  return (
    <div style={{color: "white" }}>
      {billing && <Navigate to="/Billing" />}
      <BackButton color={"white"} pageName={"Order Tracking"}/>
      <div style={{margin:"35px"}}>
      <VerticalLinearStepper />
      </div>
      {billingEnable&&<button
         className={toggled?"sidenavButton sidenavButtonOrange":"sidenavButton sidenavButtonViolet"}
        onClick={handleBilling}
      >
        Proceed For Billing
      </button>}
    </div>
  );
}

export default OrderConfirm;
