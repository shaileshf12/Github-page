import React from 'react'
import Image from "../assets/hero-drone.webp"
import { useState, useEffect } from "react";

function DroneImage() {

const [width, setWidth]   = useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);
const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}
useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, []);
  return (
    <div>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'flex-end', margin:'4rem 2rem 4rem 0'}}>
            <img src={Image} style={{width:`${(width+height)/3.5-250}px`}}/>
        </div>
    </div>
  )
}

export default DroneImage