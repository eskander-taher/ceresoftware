import React from "react";
import Section from "../components/UI/section/Section";
import BlogList from "../components/blogs/BlogList/BlogList";


export default function BlogsPage(){

    return(
        <Section header="Blogs">
            <BlogList/>
        </Section>
    )
}