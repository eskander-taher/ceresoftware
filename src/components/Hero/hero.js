// import  { Suspense } from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Pic from "./Pic.svg";

import { Link} from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import { motion } from "framer-motion";
import i18n from '../Trans/i18'

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
 
 function Hero({t}) {
  const styles = { 
    box1: {
      height: { xs: "470px", md: "70%", lg: "80%" },
      width: { xs: "410px", md: "50%", lg: "50%" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      pl: { xs: "23%", sm: "13%", md: "13%", lg: "14%" },
      pb:"10%"
    },
    btn: {
      height: { xs: "80px", lg: "107px" },
      width: { xs: "220px", sm: "250px", md: "300px", lg: "350px" },
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


  return (
    <Stack
      justifyContent={{ xs: "flex-start", sm: "center", lg: "center" }}
      alignItems={{ xs: "flex-start", sm: "center", lg: "center" }}
      width='94%'
    >
      <Grid
        container
        maxWidth="100%"
        mt={{ xs: 10, lg: "3%" }}
        height={{ xs: "100%", lg: "600px" }}
        justifyContent={{ xs: "flex-start", sm: "center", lg: "center" }}
        alignItems={{ xs: "flex-start", sm: "center", lg: "center" }}
      >
        <Box sx={styles.box1}>
          <motion.div
            animate={{
              x: 0,
            }}
            initial={{
              x: -500,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
          >
            <Typography
              fontSize={{ xs: "36px", sm: "39px", lg: "54px", xl: "6opx" }}
              fontWeight="700"
              pt={{ xs: 8, lg: 12 }}
              pb={{ xs: "2%", sm: "5%", md: "3%", lg: "4%" }}
              color="#212529"
              textAlign={i18n.language === 'en'? 'left':'right'}
            >
              {t("Web And Mobile Applications")}
            </Typography>
            <Typography
              fontSize={{ xs: "28px", lg: "40px" }}
              fontWeight="700"
              pb={{ xs: "2%", sm: "5%", md: "3%", lg: "4%" }}
              color="#495057"
              textAlign={i18n.language === 'en'? 'left':'right'}
            >
              {t("Bulid Your Projects")}
            </Typography>
            <Button
              component={Link}
              to={
                "https://docs.google.com/forms/d/e/1FAIpQLSc06Ia33TVW3HCjiHIu9O06PwuDJzT551UmUDLuiQPxPDSwkA/viewform?usp=sf_link"
              }
              sx={styles.btn}
            >
              {t("start now")}
            </Button>
          </motion.div>
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
          <motion.div
            animate={{
              x: 0,
            }}
            initial={{
              x: 500,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
          >
            <img width="100%" height="100%" src={Pic} alt="software services" />
            <Box
              sx={{
                width: "800px",
                height: "800px",
                position:"absolute",
                top: "100px",
                zIndex: -1
              }}
            >
              {/* <Canvas>
                <Suspense fallback={null}>
                  <OrbitControls enableZoom={false} />
                  <ambientLight intensity={1} />
                  <directionalLight position={[3, 2, 1]} />
                  <Sphere args={[1, 100, 200]} scale={2.8}>
                    <MeshDistortMaterial
                      color="#1c7ed6"
                      attach="material"
                      distort={0.3}
                      speed={2.5}
                    />
                  </Sphere>
                </Suspense>
              </Canvas> */}
              </Box>
          </motion.div>
        </Box>
      </Grid>
    </Stack>
  );
}

export default withNamespaces()(Hero)