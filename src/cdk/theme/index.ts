import { createTheme } from '@mui/material/styles';
import { CSSProperties } from '@mui/material/styles/createTypography';

import '~/assets/fonts/fonts.css';
import palette from './palette';

const fontFamily = 'Kanit, sans-serif';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
    button2: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    highlight: string;
  }

  interface PaletteOptions {
    highlight: string;
  }

  interface TypographyVariants {
    body3: CSSProperties;
    body4: CSSProperties;
    button2: CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3: CSSProperties;
    body4: CSSProperties;
    button2: CSSProperties;
  }
}

const baseTheme = createTheme({
  palette: {
    primary: {
      main: palette.dark,
      contrastText: palette.white,
    },
    secondary: {
      main: palette.pink,
    },
    highlight: palette.blueHighlight,
    text: {
      primary: palette.white,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
          fontFamily: `${fontFamily}`,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 380,
      sm: 600,
      md: 769,
      lg: 1200,
      xl: 1441,
    },
  },
  typography: {
    h1: {
      fontSize: 68,
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: '105%',
      fontFamily: `${fontFamily}`,
    },
    h2: {
      fontSize: 54,
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: '105%',
      fontFamily: `${fontFamily}`,
    },
    h3: {
      fontSize: 48,
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: '105%',
      fontFamily: `${fontFamily}`,
    },
    h4: {
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: '0.03em',
      lineHeight: '120%',
      fontFamily: `${fontFamily}`,
    },
    h5: {
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: '0.03em',
      lineHeight: '105%',
      fontFamily: `${fontFamily}`,
    },
    body1: {
      fontSize: 22,
      fontWeight: 400,
      letterSpacing: '0.05em',
      lineHeight: '120%',
      fontFamily: `${fontFamily}`,
    },
    body2: {
      fontSize: 20,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '120%',
      fontFamily: `${fontFamily}`,
    },
    body3: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '120%',
      fontFamily: `${fontFamily}`,
    },
    body4: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '120%',
      fontFamily: `${fontFamily}`,
    },
    subtitle1: {
      fontSize: 28,
      fontWeight: 600,
      letterSpacing: '0.03em',
      lineHeight: '120%',
      fontFamily: `${fontFamily}`,
    },
    subtitle2: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '0.03em',
      lineHeight: '120%',
      fontFamily: `${fontFamily}`,
    },
    button: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: '33px',
      fontFamily: 'Lato, sans-serif',
    },
    button2: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: '0.05em',
      lineHeight: '120%',
      fontFamily: `${fontFamily}`,
    },
    allVariants: {
      color: palette.white,
    },
  },
});

const theme = createTheme({
  ...baseTheme,
  typography: {
    ...baseTheme.typography,
    h1: {
      ...baseTheme.typography.h1,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 48,
      },
    },
    h2: {
      ...baseTheme.typography.h2,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 28,
      },
    },
    h3: {
      ...baseTheme.typography.h3,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 20,
      },
    },
    subtitle1: {
      ...baseTheme.typography.subtitle1,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 20,
        fontWeight: 400,
      },
    },
    body1: {
      ...baseTheme.typography.body1,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 18,
      },
    },
    body2: {
      ...baseTheme.typography.body2,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
    button: {
      ...baseTheme.typography.button,
      [baseTheme.breakpoints.down('md')]: {
        [baseTheme.breakpoints.down('md')]: {
          fontSize: 16,
          fontWeight: 600,
          lineHeight: '20px',
        },
      },
      button2: {
        ...baseTheme.typography.button2,
        [baseTheme.breakpoints.down('sm')]: {
          fontSize: 20,
          fontWeight: 600,
          letterSpacing: '0',
        },
      },
    },
  },
});

export default theme;
