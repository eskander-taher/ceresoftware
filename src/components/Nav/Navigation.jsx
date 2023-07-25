import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle, isOpen }) => {
  return (
    <motion.ul
      style={{ display: isOpen ? "block" : "none" }}
      variants={variants}
    >
      {navItems.map(({ item, link }, i) => (
        <MenuItem text={item} link={link} key={i} toggle={toggle} />
      ))}
    </motion.ul>
  );
};

const navItems = [
  { item: "Home", link: "/" },
  { item: "About Us", link: "/Abotus" },
  { item: "Our Projects", link: "/ProjectsPage" },
  { item: "Contact Us", link: "/ContactsPage" },
];
