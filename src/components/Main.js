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

function Main() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [divHeight, setDivHeight] = useState(0);

  const myRef = useRef(null);

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
            marginLeft: "2rem",
            justifyContent: "space-around",
          }}
        >
          <div style={{ width: "1rem", marginTop: "4rem" }}>
            <div style={{ marginLeft: "-.1rem" }}>
              <img src={line} />
            </div>
            <span
              style={{
                
              }}
            >
              <CodeIcon
                style={{
                  color: "white",
                  // width: '2rem',
                }}
              />
            </span>
            <div
              style={{
                width: ".2rem",
                backgroundColor: "white",
                height: `${divHeight - 185}px`,
                borderRadius: ".1rem",
                marginLeft: ".6rem",
                background: "linear-gradient(to bottom, white, blue, green)",
              }}
            ></div>
            <span data-aos="fade-bottom" style={{ margin: "1rem 0 1rem 0" }}>
              <BusinessCenterIcon
                style={{ color: "white", margin: "1rem 0 1rem 0" }}
              />
            </span>
            <div
              data-aos="fade-bottom"
              style={{
                width: ".2rem",
                backgroundColor: "white",
                height: "25.5rem",
                borderRadius: ".1rem",
                marginLeft: ".6rem",
                background: "linear-gradient(to bottom, green, black)",
              }}
            ></div>
          </div>
          <div>
            <DroneImage />
            <div ref={myRef}>
              <Intro />
            </div>
            <Productivity />
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Main;
