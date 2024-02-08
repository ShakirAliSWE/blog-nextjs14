"use client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import UserProvider from "@/context/UserContext";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
    button: {
      textTransform: "unset",
    },
  },
});

const LayoutTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
};

export default LayoutTheme;
