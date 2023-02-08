import React from "react";
import image from "../images/PrivacyPolicy.svg";
import Fade from "react-reveal/Fade";

export default function PrivacyPolicy(props) {
  return (
    <>
      <div style={{ marginTop: "10rem" }}>
        <Fade right cascade delay={4000} duration={2000}>
          <p style={{ color: "white", fontSize: "x-large" }}>Privacy policy</p>
        </Fade>

        <div className="AboutHeroImage">
          <img
            // style={{ boxShadow: heroImageShadow }}
            src={image}
            alt="HeroImage"
          ></img>
        </div>

        <Fade right cascade delay={4000} duration={2000}>
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
            DineEazy values the privacy of our customers and is committed to
            protecting their personal information. This Privacy Policy outlines
            our practices and procedures for collecting, using and sharing
            personal information. 
            <br/>
           <strong>Information Collection</strong> : DineEazy collects
            personal information from customers in several ways, including
            through our website and mobile application, during the ordering and
            payment process, and through customer service interactions. This
            information may include name, address, telephone number, email
            address, payment information and any other information that
            customers choose to provide. 
            <br/>
            <strong>Use of Personal Information</strong>: DineEazy
            uses personal information to provide and improve our services, to
            process orders and payments, to communicate with customers, and to
            comply with legal requirements. This information may be used to
            personalize the customer experience, offer promotions and discounts,
            and to improve the quality of our services. Sharing of Personal
            Information: DineEazy will not share personal information with third
            parties, except as necessary to provide services, comply with legal
            requirements, or as otherwise disclosed in this Privacy Policy.
            DineEazy may share aggregated and anonymized data with partners for
            research and analysis purposes. 
            <br/>
            <strong>Security</strong>: DineEazy takes appropriate
            security measures to protect personal information from unauthorized
            access, alteration, disclosure or destruction. We implement
            industry-standard security practices, such as encryption and secure
            socket layer technology, to protect personal information. Access to
            Personal Information: DineEazy customers may request access to their
            personal information and request correction or deletion of incorrect
            information. To make such a request, please contact us at [insert
            contact information].
            <br/> 
            <strong>Changes to Privacy Policy</strong>: DineEazy may update
            this Privacy Policy from time to time. Any changes will be posted on
            our website and will become effective upon posting. If you have any
            questions or concerns about this Privacy Policy, please contact us
            at [insert contact information].
          </p>
        </Fade>
      </div>
    </>
  );
}
