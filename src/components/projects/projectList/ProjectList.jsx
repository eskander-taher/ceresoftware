import { Grid } from "@mui/material";
import React from "react";
import ProjectItem from "../projectItem/ProjectItem";

const projects = [
  {
    id: 1,
    name: "web development",
    image: "./images/web.png",
    description:
      "we will show the best and shortest",
  },
  {
    id: 2,
    name: "web development",
    image: "./images/web.png",
    description:
      "we will show the best and shortest",
  },
  {
    id: 3,
    name: "web development",
    image: "./images/web.png",
    description:
      "we will show the best and shortest",
  },
];

const ProjectList = () => {
  return (
    <Grid container justifyContent="center" alignItems="center"  spacing={{xs:8,md:5}}>
      {projects.map((project) => {
        return (
          <Grid item key={project.id}>
            <ProjectItem {...project} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProjectList;
