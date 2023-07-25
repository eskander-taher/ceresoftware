import React from "react";

import {
  Box,
  List,
  ListItem,
  Typography,
  Stack,
  IconButton,
  Container,
  ButtonBase,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import i18n from "../Trans/i18";

function Footer({ t }) {
  const footerItems = [
    { id: 1, item: "Home", link: "/" },
    { id: 2, item: "About Us", link: "/Abotus" },
    { id: 3, item: "Our Projects", link: "/ProjectsPage" },
    { id: 4, item: "Contact Us", link: "/ContactsPage" },
  ];

  const currentYear = new Date().getFullYear();

  const footerStyles = {
    iconStyle: {
      padding: "0.4rem",
      fontSize: "50px",
      color: "#FFFFFF",
      "&:hover": {
        color: "#FFD8A8",
      },
    },

    iconsBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "300px",
      height: "50px",
      fontSize: "30px",
    },

    listText: {
      fontSize: "18px",
      textTransform: "uppercase",
      fontWeight: "600",
      color: "#fff",
      p: "5px",
      "&:hover": {
        color: "#FFD8A8",
      },
    },

    listItem: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: i18n.language === "en" ? "left" : "right",
      textAlign: i18n.language === "en" ? "left" : "right",
      color: "#FFFFFF",
    },
  };

  const newFooterItems = footerItems.map((newFooterItem, index) => (
    <ListItem key={index} sx={footerStyles.listItem}>
      <ButtonBase
        component={Link}
        disableRipple
        // disableFocusRipple
        to={newFooterItem.link}
        sx={footerStyles.listText}
      >
        {t(newFooterItem.item)}
      </ButtonBase>
    </ListItem>
  ));

  return (
    <Stack
      height={{ xs: "100%", lg: "500px" }}
      position="static"
      sx={{
        boxSizing: "border-box",
        backgroundColor: "#1C7ED6",
        color: "#FFFFFF",
        
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ md: "row", lg: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
          spacing={{ xs: "20px", lg: "100px" }}
          p={{ xs: "50px", lg: "20px 0 0" }}
        >
          <Box>
            <Typography
              textAlign="center"
              color="#FFFFFF"
              fontWeight="700"
              fontSize={{ xs: "48px", lg: "60px" }}
              letterSpacing="1px"
            >
              CereSoftware
            </Typography>
            &copy; Copyright {currentYear}
          </Box>
          <Box>
            <List>{newFooterItems}</List>
          </Box>
          <Box sx={footerStyles.iconsBox}>
            <IconButton href="https://twitter.com/CereSoftware">
              <TwitterIcon sx={footerStyles.iconStyle} />
            </IconButton>
            <IconButton href="https://www.facebook.com/CereSoftware-119924661071564">
              <FacebookIcon sx={footerStyles.iconStyle} />
            </IconButton>
            <IconButton href="https://www.instagram.com/ceresoftware/">
              <InstagramIcon sx={footerStyles.iconStyle} />
            </IconButton>
            <IconButton href="mailto:ceresoftware@gmail.com">
              <EmailOutlinedIcon sx={footerStyles.iconStyle} />
            </IconButton>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
}

export default withNamespaces()(Footer);
