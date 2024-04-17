import { Typography, Box} from "@mui/material";
import React from "react";



export default function Wfitem( props){
    
    const Styles = {
        Box :{
            width:'400px',
            height:{md:'150px'},
            p:{xs:'0 15px', md:'10px'},
        }
    }


    return(
        <Box sx={Styles.Box}>
            <Typography variant="h3" color='#1C7ED6' textAlign={{xs:'center',md:'left'}} lineHeight='38px' fontWeight='600'>{props.name}</Typography>
            <Typography fontSize='20px' textAlign={{xs:'center',md:'left'}}  fontWeight='400'>{props.text}</Typography>
        </Box>
        )      
    
}