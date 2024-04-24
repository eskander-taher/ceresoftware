import React from 'react';

import { Box, List, ListItem, Typography ,Stack,  IconButton, Container, ButtonBase} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link} from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import Logo from  '../Header/LogoSVG.svg'

 function Footer({t}){
    
    const footerItems = [{id:1 ,item:"Home", link:'/'}, {id:2, item:"About", link:'/Abotus'}, {id:3 , item:"Projects", link:'/ProjectsPage'}, {id:4 ,item:"Contacts", link:'/ContactsPage'}]

    const currentYear = new Date().getFullYear();

    const footerStyles ={
        iconStyle:{ 
            padding: '0.4rem',
            fontSize: '50px',
            color:'#FFFFFF',
            '&:hover' :{
            color: '#FFD8A8',
        }},

        iconsBox:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '300px',
            height: '50px',
            fontSize: '30px'},

            listText : {
                fontSize:{xs:'13px',md:'18px'},
                textTransform: 'uppercase',
                fontWeight: '600',
                color: '#fff',
                '&:hover':{
                color: '#FFD8A8'} 
            }, 

            listItem :{
                textAlign: 'center',
                color:'#FFFFFF' }
    };

    const newFooterItems = footerItems.map((newFooterItem, index) => (
      <ListItem key={index} sx={footerStyles.listItem}>
        <ButtonBase component={Link} disableRipple disableFocusRipple to={newFooterItem.link} sx={footerStyles.listText}>
          {t(newFooterItem.item)}
        </ButtonBase>
      </ListItem>
    ));

    return(
        
        <Stack  height={{xs:'100%',lg:'300px'}}    position='static' bottom={0}   sx={{
            boxSizing: 'border-box',
            backgroundColor: '#1C7ED6',
            color: '#FFFFFF'
        }}>
        <Container  maxWidth="xl">
        <Stack direction={{md:'row',lg:'row'}} justifyContent='space-evenly' alignItems='center' spacing={{xs:'20px', lg:'100px'}} p={{xs:'50px', lg:'30px 0 0'}}>
            <Box  display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                
                <Box sx={{display:'flex', flexDirection:'row', }}  >
                        {newFooterItems}
                </Box>
                
                <Typography textAlign='center' color='#FFFFFF' fontWeight='700' fontSize={{xs:'48px',lg:'60px' }} letterSpacing='1px'>CereSoftware</Typography>
                &copy; Copyright {currentYear}
            </Box>

            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2} >
            <Box width={200} height={160} sx={{backgroundColor:'white'}} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={3}>
                <img width="90%" height="98%" src={Logo} alt="Logo" />
            </Box>
            
            <Box sx={footerStyles.iconsBox}>
                <IconButton href='https://twitter.com/CereSoftware'>
                    <TwitterIcon sx={footerStyles.iconStyle}/>
                </IconButton>
                <IconButton href='https://www.facebook.com/CereSoftware-119924661071564'>
                    <FacebookIcon sx={footerStyles.iconStyle}/>
                </IconButton>
                <IconButton href='https://www.instagram.com/ceresoftware/'>
                    <InstagramIcon sx={footerStyles.iconStyle}/>
                </IconButton>
                <IconButton href='mailto:ceresoftware@gmail.com'>
                    <EmailOutlinedIcon sx={footerStyles.iconStyle} />
                </IconButton>
                </Box>
            </Box>
            </Stack>
            </Container>
            </Stack>
            
    )
}

export default withNamespaces()(Footer)