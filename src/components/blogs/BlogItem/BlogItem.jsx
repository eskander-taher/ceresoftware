import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";

const BlogItem = ({ name, description, date, image }) => {
  const theme = useTheme();
  return (
    
    <Card
      sx={{
        borderRadius: "50px",
        width: 350,
        height: 450,
        boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.1)",
      }}
    >
      <CardMedia component="img" height="250px" image={image} alt={name} />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "14px 28px",
        }}
      >
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
        <Typography variant="p" sx={{ color: theme.palette.text.secondary }}>
          {date}
        </Typography>
      </CardContent>
    </Card>
    
  );
};

export default BlogItem;
