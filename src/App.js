
import React, { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Nav from "./components/Nav/nav";
import Home from "./pages/home/Home";
import { ThemeProvider, CssBaseline, Box, Container} from "@mui/material";
import theme from "./theme";
import ProjectsPage from "./pages/ProjectsPage";
import ContactsPage from "./pages/contactsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConsolForm from "./pages/consolForm";
import AboutUs from "./pages/AboutUs";
import Logo from './components/Header/LogoSVG.svg';


function App() {

  const [isOpen, setIsOpen] = useState(false);

    function toggleMenu(){
        setIsOpen(prevState =>!prevState)
    }

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the time (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
    {isLoading? (<Container sx={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <Box
        disableRipple
        href="/"
        sx={{
          height: {xs:"20%", md:'30%'},
          width: {xs:"100%", md:'50%'},
          background: `url(${Logo})`,
          backgroundSize: "100% 100%",
        }}
      ></Box>
      </Container>):
    (<ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleMenu={toggleMenu}/>
        {isOpen? <Nav/>: null}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Abotus" element={<AboutUs/>} />
          <Route path="/ProjectsPage" element={<ProjectsPage/>} />
          <Route path="/ContactsPage" element={<ContactsPage/>} />
          <Route path="/ConsolForm" element={<ConsolForm/>} />
        </Routes>
        <Footer />
    </ThemeProvider>)}
    </BrowserRouter>
  );
}

export default App;
