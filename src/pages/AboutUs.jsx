import React from "react";
import Section from "../components/UI/section/Section";
import { Typography} from "@mui/material";
import { withNamespaces } from 'react-i18next';




function AboutUs({t}){

   

    return(
        <Section header={t("About Us")}>
            <Typography  fontSize={{xs:'20px',md:'24px'}} lineHeight={{xs:'30px', md:'50px'}} textAlign='center' p={{xs:'0 20px', md:'0 100px'}}>
            {t('CereSoftware is a software company that specializes in providing custom software development and IT consulting services.')} 
            {t('The company has a team of experienced developers who are skilled in a wide range of technologies and platforms.')}
            {t('CereSoftware offers a range of services including web and mobile application development, software testing and quality assurance and deployment, UI/UX design,  and enterprise software development.')}
            {t('The company is committed to delivering high-quality software solutions that meet the unique needs of their clients, and prides itself on its collaborative approach to software development.')}
            {t('With a focus on innovation and customer satisfaction, CereSoftware has established itself as a trusted partner for businesses of all sizes.')}
            </Typography>
            
        </Section>
    )
}

export default withNamespaces()(AboutUs);
