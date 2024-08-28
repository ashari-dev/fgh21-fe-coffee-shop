import React from "react";
import HomeGridFavourite from "../components/HomeGridFavourite";
import HomeComponent from "../components/HomeDescription";
import HomeTestimonial from "../components/HomeTestimonial";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <HomeGridFavourite />
      <HomeTestimonial />
      <Footer />
    </>
  );
}

export default HomePage;
