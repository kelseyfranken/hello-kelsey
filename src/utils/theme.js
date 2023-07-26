'use client';
import { createTheme } from "@mui/material";

// utils/theme.js

const commonTheme = {
  // Common theme options here, like typography settings, etc.
};

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    primary: {
      main: "#FDFDFD",
    },
    secondary: {
      main: "#E0D6FF",
    },
    highlight: {
      primary: "#00F1C5",
    },
    background: {
      default: "#FDFDFD",
    },
  },
});

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    primary: {
      main: "#FDFDFD",
    },
    secondary: {
      main: "#E0D6FF",
    },
    highlight: {
      primary: "#00F1C5",
    },
    background: {
      default: "#061D30",
    },
  },
});
