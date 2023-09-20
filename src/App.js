import logo from "./logo.svg";
import "./App.css";
import Home from "./components/pages/home";
import Imbianchino from "./components/pages/Imbianchino";
import Elettricista from "./components/pages/Elettricista";
import Trasporti from "./components/pages/Trasporti";
import Contact from "./components/pages/contact";
import ScrollButton from "./components/ScrollButton";
import Footer from "./components/pages/Footer";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
function App() {
  const containerStyle = {
    margin: 0,
    padding: 0,
  };

  return (
    <div style={containerStyle}>
      <Home />
      <Trasporti />
      <Imbianchino />
      <Elettricista />
      <Contact />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
