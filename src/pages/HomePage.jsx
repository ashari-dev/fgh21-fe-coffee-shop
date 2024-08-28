import React from "react";
import HomeMapOverview from "../components/HomeMapOverview";
import HomeCover from "../components/HomeCover";
import HomeGridFavourite from "../components/HomeGridFavourite";
import HomeComponent from "../components/HomeDescription";

function HomePage() {
  return (
    <>
    <HomeCover />
    <HomeComponent />
    <HomeGridFavourite />
    <HomeMapOverview/>
    </>
  );
}

export default HomePage;
