import React from "react";
import image from "../images/ContactPage.svg";
import Fade from "react-reveal/Fade";
import "../App.css";
export default function Contact(props) {
  return (
    <>
      <div style={{ marginTop: "10rem" }}>
        <Fade right cascade delay={4000} duration={2000}>
          <p style={{ color: "white", fontSize: "x-large" }}>
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
            backgroundColor: "#83BF00",
            margin: "45px",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <p
            style={{
              color: "white",
              fontFamily: "Josefin Sans",
              textAlign: "left",
              wordBreak: "normal",
              hyphens: "auto",
              margin: 0,
              filter: "drop-shadow(2px 4px 6px black)"
            }}
          >
            City
          </p>
          <p
            style={{
              color: "white",
              fontFamily: "Josefin Sans",
              textAlign: "left",
              wordBreak: "normal",
              hyphens: "auto",
              filter: "drop-shadow(2px 4px 6px black)"
            }}
          >
            New Mexico
          </p>
          <br />
          <p
            style={{
              color: "white",
              fontFamily: "Josefin Sans",
              textAlign: "left",
              wordBreak: "normal",
              hyphens: "auto",
              filter: "drop-shadow(2px 4px 6px black)",
              margin: 0,
            }}
          >
            Address
          </p>
          <p
            style={{
              color: "white",
              fontFamily: "Josefin Sans",
              textAlign: "left",
              wordBreak: "normal",
              hyphens: "auto",
              filter: "drop-shadow(2px 4px 6px black)"
            }}
          >
            308 Negro Arroyo Lane, Albuquerque, 01096
          </p>
          <br />
          <p
            style={{
              color: "white",
              fontFamily: "Josefin Sans",
              textAlign: "left",
              wordBreak: "normal",
              hyphens: "auto",
              margin: 0,
              filter: "drop-shadow(2px 4px 6px black)"
            }}
          >
            Phone
          </p>
          <p
            style={{
              color: "white",
              fontFamily: "Josefin Sans",
              textAlign: "left",
              wordBreak: "normal",
              hyphens: "auto",
              filter: "drop-shadow(2px 4px 6px black)"
            }}
          >
            (+201) 555-293
          </p>
          <br />
          <p
            style={{
              color: "white",
              fontFamily: "Josefin Sans",
              textAlign: "left",
              wordBreak: "normal",
              hyphens: "auto",
              margin: 0,
              filter: "drop-shadow(2px 4px 6px black)"
            }}
          >
            Email
          </p>
          <p
            style={{
              color: "white",
              fontFamily: "Josefin Sans",
              textAlign: "left",
              wordBreak: "normal",
              hyphens: "auto",
              filter: "drop-shadow(2px 4px 6px black)"
            }}
          >
            WalterWhite@Professor.com
          </p>
          <br />
          <p
            style={{
              color: "white",
              fontFamily: "Josefin Sans",
              textAlign: "left",
              wordBreak: "normal",
              hyphens: "auto",
              margin: 0,
              filter: "drop-shadow(2px 4px 6px black)"
            }}
          >
            Social
          </p>
          <p
            style={{
              color: "white",
              fontFamily: "Josefin Sans",
              textAlign: "left",
              wordBreak: "normal",
              hyphens: "auto",
              filter: "drop-shadow(2px 4px 6px black)"
            }}
          >
           No Social Media We believe in in person meeting
          </p>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
