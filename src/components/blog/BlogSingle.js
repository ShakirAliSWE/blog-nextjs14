import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import Image from "next/image";

const renderHTML = (html) => {
  return { __html: html };
};

export const BlogSingle = ({ blog }) => {
  return (
    <>
      <Typography variant="h3" marginBottom={3}>
        {blog?.title}
      </Typography>
      <Box marginBottom={3}>
        <Image
          src={blog?.photo_url}
          alt={blog?.title}
          width={600}
          height={300}
          style={{ objectFit: "cover", width: "100%", borderRadius: 6 }}
        />
      </Box>
      <Typography variant="h4" fontWeight={400} marginBottom={2}>
        {blog?.description}
      </Typography>
      <div dangerouslySetInnerHTML={renderHTML(blog?.content_html)} />
      {/* <Typography sx={{ justifyContent: "center" }} variant="subtitle1">
        {blog?.content_text}
      </Typography> */}
    </>
  );
};

export const BlogSingleLoading = () => {
  return (
    <>
      <Skeleton variant="text" width={"50%"} height={80} />
      <Skeleton
        variant="rounded"
        width={600}
        height={300}
        style={{ objectFit: "cover", width: "100%" }}
      />
      <Skeleton variant="text" width={"80%"} height={40} />
      {[...Array(18)].map((_, i) => (
        <Skeleton key={i} variant="text" width={"100%"} height={25} />
      ))}
    </>
  );
};

export const BlogNotFound = () => {
  return (
    <Typography variant="h4" color="error.main">
      No Blog Found
    </Typography>
  );
};
