
import { Typography, Card, CardContent, Grid} from "@mui/material";
import React from "react";
import ServiceData from "./serviceData";
import { withNamespaces } from 'react-i18next';



function Services({t}){
    const Styles ={
        cardStyle:{
            height:{xs:'400px',sm:'400px', md:'450px',lg:'450px', xl:'450px'},
            width:{xs:'300px',sm:'300px',md:'300px',lg:'350px', xl:'350px'},
            borderRadius:'50px',
            boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.1)",
            transition:'0.3s',
            '&:hover':{transform:'scale(1.1)'},
            '&:hover #card1':{backgroundColor:'#FFD8A8'},
            '&:hover #card2':{backgroundColor:'#1C7ED6', color:'#fff'},
            '&:hover #icon':{color:'#000'}
        },

        cardContent1:{
            height:'230px',
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            p: "20px 30px 0 30px",
            justifyContent:'space-between',
            transition:'0.3s'
            
        }, 

        cardContent2:{
            height:'220px',
            p:'30px',
            color:'#343A40',
            transition:'0.3s',
        } 
    }

    const serviceItems = ServiceData.map(item => 
        <Card key={item.id} sx={Styles.cardStyle}>
            
            <CardContent sx={Styles.cardContent1} id="card1">
                {item.icon}
                <Typography fontSize={{xs:'28px', sm:'28px', md:'32px', lg:'34px', xl:'34px'}} fontWeight='500' lineHeight='50px' maxWidth='277px'>{t(item.name)}</Typography>
            </CardContent>
            <CardContent sx={Styles.cardContent2} id="card2">
                <Typography  fontSize={{xs:'22px', sm:'22px', md:'26px', lg:'30px', xl:'30px' }} lineHeight='33px'>{t(item.text)}</Typography>
            </CardContent>
            
        </Card>)

    return(
        <Grid container  sx={{width:'100%',}}  justifyContent='center' alignItems={{xs:'center'}} gap={{xs:"35px", md:'50px', lg:'100px'}}>
           {serviceItems}
        </Grid>

    )}

    export default withNamespaces()(Services)