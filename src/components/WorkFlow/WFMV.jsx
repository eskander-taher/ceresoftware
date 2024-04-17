import { Typography, Box} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Wfitem from "./WFitem";
import Wfdata from "./data";
import { withNamespaces } from 'react-i18next';
import {motion} from "framer-motion"

function WFMV({t}){
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
        
            <Stack direction='column' justifyContent='center' alignItems='center' spacing={3}>
                <Box sx={WFStyles.circle}><Typography variant="h2" textAlign='center'>1</Typography></Box>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} >
                <Wfitem key={Wfdata.item1.id} name={t(Wfdata.item1.name)} text={t(Wfdata.item1.text)}/>
                </motion.div>
                <Box sx={WFStyles.circle}><Typography variant="h2" textAlign='center'>2</Typography></Box>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} >
                <Wfitem key={Wfdata.item2.id} name={t(Wfdata.item2.name)} text={t(Wfdata.item2.text)}/>
                </motion.div>
                <Box sx={WFStyles.circle}><Typography variant="h2" textAlign='center'>3</Typography></Box>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} >
                <Wfitem key={Wfdata.item3.id} name={t(Wfdata.item3.name)} text={t(Wfdata.item3.text)}/>
                </motion.div>
                <Box sx={WFStyles.circle}><Typography variant="h2" textAlign='center'>4</Typography></Box>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} >
                <Wfitem key={Wfdata.item4.id} name={t(Wfdata.item4.name)} text={t(Wfdata.item4.text)}/>
                </motion.div>
                <Box sx={WFStyles.circle}><Typography variant="h2" textAlign='center'>5</Typography></Box>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} >
                <Wfitem key={Wfdata.item5.id} name={t(Wfdata.item5.name)} text={t(Wfdata.item5.text)}/>
                </motion.div>
                <Box sx={WFStyles.circle}><Typography variant="h2" textAlign='center'>6</Typography></Box>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} >
                <Wfitem key={Wfdata.item6.id} name={t(Wfdata.item6.name)} text={t(Wfdata.item6.text)}/>
                </motion.div>
            </Stack>
        
    )
}
export default withNamespaces()(WFMV)