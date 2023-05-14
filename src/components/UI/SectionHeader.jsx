import React from "react";
import { Typography, Box, useTheme, Stack } from "@mui/material";


const SectionHeader = ({ header }) => {
  const theme = useTheme();
  return (
    <Stack alignItems="center">
      <Box >
        <Typography variant="h1" sx={{ fontSize: "48px" ,fontWeight:600}}>
          {header}
        </Typography>
        <Box className="lines" >
          <Box
            className="first-line"
            sx={{
              backgroundColor: theme.palette.primary.main,
              width: "50%",
              marginLeft: "auto",
              borderRadius: "80px",
            }}
            height="12px"
          ></Box>
          <Box
            className="second-line"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              width: "50%",
              borderRadius: "80px",
            }}
            height="12px"
          ></Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default SectionHeader;
