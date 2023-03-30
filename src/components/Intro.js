import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Eyebrow from "../assets/eyebrow-banner-icon-copilot-x.svg";
import Typography from "@mui/material/Typography";
import { AppBar, Toolbar } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import pinterest from "../assets/pinterest.png";
import stripe from "../assets/stripe.png";
import kpmg from "../assets/kpmg.png";
import pg from "../assets/pg.png";
import mercedes from "../assets/mercedes.png";
import telus from "../assets/telus.png";
import Aos from "aos";
import "aos/dist/aos.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import "./style.css";

function Intro() {
  const matches = useMediaQuery("(max-width:950px)");
  const [hover, setHover] = useState(false);

  const imgStyle = {
    width: "8rem",
    height: "3rem",
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  console.log(matches);

  return (
    <Box m={5} sx={{ gap: "5" }}>
      <Card
        onMouseMove={(e) => {
          setHover(e.target.value);
        }}
        className="intro"
        sx={{
          maxWidth: 375,
          border: "1px solid rgb(160, 157, 157)",
          display: "flex",
          borderRadius: "3rem",
          gap: "1rem",
          padding: "1rem",
          background: "transparent",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <img src={Eyebrow} />
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <div style={{ color: "white" }}>Introducing GitHub Copilot X</div>
          <div style={{ color: "grey" }}>
            Your AI pair programmer is leveling up
          </div>
        </Box>
        <div style={{ color: "white", alignSelf: "center" }}>
          <ChevronRightIcon className="icon1" />
          <ArrowForwardIcon className="icon2" />
        </div>
      </Card>

      <Typography
        variant="h1"
        align="left"
        sx={{
          fontFamily: "a",
          color: "white",
          fontSize: "9vw",
          marginTop: "1.2rem",
        }}
      >
        Let’s build from here
      </Typography>
      <Typography variant="h4" align="left" sx={{ color: "#8b949e" }}>
        Harnessed for productivity. Designed for collaboration. Celebrated for
        built-in security. Welcome to the platform developers love.
      </Typography>

      <Box>
        {!matches ? (
          <div style={{ display: "flex", gap: "5rem", marginTop: "3rem" }}>
            <div>
              <input
                placeholder="Email address"
                style={{
                  backgroundColor: "white",
                  height: "2.4rem",
                  width: "17rem",
                  padding: ".2rem",
                  border: "none",
                  borderTopLeftRadius: ".2rem",
                  borderBottomLeftRadius: ".2rem",
                }}
              />
              <Button
                variant="contained"
                // color="primary"
                size="4rem"
                sx={{
                  textTransform: "none",
                  border: "none",
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                  backgroundColor: "#783fc6",
                  height: "2.9rem",
                }}
              >
                Sign up for GitHub
              </Button>
            </div>
            <Button
              variant="outlined"
              size="large"
              sx={{ width: "25%", textTransform: "none", color: "white" }}
              className="start-trial"
            >
              Start a free enterprise trial
              <div style={{ color: "white", alignSelf: "center" }}>
                <ChevronRightIcon className="icon3" />
                <ArrowForwardIcon className="icon4" />
              </div>
            </Button>
          </div>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input
              placeholder="Email address"
              style={{
                backgroundColor: "white",
                height: "2.4rem",
                marginTop: "3rem",
                borderRadius: ".2rem",
                border: "none",
              }}
            />
            <Button
              variant="contained"
              size="large"
              sx={{ textTransform: "none", backgroundColor: "#793fc6" }}
            >
              Sign up for GitHub
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ textTransform: "none" }}
            >
              Start a free trial
            </Button>
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "6rem 0 6rem 0",
            alignItems: "start",
            gap: "2rem",
          }}
        >
          <div style={{ color: "#6c7278" }}>
            Trusted by the world’s leading organizations ↘︎
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <img src={stripe} style={imgStyle} />
            <img src={pinterest} style={imgStyle} />
            <img src={kpmg} style={imgStyle} />
            <img src={mercedes} style={imgStyle} />
            <img src={pg} style={imgStyle} />
            <img src={telus} style={imgStyle} />
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default Intro;
