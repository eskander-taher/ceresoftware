import { createTheme } from "@mui/material";



// we still need to add arabic and english mode because arabic is writen from right to left

export const tokens = () => {
  return {
    primary: {
      100: "#d2e5f7",
      200: "#a4cbef",
      300: "#77b2e6",
      400: "#4998de",
      500: "#1c7ed6",
      600: "#1665ab",
      700: "#114c80",
      800: "#0b3256",
      900: "#06192b",
    },

    secondary: {
      100: "#fff7ee",
      200: "#ffefdc",
      300: "#ffe8cb",
      400: "#ffe0b9",
      500: "#ffd8a8",
      600: "#ccad86",
      700: "#998265",
      800: "#665643",
      900: "#332b22",
    },
  };
};

const themeSittings = () => {
  const colors = tokens();

  return {
    palette: {
      primary: {
        main: colors.primary[500],
        light: colors.primary[300],
        dark: colors.primary[800],
      },
      secondary: {
        main: colors.secondary[500],
        light: colors.secondary[300],
        dark: colors.secondary[800],
      },
      text: {
        primary: "#212529",
      },
    },
    typography: {
      fontFamily: ["Raleway", " sans-serif"].join(","),
      fontSize: 16,
      h1: {
        fontFamily: ["Raleway", " sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Raleway", " sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Raleway", " sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Raleway", " sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Raleway", " sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Raleway", " sans-serif"].join(","),
        fontSize: 14,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1915,
      },
    },
  };
};

const theme = createTheme(themeSittings());


export default theme;
