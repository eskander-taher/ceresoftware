import { Typography, Box, Grid} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Wfitem from "./WFitem";
import Wfdata from "./data";

export default function WFMV(){
    const WFStyles = {
        circle:{
            width:'64px',
            height:'64px',
            backgroundColor:'#1C7ED6',
            border:'5px solid #A5D8FF',
            borderRadius:'50%',
            color:'#fff',
            pt:'5px'
        },
    }

    return(
        <Grid  justifyContent='center'  container>
            <Stack direction='column' justifyContent='center' alignItems='center' spacing={3}>
                <Box sx={WFStyles.circle}><Typography variant="h2" textAlign='center'>1</Typography></Box>
                <Wfitem key={Wfdata.item1.id} name={Wfdata.item1.name} text={Wfdata.item1.text}/>
                <Box sx={WFStyles.circle}><Typography variant="h2" textAlign='center'>2</Typography></Box>
                <Wfitem key={Wfdata.item2.id} name={Wfdata.item2.name} text={Wfdata.item2.text}/>
                <Box sx={WFStyles.circle}><Typography variant="h2" textAlign='center'>3</Typography></Box>
                <Wfitem key={Wfdata.item3.id} name={Wfdata.item3.name} text={Wfdata.item3.text}/>
                <Box sx={WFStyles.circle}><Typography variant="h2" textAlign='center'>4</Typography></Box>
                <Wfitem key={Wfdata.item4.id} name={Wfdata.item4.name} text={Wfdata.item4.text}/>
                <Box sx={WFStyles.circle}><Typography variant="h2" textAlign='center'>5</Typography></Box>
                <Wfitem key={Wfdata.item5.id} name={Wfdata.item5.name} text={Wfdata.item5.text}/>
                <Box sx={WFStyles.circle}><Typography variant="h2" textAlign='center'>6</Typography></Box>
                <Wfitem key={Wfdata.item6.id} name={Wfdata.item6.name} text={Wfdata.item6.text}/>
            </Stack>
        </Grid>
    )
}