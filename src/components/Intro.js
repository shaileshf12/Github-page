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
import TextField from '@mui/material/TextField';


function Intro() {
  const matches = useMediaQuery("(max-width:950px)");

  const imgStyle = {
    width: "8rem",
    height: "3rem",
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  console.log(matches);

  return (
    <Box m={5} sx={{ gap: "0", border:'0px solid white' }}>
      <Card
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
          backgroundImage: 'linear-gradient(to right, #080a12, #101122)'
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
          <ChevronRightIcon className="icon1" fontSize="small"/>
          <ArrowForwardIcon className="icon2" fontSize="small"/>
        </div>
      </Card>

      <Typography
        variant="h1"
        align="left"
        sx={{
          fontFamily: "'Heebo', sans-serif",
          color: "white",
          fontSize: "8vw",
          marginTop: "1.2rem",
        }}
      >
        Let’s build from here
      </Typography>
      <Typography variant="h4" align="left" sx={{ color: "#8b949e", maxWidth:'60rem' }}>
        Harnessed for productivity. Designed for collaboration. Celebrated for
        built-in security. Welcome to the platform developers love.
      </Typography>

      <Box>
        {!matches ? (
          <div style={{ display: "flex", gap: "1rem", marginTop: "3rem" }}>
            <div>
              <input
                placeholder="Email address"
                style={{
                  backgroundColor: "white",
                  height: "2.38rem",
                  width: "17rem",
                  padding: ".3rem",
                  border: "none",
                  borderTopLeftRadius: ".2rem",
                  borderBottomLeftRadius: ".2rem",
                  fontSize: "1rem"
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
                  height: "3rem",
                }}
              >
                Sign up for GitHub
              </Button>
            </div>
            <div style={{width:'.1px', height:'3rem', backgroundColor:'grey'}}></div>
            <Button
              variant="text"
              size="large"
              sx={{ width: "25%", textTransform: "none", color: "white", border:'1px solid #644e8a' }}
              className="start-trial"
            >
              Start a free enterprise trial
              <ChevronRightIcon className="icon3" fontSize="small"/>
                <ArrowForwardIcon className="icon4" fontSize="small"/>
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
              variant="text"
              size="large"
              sx={{ textTransform: "none", color: "white", border:'1px solid #644e8a'}}
              className="start-trial"
            >
              Start a free enterprise trial
              {/* <div style={{ color: "white", alignSelf: "center" }}>
                
              </div> */}
              <ChevronRightIcon className="icon3" fontSize="small"/>
              <ArrowForwardIcon className="icon4" fontSize="small"/>
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
          <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
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
