import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Pic from "./Pic.svg";
import web from './web.svg'
import { Link} from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import { motion } from "framer-motion";
import './style.css'

 function Hero({t}) {
  const styles = {
    box1: {
      height: { xs: "400px", md: "70%", lg: "100%" },
      width: { xs: "100%", md: "45%", lg: "50%" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      pl: { xs: "10%", sm: "13%", md: "8%", lg: "10%" },
      mt:{xs: "-13%", sm: "-13%", md: "-0%", lg: "-10%"}
    },
    btn: {
      height: { xs: "60px", md: "50px", lg: "50px" },
      width: { xs: "140px", sm: "170px", md: "150px", lg: "170px" },
      borderRadius: "20px",
      backgroundColor: "#4998de",
      color: "#fff",
      fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "18px"},
      fontWeight: "700",
      ml: "20px",

      "&:hover": {
        backgroundColor: "#495057",
        color: "white",
        transition: "0.3s",
        transform: "scale(1.1)",
      },
    },
    btn2: {
      height: { xs: "60px", md: "50px", lg: "50px" },
      width: { xs: "140px", sm: "170px", md: "150px", lg: "170px" },
      borderRadius: "20px",
      backgroundColor: "#ffe0b9",
      color: "#495057",
      fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "18px" },
      fontWeight: "700",

      "&:hover": {
        backgroundColor: "#495057",
        color: "white",
        transition: "0.3s",
        transform: "scale(1.1)",
      },
    },
  };

  const visible = { opacity: 1, y: 0, transition: { duration: 2 } };

        const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible
        };

  

  return (
    <Stack
      justifyContent={{ xs: "flex-start", sm: "center", lg: "center" }}
      alignItems={{ xs: "center", sm: "center", lg: "center" }}
      
    >

      <Grid
        container
        maxWidth="1519px"
        height={{ xs: "100%", lg: "500px" }}
        justifyContent={{ xs: "flex-start", sm: "center", lg: "center" }}
        alignItems={{ xs: "flex-start", sm: "center", lg: "center" }}
      >
        <Box sx={styles.box1}>
        <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 2 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      
      style={{
        width:'100%', 
      }}
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0 },
          visible
        }}

        style={{
        width:'100%', 
      }}

      >
        <Typography
            fontSize={{ xs: "36px", sm: "44px", md:'36px', lg: "54px", xl: "6opx" }}
            fontWeight="700"
            color="#212529"
          >
            {t("Web And Mobile Applications")}
          </Typography>
      </motion.h1>
      <ul width='100%'>
        <motion.li variants={itemVariants} style={{width:'100%' , pr:{lg: "4%"}, }} >
        <Typography
            fontSize={{ xs: "24px", md:'24px', lg: "34px" }}
            fontWeight="500"
            pr={{lg: "4%"}}
            color="#495057"
          >
            {t("Take your first step")} <br></br>{(" Bulid Your Business")}
          </Typography>
        </motion.li>
        <motion.li variants={itemVariants} style={{width:'100%'}}>
        <Box width={'100%'} display={'flex'}>
          <Button
            component={Link}
            to={
              "https://docs.google.com/forms/d/e/1FAIpQLSc06Ia33TVW3HCjiHIu9O06PwuDJzT551UmUDLuiQPxPDSwkA/viewform?usp=sf_link"
            }
            sx={styles.btn2}
          >
            {t("start now")}
          </Button>
          <Button
            component={Link}
            to={
              "#"
            }
            sx={styles.btn}
          >
            {t("contact us")}
          </Button>
          </Box>
        </motion.li>
      </ul>
    </motion.article>

        </Box>
        <Box
          sx={{
            width: { xs: "0", md: "55%", lg: "50%" },
            height: { xs: "0", md: "100%", lg: "100%" },
            pr: "80px",
            display: { xs: "none", md: "block", lg: "block" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        <motion.div
      initial={{ opacity: 0, y: -50 }} // Initial animation state
      animate={{ opacity: 1, y: 85 }} // Animation on page load
      transition={{ duration: 1, delay: 0.5 }} // Animation duration and delay
    >
          <img width="100%" height="100%" src={web} alt="software services" />
          </motion.div>
        </Box>
        
      </Grid>
    </Stack>
  );
}

export default withNamespaces()(Hero)