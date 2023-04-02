import React from 'react'
import {Grid} from '@mui/material'
import technologies  from './data'
import TechnologyItem from './TechnologyItem';



const TechologyList = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{ alignItems: "center", justifyContent: "center" }}
    >
      {technologies.map((technology) => {
        return (
          <Grid  key={technology.id} item xs={6} sm={3} md={2.3}>
            <TechnologyItem {...technology} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default TechologyList