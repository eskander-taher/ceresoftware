import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material";
const items = [
  {
    id: 1,
    summary: "What services does your company offer?",
    details:
      "Our company provides services related to the design, development, testing, deployment, and maintenance of software applications.",
  },
  {
    id: 2,
    summary: "What is your development process?",
    details:
      "Our software development process involves requirements gathering, design, development, testing, deployment, and maintenance.",
  },
  {
    id: 3,
    summary: "How do you ensure code quality and security?",
    details:
      "Our company ensures code quality and security through measures such as code reviews, testing, secure coding practices, automated tools, compliance with industry standards, and ongoing monitoring and maintenance. ",
  },
  {
    id: 4,
    summary: "What is your pricing model?",
    details:
      "Our pricing model is The time and materials pricing model which is based on the actual time and materials used in the software development process.",
  },
  {
    id: 5,
    summary: "How long do you handle software maintenance and updates?",
    details:
      "The duration of software maintenance and updates can vary depending on the type and complexity of the software application, as well as the client's needs and budget ",
  },
  {
    id: 6,
    summary: "How long does it take to finish the software product?",
    details:
      "The time it takes to finish a software product can vary widely depending on various factors, such as the complexity and scale of the project, the technologies and tools used, the availability and skill level of the development team, and the client's requirements and specifications.",
  },
];


const FAQAccordian = () => {
  const [expanded, setExpanded] = useState("");
  const theme = useTheme();

  const handleExpand = (isExpanded, id) => {
    setExpanded(isExpanded ? id : "");
  };

  return (
      <Stack spacing={3} alignItems="center">
        {items.map((item) => {
          return (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={(event, isExpanded) =>
                handleExpand(isExpanded, item.id)
              }
              sx={{
                "&.Mui-expanded": {
                  borderTop: `${theme.palette.primary.main} 5px solid`,
                },
                borderRadius: "20px !important",
                boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.1)',
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                id={item.id}
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  fontSize: 20,
                  "& .Mui-expanded": {
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                  },
                  padding: "10px",
                }}
              >
                {item.summary}
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ color: theme.palette.text.secondary, fontSize: 18 }}
                >
                  {item.details}
                </Typography>
              </AccordionDetails> 
            </Accordion>
          );
        })}
      </Stack>
  );
};

export default FAQAccordian;
