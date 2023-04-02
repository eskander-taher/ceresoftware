import React from "react";
import SectionHeader from "../SectionHeader";
import { Container, Box, Stack } from "@mui/material";
// import {Box} from '@mu'

const Section = ({ children, header, container = false }) => {
  return (
    <Box m="150px 0">
      {container ? (
        <Container>
          <Stack spacing={5}>
            <SectionHeader header={header} />
            <Stack alignItems="center" spacing={5}>
              {children}
            </Stack>
          </Stack>
        </Container>
      ) : (
        <Stack spacing={5}>
          <SectionHeader header={header} />
          <Box alignItems="center" spacing={4}>
            {children}
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default Section;
