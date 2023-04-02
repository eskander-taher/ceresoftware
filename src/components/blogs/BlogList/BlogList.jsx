import React from "react";
import { Grid } from "@mui/material";
import BlogItem from "../BlogItem/BlogItem";

const blogs = [
  {
    id: 1,
    name: "web development study plan",
    image: "./images/web.png",
    description:
      "we will show the best and shortest plan to be a web developer",
    date: "22-10-2022",
  },
  {
    id: 2,
    name: "web development study plan",
    image: "./images/web.png",
    description:
      "we will show the best and shortest plan to be a web developer",
    date: "22-10-2022",
  },
  {
    id: 3,
    name: "web development study plan",
    image: "./images/web.png",
    description:
      "we will show the best and shortest plan to be a web developer",
    date: "22-10-2022",
  },
];

const BlogList = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={5}>
      {blogs.map((blog) => {
        return (
          <Grid item >
            <BlogItem {...blog} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BlogList;
