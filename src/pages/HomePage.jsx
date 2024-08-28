import React from "react";
import HomeCover from "../components/HomeCover";
import HomeGridFavourite from "../components/HomeGridFavourite";
import HomeComponent from "../components/HomeDescription";

function HomePage() {
  return (
    <>
    <HomeCover />
    <HomeComponent />
    <HomeGridFavourite />
    </>
  );
}

export default HomePage;
