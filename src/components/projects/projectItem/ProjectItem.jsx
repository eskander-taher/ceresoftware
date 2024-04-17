import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";


const ProjectItem = ({ name, description, image, color, isOpen, onToggle }) => {


  return (
    <>
    {isOpen? (<Card
      sx={{
        width: 350,
        height: 400,
        boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: 'flex-end',
        flexDirection: "column",
        alignItems: "flex-end",
        background:`url(${image})`,
        color:'#fff'
      }}

      onClick={onToggle}
    >
      <CardContent sx={{ backgroundColor: color , width:'100%', height:'22%', opacity:'0.8',  }}>
        <Typography
          variant="h4"
          sx={{ fontSize: 28, fontWeight: 700 , filter:"brightness(150%)"}}
        >
          {name}
        </Typography>
        <Typography
            variant="p"
            gutterBottom
            sx={{ color: "#FFFFFF", opacity: 1 }}
          >
            {description}
          </Typography>
      </CardContent>
    </Card>):(<Card
      sx={{
        width: 250,
        height: 400,
        boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "visible",
        backgroundColor:'#1c7ed6',
        color:'#fff',
        "&:hover": {
        backgroundColor: color,
      },
      }}

      onClick={onToggle}
    >
      <CardContent sx={{ }}>
        <Typography
          variant="h4"
          sx={{ fontSize: 28, fontWeight: 700 }}
          gutterBottom
        >
          {name}
        </Typography>
      </CardContent>
    </Card>)}

    </>
  );
};

export default ProjectItem;
