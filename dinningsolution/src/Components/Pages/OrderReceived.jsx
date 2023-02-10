import React, { useState } from "react";
import VerticalLinearStepper from "../Stepper";
import BackButton from "../CommonComponent/BackButton";
import NavigateButton from "../CommonComponent/NavigateButton";

function OrderConfirm() {
  const [billingEnable, setBillingEnable] = useState(false);
  setTimeout(() => setBillingEnable(true), 5000);
  return (
    <div style={{ color: "white" }}>
      <BackButton color={"white"} pageName={"Order Tracking"} />
      <div style={{ margin: "35px" }}>
        <VerticalLinearStepper />
      </div>
      {billingEnable && (
        <NavigateButton buttonName={" Proceed For Billing"} path={"/Billing"} />
      )}
    </div>
  );
}

export default OrderConfirm;
