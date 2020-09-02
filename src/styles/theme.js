
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      light: '#292C41',
      main: '#393B41',
      dark: '#000000',
      contrastText: '#393B41',
    },
    secondary: {
      light: '#00000000',
      main: '#2D6CC0',
      dark: '#1e2532',
      contrastText: '#6B76A1'
    },
    error: {
      light: '#EE2741',
      main: '#A20F3C',
      dark: '#860029',
      contrastText: '#393B41'
    },
    background: {
      default: '#FFFFFF',
      uiMain: '#E4E6EB',
      selectedMenu: '#292C4130',
      main: '#232637',
      overlay: '#00000099'
    },
    text: {
      primary: '#393B41',
      secondary: '#FFFFFF',
      third: '#747984',
      fourth: '#BABEC6',
      hoverText: '#16ACE2'
    },
  },
  custom: {
    palette: {
      green: '#4caf50',
      blueGrey: '#5c739c',
      lightGrey: '#D8D8D8',
      blue: '#2D6CC0',
      darkBlue: '#3B5998',
      grey: '#99A5D3',
      lightBlue: '#1f2334',
      lightRed: '#EA4335',
      textInputBorder: '#DADCE0'
    },
    layout: {
      maxAppWidth: '1920px'
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Muli',
      'Muli-SemiBold'
    ].join(','),
    h5: {
      fontFamily: 'Muli',
      color: '#393B41',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'Muli',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: 'Muli',
      fontSize: '17px',
      fontWeight: 400,
    },
    butitle: {
      fontFamily: 'Muli',
      fontStyle: 'Bold'
    },
    body2: {
      fontFamily: 'Muli',
      fontWeight: 300,
      letterSpacing: '0.35px'
    },
    caption: {
      fontFamily: 'Muli',
      fontSize: '14px',
      fontWeight: 300,
      letterSpacing: '0.35px'
    },
  },
}));

export default theme;
