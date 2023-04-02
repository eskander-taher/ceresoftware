import { Box, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";

export default function Nav() {
  const navItems = [
    { item: "Home", link: "/" },
    { item: "About us", link: "/Abotus" },
    { item: "Our Projects", link: "/ProjectsPage" },
    { item: "Contact Us", link: "/ContactsPage" },
  ];

  const navStyles = {
    listText: {
      fontSize: "20px",
      textTransform: "uppercase",
      fontWeight: "600",
      color: "#1C7ED6",
      "&:hover": {
        color: "#FFD8A8",
      },
    },
    listItem: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      gap: "10px",
    },
  };

  const newItems = navItems.map((newItem, index) => (
    <ListItem key={index} sx={navStyles.listItem}>
      <ListItemButton to={newItem.link} sx={navStyles.listText}>
        {newItem.item}
      </ListItemButton>
    </ListItem>
  ));

  return (
    <Box>
      <List sx={{ height: "fit-content", background: "#fff" }}>{newItems}</List>
    </Box>
  );
}
