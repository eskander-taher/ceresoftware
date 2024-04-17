import React, { useState } from 'react';
import  {Toolbar, Typography, IconButton, ButtonBase, Grid,Container, Button} from '@mui/material'
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu'
import { Link} from "react-router-dom";
import i18n from '../Trans/i18'; 
import Example from "../Nav/Example";
import { motion } from "framer-motion";
import { BorderBottom } from '@mui/icons-material';



function Header(props){
    

    const styles={
        toolBar:{
            width:'90%',
            height:'100px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent:"space-between",
            backgroundColor:'#fff',
            borderBottom: '3px solid #ffd8a8'
        },
         container:{
            display: 'flex',
            justifyContent:"center",
        },

        iconbtn:{
            height: '50px',
            width: '28px',
            cursor: 'pointer',
            color:'#1C7ED6',
            ml:2
        },

        consolBox:{
            color: 'white',
            backgroundColor: '#1C7ED6',
            height:'70px',
            width:'250px',
            display:{xs:'none', md:'flex'},
            borderRadius: 4,
            justifyContent:'center',
            mr: -3}
    }

    const [isLang, setIsLang] = useState(false)
    function toggleLang(){
        setIsLang(!isLang)
    }
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        toggleLang();
      }

      


    return(
        <Container maxWidth='xl' sx={styles.container}>

            <Toolbar sx={styles.toolBar}>
            <Box display={"flex"} gap={5} mt={-3}>
            {/*<IconButton onClick={props.toggleMenu} disableRipple edge="start" aria-label="menu" sx={styles.iconbtn}>
                <MenuIcon sx={{fontSize: '40px'}} />
            </IconButton>*/}
                    <Example/>
                    {!isLang? <Button onClick={() => changeLanguage(['ar'])} edge="start" aria-label="menu" sx={styles.iconbtn}>
                        Ar
                    </Button>:<Button onClick={() => changeLanguage(['en'])} edge="start" aria-label="menu" sx={styles.iconbtn}>
                        EN
                    </Button>}
            </Box>
           
                <ButtonBase disableRipple component={Link}  to='/'>
                <Typography sx={{filter:'brightness(97%)'}} textAlign='center' color='#ffd8a8' fontWeight='700' fontSize={{xs:'32px',md:'56px'}} letterSpacing='1px' textTransform='none'>
                        Cere</Typography>
                    <Typography textAlign='center' color='#1C7ED6' fontWeight='700' fontSize={{xs:'32px',md:'56px'}} letterSpacing='1px' textTransform='none'>
                        Software</Typography>
                </ButtonBase>
            
                <Box sx={styles.consolBox}><ButtonBase disableRipple component={Link} to={
                "https://docs.google.com/forms/d/e/1FAIpQLSc06Ia33TVW3HCjiHIu9O06PwuDJzT551UmUDLuiQPxPDSwkA/viewform?usp=sf_link"
                }>
                
                <Typography fontSize='24px' color='white' textAlign={'center'}>CONSOLTATION</Typography></ButtonBase>
                </Box>
            </Toolbar>
        </Container>
        
        
    )
}

export default Header