import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    useTheme,
  } from "@mui/material";
  import React from "react";
  
  const ProjectItem = ({ name, description, image }) => {
        const theme = useTheme();
  
    return (
      <Card
        sx={{
          borderRadius: "50px",
          width: 350,
          height: 275,
          boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "visible",
          marginTop: "100px",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            borderRadius: "50%",
            width: "250px",
            height: "250px",
            position: "absolute",
            top: "-100px",
          }}
        />
        <CardContent sx={{ marginTop: "140px" }}>
          <Typography
            variant="h4"
            sx={{ fontSize: 28, fontWeight: 700 }}
            gutterBottom
          >
            {name}
          </Typography>
          <Typography
            variant="p"
            gutterBottom
            sx={{ color: theme.palette.text.secondary }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default ProjectItem;
  