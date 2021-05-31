import React from "react";
import log from "./assets/UCLogo.svg";
import log1 from "./assets/chap-foot.png";
import log2 from "./assets/MWBE.png";
import social1 from "./assets/facebook.svg";
import social2 from "./assets/instagram.svg";
import social3 from "./assets/linkedin.svg";
import social4 from "./assets/twitter.svg";

const Footer = () => {
  const data4 = [
    "Hourly Care",
    "Daily Care",
    "Hospital to Home",
    "Respite Care",
    "Specialized Care",
  ];
  const listItems = data4.map((number) => <li>{number}</li>);
  const data5 = [
    "About us",
    "Locations",
    "Caregivers",
    "News & Blog",
    "Contact Us",
    "FAQ",
  ];
  const listItem = data5.map((number) => <li>{number}</li>);
  return (
    <>
      <div className="footer">
        <div className="div1">
          <div className="div3">
            <div className="div5">
              <h3>HEADQUARTERS</h3>
              <hr />
              <p>
                246-50 57th Drive Douglaston, NY 11362 hello@universacare.com<br/>P:
                (718) 224-3758
                <br />
                F: 8777999065
              </p>
              <img className="log" src={log} alt="" />
            </div>
            <div className="div6">
              <div className="div9">
                <h3>SERVICES</h3>
                <hr />
                <ul>{listItems}</ul>
              </div>
              <div className="div10">
                <h3>COMPANY</h3>
                <hr />
                <ul>{listItem}</ul>
              </div>
            </div>
          </div>
          <div className="div4">
            <div className="div7">
              <p>Sign up to receive the latest articles</p>
              <input
                type="email"
                id="fname"
                name="firstname"
                placeholder="Your Email Address"
              ></input>
              <button>SUBMIT</button>
            </div>
            <div className="div8">
              <div className="div11">
                <img src={log1} alt="" />
                <img src={log2} alt="" />
              </div>
              <div className="div12">
                <span>
                  <p>Follow Us</p>
                </span>
                <img src={social1} alt="" />
                <img src={social2} alt="" />
                <img src={social3} alt="" />
                <img src={social4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="div2">
          <p>
            Copyright 2020 <b>Universacare</b> - All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
