import React from "react";
import "./AreaOfPractices.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import image1 from "../assests/Bussiness-law-1.svg";
import image2 from "../assests/Partnership-img.svg";
import image3 from "../assests/Real-Estate-img.svg";
import image4 from "../assests/Bussiness-law-2.svg";
import image5 from "../assests/Landlord-img.svg";
import image6 from "../assests/elderAbuse-img.svg";

const AreaOfPractices = () => {
  return (
    <div className="area-wrapper">
      <div className="practices-heading">
        <h1>Area of Practices</h1>
      </div>
      <Box className="grid-container">
        <Grid container spacing={2} className="grid-wrapper">
          <Grid item xs={6} md={8} className="grid-item">
            <img src={image1} alt="business law" />
            <p className="large-img">BUSINESS LAW</p>
          </Grid>
          <Grid item xs={6} md={4} className="grid-item">
            <img src={image2} alt="business law" />
            <p className="small-img">Partnership LAW</p>
          </Grid>
          <Grid item xs={6} md={4} className="grid-item">
            <img src={image3} alt="business law" />
            <p className="small-img">REAL ESTATE LAW</p>
          </Grid>
          <Grid item xs={6} md={8} className="grid-item">
            <img src={image4} alt="business law" />
            <p className="large-img">BUSINESS LAW</p>
          </Grid>
          <Grid item xs={6} md={8} className="grid-item">
            <img src={image5} alt="business law" />
            <p className="large-img">LANDLORD DISPUTES</p>
          </Grid>
          <Grid item xs={6} md={4} className="grid-item">
            <img src={image6} alt="business law" />
            <p className="small-img">ELDER ABUSE</p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AreaOfPractices;
