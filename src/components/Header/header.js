import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  IconButton,
  ButtonBase,
  Grid,
  Container,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import i18n from "../Trans/i18";

import Example from "../Nav/Example";

function Header(props) {
  const styles = {
    toolBar: {
      width: "100%",
      height: "100px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#fff",
    },

    iconbtn: {
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%)",
      p: "5%",
      height: "50px",
      width: "28px",
      cursor: "pointer",
      color: "#1C7ED6",
    },

    consolBox: {
      color: "white",
      backgroundColor: "#1C7ED6",
      height: "100px",
      width: "350px",
      display: { xs: "none", md: "block" },
      transform: { xs: "0", md: "translateX(48px)" },
      paddingTop: "25px",
      textAlign: "center",
      borderRadius: "75px  0  0  75px",
    },
  };

  const [isLang, setIsLang] = useState(false);
  function toggleLang() {
    setIsLang(!isLang);
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    toggleLang();
  };

  return (
    <Grid>
      <Container maxWidth="xl">
        <Toolbar sx={styles.toolBar}>
          <Box display={"flex"} gap={5} pl={3}>
            {/* <IconButton onClick={props.toggleMenu} disableRipple edge="start" aria-label="menu" sx={styles.iconbtn}>
                <MenuIcon sx={{fontSize: '40px'}} />
            </IconButton> */}
            <Box>
              <Example />
            </Box>
          </Box>
          <ButtonBase disableRipple component={Link} to="/">
            <Typography
              textAlign="center"
              color="#1C7ED6"
              fontWeight="700"
              fontSize={{ xs: "30px", md: "56px" }}
              letterSpacing="1px"
              textTransform="none"
            >
              CereSoftware
            </Typography>
          </ButtonBase>
          <Box sx={{display: "flex" , justifyContent: "center", alignItems: "center"}}>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              {!isLang ? (
                <Button
                  onClick={() => changeLanguage(["ar"])}
                  edge="start"
                  aria-label="menu"
                  sx={styles.iconbtn}
                >
                  Ar
                </Button>
              ) : (
                <Button
                  onClick={() => changeLanguage(["en"])}
                  edge="start"
                  aria-label="menu"
                  sx={styles.iconbtn}
                >
                  EN
                </Button>
              )}
            </Box>
            <Box sx={styles.consolBox}>
              <ButtonBase
                disableRipple
                component={Link}
                to={
                  "https://docs.google.com/forms/d/e/1FAIpQLSc06Ia33TVW3HCjiHIu9O06PwuDJzT551UmUDLuiQPxPDSwkA/viewform?usp=sf_link"
                }
              >
                <Typography fontSize="34px" color="white">
                  CONSULTATION
                </Typography>
              </ButtonBase>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </Grid>
  );
}

export default Header;
