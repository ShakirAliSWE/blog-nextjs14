"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import GitHubIcon from "@mui/icons-material/GitHub";
import { postRequest } from "@/utils/server-request";
import { UserContext } from "@/context/UserContext";

const LoginPage = () => {
  const router = useRouter();
  const { setToken, setAuthenticated, setLoginUser } = useContext(UserContext);
  const [error, setError] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    setError(null);
    let username = e.target.username?.value || "";
    let password = e.target.password?.value || "";

    await postRequest(
      "https://dummyjson.com/auth/login",
      { username, password },
      (res) => {
        setToken(res.token);
        setLoginUser(res);
        setAuthenticated(true);
        router.push("/");
      },
      (err) => {
        setError(err.message);
      }
    );

    return false;
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in | Next.js 14
        </Typography>
        <Box component="form" onSubmit={loginHandler} noValidate sx={{ mt: 1 }}>
          {error && (
            <Alert variant="filled" severity="error">
              {error}
            </Alert>
          )}

          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 3,
              mb: 2,
              gap: 1,
            }}
          >
            <Button type="submit" startIcon={<LoginIcon />} fullWidth variant="contained">
              Sign In
            </Button>
            <Button startIcon={<GitHubIcon />} fullWidth variant="contained">
              Continue with Github
            </Button>
          </Box>

          <Grid container>
            <Grid item xs>
              <Link href="/forget-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
