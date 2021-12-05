import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#060F1E",
      secondary: "#06142B",
    },
    secondary: {
      main: "#B93F2F",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
  props: {
    MuiSvgIcon: {
      htmlColor: "#FFFFFF",
    },
  },
  typography: {
    useNextVariants: true,
    color: "#FFFFFF",
    fontWeightRegular: 600,
    fontSize: 14,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
});

export default theme;
