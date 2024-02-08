"use client";
import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import { BlogNotFound, BlogSingle, BlogSingleLoading } from "@/components/blog/BlogSingle";
import useFetchBlog from "@/hooks/useFetchBlog";
import Link from "next/link";

const BlogBreadcrumbs = ({ title = "" }) => {
  return (
    <Grid item xs={12} marginBottom={3}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/blogs">
          Blogs
        </Link>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
    </Grid>
  );
};

const SingleBlogPage = ({ params }) => {
  const { blog, isLoading, isError } = useFetchBlog(params?.id);

  return (
    <Container style={{ marginTop: 10, marginBottom: 10 }}>
      <Box sx={{ flexGrow: 1 }}>
        <BlogBreadcrumbs title={blog?.title} />
        <Grid item xs={12}>
          {isLoading && <BlogSingleLoading />}
          {isError && <BlogNotFound />}
          {!isLoading && !isError && <BlogSingle blog={blog} />}
        </Grid>
      </Box>
    </Container>
  );
};

export default SingleBlogPage;
