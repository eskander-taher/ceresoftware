import { Box, ButtonBase, List, ListItem  } from "@mui/material";
import React from "react";
import { Link} from "react-router-dom";
import { withNamespaces } from 'react-i18next';

function Nav({t}) {
  const navItems = [
    { item: "Home", link: "/" },
    { item: "About Us", link: "/Abotus" },
    { item: "Our Projects", link: "/ProjectsPage" },
    { item: "Contact Us", link: "/ContactsPage" },
  ];

  const navStyles = {
    listText: {
      fontSize: "20px",
      textTransform: "uppercase",
      fontWeight: "600",
      color: "#1C7ED6",
      p:'10px',
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
      <ButtonBase component={Link} disableRipple disableFocusRipple to={newItem.link} sx={navStyles.listText}>
        {t(newItem.item)}
      </ButtonBase>
    </ListItem>
  ));

  return (
    <Box>
      <List sx={{ height: "fit-content", background: "#fff" }}>{newItems}</List>
    </Box>
  );
}

export default withNamespaces()(Nav)
