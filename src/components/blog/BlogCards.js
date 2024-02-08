import { Grid } from "@mui/material";
import { BlogCard, BlogCardLoading } from "./BlogCard";

const BlogCardsContainer = ({ children }) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      {children}
    </Grid>
  );
};

export const BlogCards = ({ blogs }) => {
  return blogs.map((blog, i) => (
    <BlogCardsContainer key={i}>
      <BlogCard {...blog} />
    </BlogCardsContainer>
  ));
};

export const BlogCardsLoading = () => {
  return [...Array(10)].map((_, i) => (
    <BlogCardsContainer key={i}>
      <BlogCardLoading />
    </BlogCardsContainer>
  ));
};
