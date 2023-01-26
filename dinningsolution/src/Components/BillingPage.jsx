import React from "react";
import BackButton from "./BackButton";
import menuBack from "../images/MenuBackground.png";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

const iconStyle = {
  color: "white",
  width: "50px",
  height: "50px",
  alignItems: "center",
  padding: "10px",
};

const billingItem = [
  {
    itemName: "Veg Biryani",
    quantity: 1,
    totalCost: 500,
  },
  {
    itemName: "Fried Rice",
    quantity: 2,
    totalCost: 220,
  },
  {
    itemName: "Masala Dosa",
    quantity: 1,
    totalCost: 150,
  },
  {
    itemName: "Manchurian",
    quantity: 3,
    totalCost: 450,
  },
  {
    itemName: "Grilled Sandwich",
    quantity: 1,
    totalCost: 300,
  },
  {
    itemName: "Chilli Paneer",
    quantity: 5,
    totalCost: 700,
  },
];

export default function BillingPage() {
  let subTotal = 0;
  let total = 0;
  let gst = 0;
let date = new Date()
  for (let i = 0; i < billingItem.length; i++) {
    subTotal += billingItem[i].totalCost * billingItem[i].quantity;
  }

  gst = (subTotal * 5) / 100;

  total = subTotal + 2 * gst;
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${menuBack})`,
          paddingBottom: "30px",
          backgroundSize: "cover",
        }}
      >
        <BackButton pageName={"Billing"} />
        <ReceiptLongOutlinedIcon style={iconStyle} />
        <p style={{ color: "white" }}>Thanks For Ordering with Us ! Hope You Liked Our Service</p>
      </div>
      <p style={{ color: "white",padding:"10px" }}>~ Bill Description ~</p>
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

        <h4 style={{color:"white"}} >Table No. : 3</h4>
       <p style={{color:"white"}}>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}   {date.getHours()}:{date.getMinutes()}</p>
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
                  {item.quantity} X {item.totalCost}
                </td>
                <td>{item.quantity * item.totalCost} Rs.</td>
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
      <button className="sidenavButton">Pay  {total} /- Rs Here</button>
    </>
  );
}
