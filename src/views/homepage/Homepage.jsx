import React from "react";
import styles from "./Homepage.module.css";

import SplashImage from "../../components/splashImage/SplashImage";
import OurMission from "../../components/ourMission/OurMission";
import OurDesign from "../../features/ourDesign/OurDesign";

const Homepage = () => {
  return (
    <>
      <SplashImage />
      <OurMission />
      <OurDesign />
    </>
  );
};

export default Homepage;
