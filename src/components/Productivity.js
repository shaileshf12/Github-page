import React from "react";
import { Box } from "@mui/system";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Productivity() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Box
        m={5}
        data-aos="fade-right"
        // data-aos-delay="800"
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "10rem",
          alignItems: "start",
        }}
      >
        <h2 style={{ color: "white" }}>Productivity</h2>
        <div
          style={{
            fontSize: "3rem",
            color: "#7ee787",
            textAlign: "left",
            maxWidth: "60rem",
          }}
        >
          <span style={{ color: "#7ee787" }}>
            Accelerate high-quality software development.{" "}
          </span>
          <span style={{ color: "white" }}>
            Our platform drives innovation with tools that boost developer
            velocity.
          </span>
        </div>
      </Box>
    </>
  );
}

export default Productivity;
