import React from 'react';
import  {Toolbar, Typography, IconButton, ButtonBase, Grid,Container} from '@mui/material'
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu'



export default function Header(props){
    
    const styles={
        toolBar:{
            width:'100%',
            height:'100px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent:"space-between",
            backgroundColor:'#fff',
        },

        iconbtn:{
            p: '5%',
            height: '50px',
            width: '28px',
            cursor: 'pointer',
            color:'#1C7ED6'},

        consolBox:{
            color: 'white',
            backgroundColor: '#1C7ED6',
            height:'100px',
            width:'350px',
            display:{xs:'none', md:'block'},
            transform:{xs:'0',md:'translateX(50px)'},
            paddingTop: '25px',
            textAlign: 'center',
            borderRadius: '75px  0  0  75px',}
    }

    return(
        
        <Grid>
        <Container maxWidth="xl">
            <Toolbar sx={styles.toolBar}>
                <IconButton onClick={props.toggleMenu} edge="start" aria-label="menu" sx={styles.iconbtn}>
                <MenuIcon sx={{fontSize: '40px'}} />
            </IconButton>
                    <ButtonBase disableRipple  href='/'><Typography textAlign='center' color='#1C7ED6' fontWeight='700' fontSize={{xs:'36px',md:'56px'}} letterSpacing='1px' textTransform='none'>CereSoftware</Typography></ButtonBase>
                    <Box sx={styles.consolBox}><Typography fontSize='34px' color='white'>CONSOLTATION</Typography></Box>
            </Toolbar>
            </Container>
        </Grid>
        
    )
}