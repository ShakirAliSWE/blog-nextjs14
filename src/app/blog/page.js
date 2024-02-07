"use client";
import { Container, Grid, Box } from "@mui/material";
import BlogCard from "@/components/blog/BlogCard";
import { getBlogs } from "@/utils/server-request";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getBlogs((blogs) => {
      console.log("blogs", blogs);
      setPosts(blogs);
    });
  }, []);

  return (
    <Container style={{ marginTop: 10, marginBottom: 10 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {posts.map((blog, i) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={i}>
              <BlogCard {...blog} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default BlogPage;
