import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b71c1c",
    },
    background: {
      default: "#141414",
      paper: "#141414",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b3b3b3",
    },
  },
  typography: {
    fontFamily: '"Netflix Sans", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
    },
    button: {
      fontWeight: "bold",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "white",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: "#b3b3b3",
          color: "#b3b3b3",
          "&:hover": {
            backgroundColor: "#b3b3b3",
            color: "#141414",
          },
        },
        outlined: {
          borderColor: "#b3b3b3",
          color: "#b3b3b3",
          "&:hover": {
            borderColor: "#b71c1c",
            backgroundColor: "#b71c1c",
            color: "#ffffff",
          },
        },
      },
    },
  },
});

export default theme;
