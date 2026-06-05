import { createTheme } from "@mui/material/styles";

export const palette = {
  teal: "#35666A",
  pink: "#F0A4D5",
  sage: "#98C1BB",
  coral: "#F67E59",
  peach: "#F9D3BC",
  ink: "#263A3C",
  paper: "#FFFBF8",
};

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: palette.teal,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: palette.coral,
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F8F1EE",
      paper: palette.paper,
    },
    text: {
      primary: palette.ink,
      secondary: "#667577",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 800,
      letterSpacing: 0,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 46,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(53, 102, 106, 0.16)",
          boxShadow: "0 12px 30px rgba(38, 58, 60, 0.08)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 800,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
  },
});
