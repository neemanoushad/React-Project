import React from "react";
import { styled } from "@mui/system";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";

import FbIcon from "../Images/facebook (1).png";
import InstaIcon from "../Images/Instagram.png";
import Twitter from "../Images/twitter.png";
function Footer() {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    display: "flex",
    color: "black",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "white",
    },
  }));

  const IconBox=styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:theme.spacing(2),
    [theme.breakpoints.down("sm")]:{
        justifyContent:"center"
    }
  }))

  const data = [
    {
      path: "/",
      display: "Advanced",
    },
    {
      path: "/",
      display: "Compassionate",
    },
    {
      path: "/",
      display: "Premier",
    },
  ];

  const overdata = [
    {
      path: "/",
      display: "Location",
    },
    {
      path: "/",
      display: "Partnership",
    },
    {
      path: "/",
      display: "Terms of use & policies ",
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#e5cfb8",
      }}
    >
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "black",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Feature
          </Typography>
          {data.map((item, index) => (
            <FooterLink>{item.display}</FooterLink>
          ))}
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "black",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Overview
          </Typography>
          {overdata.map((item) => (
            <FooterLink>{item.display}</FooterLink>
          ))}
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "black",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "black",
              mb: 2,
            }}
          >
            Keep in touch with our social media pages.
          </Typography>
          <IconBox>
            <img src={FbIcon} alt=""  style={{cursor:"pointer"}}/>
            <img src={InstaIcon} alt=""  style={{cursor:"pointer"}}/>
            <img src={Twitter} alt=""  style={{cursor:"pointer"}}/>
          </IconBox>
        </Box>
      </CustomContainer>
    </Box>
  );
}

export default Footer;
