import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Pic from "./Pic.svg";
import BGPic from "./bgHERO.svg";

export default function Hero() {
  const styles = {
    box1: {
      background: `url('${BGPic}')`,
      backgroundPosition: "center",
      backgroundPositionX: { lg: "90px" },
      backgroundRepeat: "no-repeat",
      backgroundSize: { xs: "85%", sm: "100%", md: "70%", lg: "73%" },
      height: { xs: "470px", md: "70%", lg: "80%" },
      width: { xs: "410px", md: "50%", lg: "50%" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      pl: { xs: "23%", sm: "13%", md: "13%", lg: "14%" },
    },
    btn: {
      height: { xs: "80px", lg: "107px" },
      maxWidth: { xs: "220px", sm: "250px", md: "300px", lg: "350px" },
      borderRadius: "60px",
      backgroundColor: "#1C7ED6",
      color: "white",
      fontSize: { xs: "24px", lg: "32px" },
      fontWeight: "700",

      "&:hover": {
        backgroundColor: "#495057",
        color: "white",
        transition: "0.3s",
        transform: "scale(1.1)",
      },
    },
  };

  const link = "/ConsolForm";

  return (
    <Stack
      justifyContent={{ xs: "flex-start", sm: "center", lg: "center" }}
      alignItems={{ xs: "flex-start", sm: "center", lg: "center" }}
    >
      <Grid
        container
        maxWidth="1519px"
        mt={{ xs: 10, lg: "3%" }}
        height={{ xs: "100%", lg: "600px" }}
        justifyContent={{ xs: "flex-start", sm: "center", lg: "center" }}
        alignItems={{ xs: "flex-start", sm: "center", lg: "center" }}
      >
        <Box sx={styles.box1}>
          <Typography
            fontSize={{ xs: "36px", sm: "39px", lg: "54px", xl: "6opx" }}
            fontWeight="700"
            pt={{ xs: 8, lg: 12 }}
            pb={{ xs: "2%", sm: "5%", md: "3%", lg: "4%" }}
            color="#212529"
          >
            Web And Mobile Applications
          </Typography>
          <Typography
            fontSize={{ xs: "28px", lg: "40px" }}
            fontWeight="700"
            pb={{ xs: "2%", sm: "5%", md: "3%", lg: "4%" }}
            color="#495057"
          >
            Bulid Your Projects
          </Typography>
          <Button
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSc06Ia33TVW3HCjiHIu9O06PwuDJzT551UmUDLuiQPxPDSwkA/viewform?usp=sf_link"
            }
            sx={styles.btn}
          >
            start now
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: "0", md: "50%", lg: "50%" },
            height: { xs: "0", md: "70%", lg: "80%" },
            pr: "80px",
            display: { xs: "none", md: "block", lg: "block" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img width="100%" height="100%" src={Pic} alt="software services" />
        </Box>
      </Grid>
    </Stack>
  );
}
