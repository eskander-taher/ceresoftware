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
    summary: " Lorem ipsum dolor sit amet Lorem, ipsum dolor.",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime nesciunt quidem vero pariatur minima libero eveniet corrupti commodi totam tenetur eaque nihil, optio, vitae nemo illum perferendis porro sapiente?",
  },
  {
    id: 2,
    summary: " Lorem ipsum dolor sit amet Lorem, ipsum dolor.",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime nesciunt quidem vero pariatur minima libero eveniet corrupti commodi totam tenetur eaque nihil, optio, vitae nemo illum perferendis porro sapiente?",
  },
  {
    id: 3,
    summary: " Lorem ipsum dolor sit amet Lorem, ipsum dolor.",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime nesciunt quidem vero pariatur minima libero eveniet corrupti commodi totam tenetur eaque nihil, optio, vitae nemo illum perferendis porro sapiente?",
  },
  {
    id: 4,
    summary: " Lorem ipsum dolor sit amet Lorem, ipsum dolor.",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime nesciunt quidem vero pariatur minima libero eveniet corrupti commodi totam tenetur eaque nihil, optio, vitae nemo illum perferendis porro sapiente?",
  },
  {
    id: 5,
    summary: " Lorem ipsum dolor sit amet Lorem, ipsum dolor.",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime nesciunt quidem vero pariatur minima libero eveniet corrupti commodi totam tenetur eaque nihil, optio, vitae nemo illum perferendis porro sapiente?",
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
