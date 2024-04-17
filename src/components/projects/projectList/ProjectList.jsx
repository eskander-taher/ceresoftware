import { Grid } from "@mui/material";
import React, {useState} from "react";
import ProjectItem from "../projectItem/ProjectItem";
import elgo from './elgo.jpg'
import rwaa from './rwaa.jpg'
import muna from './muna.jpg'
import trhal from './trhal.jpg'

const projects = [
  {
    id: 1,
    name: "Munasabat",
    image: muna,
    description:
      "we will show the best and shortest",
    color :'#F6D000'
  },
  {
    id: 2,
    name: "Rwa'a",
    image: rwaa,
    description:
      "we will show the best and shortest",
    color :'#DF5E60'
  },
  {
    id: 3,
    name: "Elgo",
    image: elgo,
    description:
      "we will show the best and shortest",
    color :'#2F172F'
  },
  {
    id: 4,
    name: "Trhal",
    image: trhal,
    description:
      "we will show the best and shortest",
    color :'#212529'
  },
  
];

const ProjectList = () => {

  const [openCardId, setOpenCardId] = useState(null);

  const handleToggle = (id) => {
    setOpenCardId(id === openCardId ? null : id);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" >
      {projects.map((project) => {
        return (
          <Grid item key={project.id}>
            <ProjectItem {...project} 
              isOpen={project.id === openCardId}
              onToggle={() => handleToggle(project.id)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProjectList;
