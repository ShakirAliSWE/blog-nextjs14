"use client";
import { Container, Grid, Box } from "@mui/material";
import { BlogCards, BlogCardsLoading } from "@/components/blog/BlogCards";
import useFetchBlogs from "@/hooks/useFetchBlogs";
import LayoutProtected from "@/components/layout/LayoutProtected";

const BlogsPage = () => {
  const { blogs, isLoading } = useFetchBlogs();

  return (
    <LayoutProtected>
      <Container style={{ marginTop: 10, marginBottom: 10 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {isLoading ? <BlogCardsLoading /> : <BlogCards blogs={blogs} />}
          </Grid>
        </Box>
      </Container>
    </LayoutProtected>
  );
};

export default BlogsPage;
