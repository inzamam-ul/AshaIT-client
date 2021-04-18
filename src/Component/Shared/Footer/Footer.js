import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import FooterCol from "./FooterCol/FooterCol";

const Footer = () => {
  const about = [
    {
      name: `We are experienced, dedicated, innovative and building websites for over 7 years.

We already have over 700 happy clients almost from all over the world as we are freelancers, have working experiences on different type of business cultures, different clients’ tests and different types of challenges.`,
      link: "/emergency",
    },
  ];
  const ourAddress = [
    { name: "Kulbaria Bazar, Meherpur-7100", link: "//google.com/map" },
    { name: "Kulbaria", link: "//google.com/map" },
  ];
  const serviceHour = [
    {
      name:
        "Our support available to help you 24 hours a day, seven days a week.",
      link: "/support",
    },
    { name: "Monday-Friday:    6am to 10pm", link: "/support" },
    { name: "Saturday:    8am to 10pm", link: "/support" },
    { name: "Sunday:    8am to 10pm", link: "/support" },
  ];
  const services = [
    { name: "Responsive web application", link: "/web" },
    { name: "Android app development", link: "/android" },
    { name: "IOS app development", link: "/ios" },
    { name: "Appliction upgrade", link: "/upgrade" },
    { name: "Bug fixing", link: "/bug" },
  ];
  return (
    <footer className="footer-area text-left">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol key={1} menuTitle={"ABOUT ASHA IT"} menuItems={about} />
          <FooterCol key={2} menuTitle="SERVICES" menuItems={services} />
          <FooterCol
            key={3}
            menuTitle="BUSINESS HOURS"
            menuItems={serviceHour}
          />
          <FooterCol key={4} menuTitle="OUR ADDRESS" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon className="icon" icon={faFacebookF} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call now</h6>
              <button className="btn btn-outline-success">+17658082209</button>
            </div>
          </FooterCol>
        </div>
        <div className="text-center pb-3">
          <span>Copyright {new Date().getFullYear()} All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
