import React from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Nav from "./components/Nav/nav";
import Home from "./pages/home/Home";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import ProjectsPage from "./pages/ProjectsPage";
import ContactsPage from "./pages/contactsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConsolForm from "./pages/consolForm";
import AboutUs from "./pages/AboutUs";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleMenu={toggleMenu} />
      {isOpen ? <Nav /> : null}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Abotus" element={<AboutUs />} />
          <Route path="/ProjectsPage" element={<ProjectsPage />} />
          <Route path="/ContactsPage" element={<ContactsPage />} />
          <Route path="/ConsolForm" element={<ConsolForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
