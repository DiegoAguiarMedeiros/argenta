import './App.css'
import Header from './components/Header';
import Navbar from './components/Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ServiceCarousel from './components/Services';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Methodology from './components/Methodology';
import ClientsStories from './components/ClientsStories';
import Pricing from './components/Pricing';
import Numbers from './components/Numbers';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ebf3f5',
      main: '#cfe2e4',
      dark: '#909e9f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#4e4e4e',
      main: '#222222',
      dark: '#171717',
      contrastText: '#fff',
    },
    text: {
      primary: '#c3c3c3',
      secondary: '#888888',
      disabled: '#cfcfcf'
    },
    warning: {
      light: '#e9e9dd',
      main: '#f6f578',
      dark: '#acab54',
      contrastText: '#000',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Header />
      <ServiceCarousel />
      <Methodology />
      <ClientsStories />
      <Pricing />
      <Numbers />
      <ContactUs />
      <Footer />
    </ThemeProvider>
  )
}

export default App
