"use client";
import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Box } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserContext } from "@/context/UserContext";

const LayoutHeaderUser = () => {
  const router = useRouter();
  const { setToken, authenticated, setAuthenticated } = useContext(UserContext);

  const logoutHandler = () => {
    setToken(null);
    setAuthenticated(false);
    router.push("../login");
  };

  return (
    <Box sx={{ flexGrow: 0, display: "flex" }}>
      {authenticated ? (
        <Button startIcon={<LogoutIcon />} sx={{ color: "inherit" }} onClick={logoutHandler}>
          Logout
        </Button>
      ) : (
        <Button
          startIcon={<LoginIcon />}
          sx={{ color: "inherit" }}
          component={Link}
          href={"/login"}
        >
          Login
        </Button>
      )}
    </Box>
  );
};

export default LayoutHeaderUser;
