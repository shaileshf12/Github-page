import React from "react";
import Paper from "@mui/material/Paper";

// import BackgroundImage from "../assets/hero-bg.webp";
import Header from "./Header";
import DroneImage from "./DroneImage";
import Intro from "./Intro";
import Productivity from "./Productivity";

function Main() {

  return (
    <Paper
      sx={{
        backgroundImage:
          "url('https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        // backgroundAttachment: "fixed",
        height : '100%',
        minHeight:'250vh'
      }}
    >
        <Header/>
        <DroneImage/>
        <Intro/>
        <Productivity/>
    </Paper>
  );
}

export default Main;
