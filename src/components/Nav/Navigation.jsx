import  React, { useState } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import {  Button  } from "@mui/material";
import i18n from '../Trans/i18'; 

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const styles={

  iconbtn:{
      height: '70px',
      width: '200px',
      cursor: 'pointer',
      color:'white',
      border:'2px solid #fff',
      ml:-2,
      fontSize: '28px',
  },

}


export const Navigation = ({ toggle, isOpen }) => {


  const [isLang, setIsLang] = useState(false)
    function toggleLang(){
        setIsLang(!isLang)
    }
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        toggleLang();
      }


  return (
    <motion.ul
      style={{ display: isOpen ? "block" : "none" }}
      variants={variants}
    >
      {navItems.map(({ item, link }, i) => (
        <MenuItem text={item} link={link} key={i} toggle={toggle} />
      ))}

      {!isLang? <Button onClick={() => changeLanguage(['ar'])} edge="start" aria-label="menu" sx={styles.iconbtn}>
                        Arabic
                    </Button>:<Button onClick={() => changeLanguage(['en'])} edge="start" aria-label="menu" sx={styles.iconbtn}>
                        English
                    </Button>}
    </motion.ul>
  );
};

const navItems = [
  { item: "Home", link: "/" },
  { item: "About Us", link: "/Abotus" },
  { item: "Our Projects", link: "/ProjectsPage" },
  { item: "Contact Us", link: "/ContactsPage" },
];