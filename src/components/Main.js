import React from "react";
import Paper from "@mui/material/Paper";
import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import DroneImage from "./DroneImage";
import Intro from "./Intro";
import Productivity from "./Productivity";
import line from "../assets/lines-hero.svg";
import CodeIcon from "@mui/icons-material/Code";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "aos/dist/aos.css";
import Aos from "aos";
import { borderRadius } from "@mui/system";
import Blur from "react-blur";
import { Opacity } from "@mui/icons-material";

function Main() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [divHeight, setDivHeight] = useState(0);
  const [prodHeight, setProdHeight] = useState(0);

  const myRef = useRef(null);
  const prodRef = useRef(null);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    setDivHeight(myRef.current.clientHeight);
    setProdHeight(prodRef.current.clientHeight)
  });

  return (
    <div style={{ height: "100%", minHeight: "100vh" }}>
      <Paper
        sx={{
          backgroundImage:
            "url('https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          // backgroundAttachment: "fixed",
        }}
      >
        {/* style={{width: `${(width + height) / 4.8 - 10}px`}} */}
        <Header />
        <div
          style={{
            display: "flex",
            marginLeft: "4rem",
            // justifyContent: "space-evenly",
          }}
        >
          <div style={{ width: "1rem", marginTop: "4rem" }}>
            <div style={{ marginLeft: "-.1rem"}}>
              <img src={line} style={{}} />
            </div>
            <div style={{margin: "1rem 0 1rem 0"}}>
              <CodeIcon
                style={{
                  color: "white",
                  // width: '2rem',
                  // margin: "1rem 0 1rem 0"
                }}
              />
            </div>
            <div
              style={{
                width: ".2rem",
                backgroundColor: "white",
                height: `${divHeight - 218}px`,
                borderRadius: ".1rem",
                marginLeft: ".6rem",
                background: "linear-gradient(to bottom, white, #773ec6, #7ee787)",
              }}
            ></div>
            <div
              data-aos="fade-bottom"
              data-aos-delay="500"
              style={{
                margin: "1rem 0 1rem 0",
                // backgroundColor:'#253d2d',
                // WebkitFilter:'blur(1px)',
                // filter:'blur(1px)',
              }}
            >
              <BusinessCenterIcon style={{ color: "white" }} />
              
            </div>
            <div
              data-aos="fade-bottom"
              data-aos-delay="1200"
              style={{
                width: ".2rem",
                backgroundColor: "white",
                height: `${prodHeight}px`,
                borderRadius: ".1rem",
                marginLeft: ".6rem",
                background: "linear-gradient(to bottom, #7ee787, #0d1116)",
              }}
            ></div>
          </div>
          <div>
            <DroneImage />
            <div ref={myRef}>
              <Intro />
            </div>
            <div ref={prodRef}><Productivity /></div>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Main;
