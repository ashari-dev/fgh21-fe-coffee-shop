import React from "react";
import HomeMapOverview from "../components/HomeMapOverview";
import HomeCover from "../components/HomeCover";
import HomeGridFavourite from "../components/HomeGridFavourite";
import HomeComponent from "../components/HomeDescription";
import HomeTestimonial from "../components/HomeTestimonial";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
// import { useSelector } from "react-redux";

function HomePage() {
  // const dataprofile = useSelector((state) => state.profile.data);
  // console.log(dataprofile);


  return (
    <>
      <Navbar />
      <HomeCover />
      <HomeComponent />
      <HomeGridFavourite />
      <HomeMapOverview />
      <HomeTestimonial />
      <Footer />
    </>
  );
}

export default HomePage;
