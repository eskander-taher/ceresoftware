import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
const TechnologyItem = ({ name, icon }) => {
  const [isColored, setIsColored] = useState(false);

  const toggleColor = () => {
    setIsColored(!isColored);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width:'100%',
        height:"100%"
      }}
    >
      <Box onMouseEnter={toggleColor} onMouseLeave={toggleColor}>
        {icon(isColored)}
      </Box>
      <Typography sx={{ fontWeight: 600 }}>{name}</Typography>
    </Box>
  );
};

export default TechnologyItem;
