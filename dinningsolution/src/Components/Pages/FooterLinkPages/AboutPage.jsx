import React,{useState} from "react";
import image from "../../../images/AboutHeroImage.svg";
import Fade from "react-reveal/Fade";
import NavigateButton from "../../CommonComponent/NavigateButton";
export default function About() {

  return (
    <>

      <div style={{ marginTop: "10rem" }}>
        <Fade right cascade duration={2000}>
          <p style={{ color: "white", fontSize: "x-large" }}>Who We Are!</p>
        </Fade>

        <div className="AboutHeroImage">
          <img
            // style={{ boxShadow: heroImageShadow }}
            src={image}
            alt="HeroImage"
          ></img>
        </div>

        <Fade right cascade duration={2000}>
          <p
            style={{
              color: "white",
              padding: "0 45px",
              fontFamily: "Josefin Sans",
              textAlign: "left",
              wordBreak: "normal",
              hyphens: "auto",
            }}
          >
            DineEazy is a fine dining experience service providing tech company
            that combines technology and hospitality to offer the ultimate
            culinary experience. Our mission is to enhance the dining experience
            for our customers by offering an innovative and seamless solution.
          </p>
          <br />
          <p
            style={{
              color: "white",
              padding: "0 45px",
              fontFamily: "Josefin Sans",
              textAlign: "left",
              wordBreak: "normal",
              hyphens: "auto",
            }}
          >
            At DineEazy, we understand that the dining experience extends beyond
            the meal itself. That's why we use the latest technology to create
            an immersive and personalized experience that exceeds our customers'
            expectations. From virtual reality environments to augmented reality
            menus, we use technology to enhance the dining experience in new and
            exciting ways.
          </p>
          <br />
          <p
            style={{
              color: "white",
              padding: "0 45px",
              fontFamily: "Josefin Sans",
              textAlign: "left",
              wordBreak: "normal",
              hyphens: "auto",
            }}
          >
            At DineEazy, we're proud to be at the forefront of technology-driven
            dining. Whether you're a food lover, tech enthusiast or simply
            looking for a memorable dining experience, we invite you to join us
            for a journey unlike any other.
          </p>
        </Fade>

      <NavigateButton path={"/"} additionalStyle={{padding:'0'}}/>
      </div>
    </>
  );
}
