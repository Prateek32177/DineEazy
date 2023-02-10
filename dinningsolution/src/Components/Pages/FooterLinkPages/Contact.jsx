import React from "react";
import image from "../../../images/ContactPage.svg";
import Fade from "react-reveal/Fade";
import "../../../App.css";
import NavigateButton from "../../CommonComponent/NavigateButton";

const contactInfo = [
  { label: "City", value: "New Mexico" },
  { label: "Address", value: "308 Negro Arroyo Lane, Albuquerque, 01096" },
  { label: "Phone", value: "(+201) 555-293" },
  { label: "Email", value: "WalterWhite@Professor.com" },
  { label: "Social", value: "We are not on Social Media" },
];

export default function Contact() {
  return (
    <>
      <div style={{ marginTop: "10rem" }}>
        <Fade right cascade duration={2000}>
          <p style={{ color: "white", fontSize: "large" }}>
            Don't Reach Out to us
          </p>
        </Fade>

        {/* <div style={{display:"flex"}} >
      
          <img
            // style={{ boxShadow: heroImageShadow }}
            style={{  width:'70vw'            }}
            src={image}
            alt="HeroImage"
          ></img> */}

        <div
          style={{
            margin: "45px",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          {contactInfo.map((data) => (
            <>
              <p
                style={{
                  color: "white",
                  fontFamily: "Josefin Sans",
                  textAlign: "left",
                  wordBreak: "normal",
                  hyphens: "auto",
                  margin: 0,
                  filter: "drop-shadow(2px 4px 6px black)",
                }}
              >
                {data.label}
              </p>
              <p
                style={{
                  color: "white",
                  fontFamily: "Josefin Sans",
                  textAlign: "left",
                  wordBreak: "normal",
                  hyphens: "auto",
                  filter: "drop-shadow(2px 4px 6px black)",
                }}
              >
                {data.value}
              </p>
            </>
          ))}
        </div>
        {/* </div> */}
        <NavigateButton path={"/"} additionalStyle={{padding:'0'}}/>
      </div>
    </>
  );
}
