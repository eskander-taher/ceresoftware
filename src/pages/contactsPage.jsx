import {  Box } from "@mui/system";
import { Grid } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import React from "react";
import Section from "../components/UI/section/Section";

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

import EmailIcon from '@mui/icons-material/Email';
import { withNamespaces } from 'react-i18next';



function ContactsPage({t}){
    const pageStyles = {
        iconStyle : {
            height: '100px',
            width: '80px',
            cursor: 'pointer',
            color:'#1C7ED6',
            },
        boxStyling:{
            height:'300px',
            width:'300px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center', 
            borderRadius:'50px', 
            boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.1)",
            '&:hover':{
                backgroundColor:'#FFD8A8',
        }}
    } 

    const contacts = [
        
            {
                  id:1,
                  icon:<InstagramIcon sx={pageStyles.iconStyle}/>,
                  link:'https://www.instagram.com/ceresoftware/'
                 
              },
            {
                  id:2,
                  icon:<TwitterIcon sx={pageStyles.iconStyle}/>,
                  link:'https://twitter.com/CereSoftware'
                 
              },
            {
                  id:3,
                  icon:<FacebookIcon sx={pageStyles.iconStyle}/>,
                  link:'https://www.facebook.com/CereSoftware-119924661071564'
                
              },
              
            {
                id:4,
                icon:<EmailIcon sx={pageStyles.iconStyle}/>,
                link:'mailto:ceresoftware@gmail.com'
              
            },
            ]

        const ContactItems = contacts.map(item => 
            <Box sx={pageStyles.boxStyling}>
                <IconButton href={item.link} target="_blank"> 
                    {item.icon}
                </IconButton>
                
            </Box>)


    return(
        <Section header={t("Contact Us")}>
            <Grid container gap='120px' justifyContent='center' alignItems='center'>
                {ContactItems}
            </Grid>
        </Section>
    )
}
export default withNamespaces()(ContactsPage)