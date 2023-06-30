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
        '&:hover': {
          transform:'scale(1.03)',
        },
        borderRadius: "50px",
        width: 600,
        height: 350,
        boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        flexWrap:"wrap",
        alignItems: "center",
        position: "relative",
        overflow: "visible",
        marginTop: "100px",
        transition: 'all 0.5s ease;'
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{
          '&:hover': {
            transform:'scale(0.90)',
            position: "absolute",
          top: "-100px",
          },
          borderRadius: "50px",
          width: "600px",
          height: "350px",
          transition: 'all 0.5s ease;'

          
        }}
      />
      <CardContent 
        sx={{ position: "absolute", 
              zIndex: '-1', 
              top:"245px",
              '&:hover': {
                // zIndex: '1',
              },}}>
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
