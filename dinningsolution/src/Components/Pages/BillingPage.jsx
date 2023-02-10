import React, { useState, useEffect } from "react";
import BackButton from "../CommonComponent/BackButton";
import menuBack from "../../images/MenuBackground.png";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import { useSelector } from "react-redux";
import Confirmation from "../Modal";

const iconStyle = {
  color: "white",
  width: "50px",
  height: "50px",
  alignItems: "center",
  padding: "10px",
};

export default function BillingPage() {
  const toggled = useSelector((state) => state.Counter.themeToggle);
  const billingItem = useSelector((state) => state.Counter.addedItems);
  let subTotal = 0;
  let total = 0;
  let gst = 0;
  let date = new Date();
  for (let i = 0; i < billingItem.length; i++) {
    subTotal += billingItem[i].itemPrice * billingItem[i].quantity;
  }

  gst = (subTotal * 5) / 100;

  total = subTotal + 2 * gst;

  const [succes, setSuccess] = useState(false);
  const handlePay = () => {
    setSuccess(true);
  };

  const [navbarShadow, setNavbarShadow] = useState("");

  const changeLogo = () => {
    if (window.scrollY >= 20) {
      setNavbarShadow("rgba(0, 0, 0, 0.45) 0px 25px 20px -20px");
    } else {
      setNavbarShadow("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeLogo);
  });
  return (
    <>
      <div
        className="BillDescp"
        style={{
          backgroundImage: `url(${menuBack})`,
          paddingBottom: "30px",
          backgroundSize: "cover",
          backgroundColor: "rgb(30, 32, 38)",
          // boxShadow:navbarShadow,
        }}
      >
        <BackButton pageName={"Billing"} />
        <ReceiptLongOutlinedIcon style={iconStyle} />
        <p style={{ color: "white" }}>
          Thanks For Ordering with Us ! Hope You Liked Our Service
        </p>
      </div>
      <div style={{}}>
        <p className="billHeading" style={{ color: "white", padding: "10px" }}>
          ~ Bill Description ~
        </p>
        <div
          style={{
            minHeight: "60vh",
            padding: "20px",
            textAlign: "-webkit-center",
            background: "rgb(30,32,38)",
            margin: "30px",
            borderRadius: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            minHeight: "60vh",
          }}
        >
          <h4 style={{ color: "white" }}>Table No. : 3</h4>
          <p style={{ color: "white" }}>
            {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}{" "}
            {date.getHours()}:{date.getMinutes()}
          </p>
          <table
            style={{
              alignItems: "center",
              padding: "20px",
              border: "1px solid grey",
              borderRadius: "20px",
            }}
          >
            {billingItem.map((item) => {
              return (
                <tr style={{ color: "grey" }}>
                  <td>{item.itemName}</td>
                  <td>
                    {item.quantity} X {item.itemPrice}
                  </td>
                  <td>{item.quantity * item.itemPrice} Rs.</td>
                </tr>
              );
            })}
            <tr style={{ color: "white" }}>
              <td>Sub-Total</td>
              <td>{""}</td>
              <td>{subTotal} Rs.</td>
            </tr>
            <tr style={{ color: "grey" }}>
              <td>CGST(5%)</td>
              <td></td>
              <td>{gst} Rs.</td>
            </tr>
            <tr style={{ color: "grey" }}>
              <td>SGST(5%)</td>
              <td>{""}</td>
              <td>{gst} Rs.</td>
            </tr>
            <tr style={{ border: "none", color: "white", fontWeight: "bold" }}>
              <td style={{ border: "none" }}>Grand Total</td>
              <td style={{ border: "none" }}>{""}</td>
              <td style={{ border: "none" }}>{total} Rs.</td>
            </tr>
          </table>
        </div>
      </div>
      <button
        className={
          toggled
            ? "sidenavButton sidenavButtonOrange"
            : "sidenavButton sidenavButtonViolet"
        }
        onClick={handlePay}
      >
        Pay {total} /- Rs Here
      </button>
      {succes && <Confirmation />}
    </>
  );
}
