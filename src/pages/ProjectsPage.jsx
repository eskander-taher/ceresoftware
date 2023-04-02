import React from "react";
import Section from "../components/UI/section/Section";
import ProjectList from "../components/projects/projectList/ProjectList";


export default function ProjectsPage(){

    return(
        <Section header="Projects">
            <ProjectList/>
        </Section>
    )
}