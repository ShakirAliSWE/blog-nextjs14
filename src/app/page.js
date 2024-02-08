"use client";
import { useContext } from "react";
import { Container, Typography } from "@mui/material";
import { UserContext } from "@/context/UserContext";

export default function Home() {
  const { loginUser, authenticated } = useContext(UserContext);

  return (
    <Container>
      {authenticated && (
        <Typography variant="h5">
          {loginUser?.firstName} {loginUser?.lastName}, Welcome back!
        </Typography>
      )}
    </Container>
  );
}
