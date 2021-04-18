import React from "react";
import Header from "../Shared/Header/Header";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import "./Home.css";
import Testimonials from "./Testimonials/Testimonials";
import WhyUs from "./WhyUs/WhyUs";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Testimonials />
      <WhyUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
