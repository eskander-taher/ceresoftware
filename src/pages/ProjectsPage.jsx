import React from "react";
import Section from "../components/UI/section/Section";
import ProjectList from "../components/projects/projectList/ProjectList";
import { withNamespaces } from 'react-i18next';


function ProjectsPage({t}){

    return(
        <Section header={t("Projects")}>
            <ProjectList/>
        </Section>
    )
}

export default withNamespaces()(ProjectsPage)