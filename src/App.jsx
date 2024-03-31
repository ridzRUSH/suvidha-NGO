import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveNavbar from "./components/Navbar.component";
import HomePage from "./components/HomePage.page.jsx";
import Event from "./components/Event.page.jsx";
import Gallery from "./components/Gallery.page.jsx";
import HelpPage from "./components/Help.page.jsx";
import ContactPage from "./components/Contact.page.jsx";
import IntenshipPage from "./components/Internship.page.jsx";
import Footer from "./components/Footer.component.jsx";

function App() {
  return (
    <Router>
      <ResponsiveNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="events"
          element={
            <>
              <Event />
              <Footer />
            </>
          }
        />
        <Route
          path="gallery"
          element={
            <>
              <Gallery />
              <Footer />
            </>
          }
        />
        <Route
          path="contact"
          element={
            <>
              <ContactPage />
              <Footer />
            </>
          }
        />
        <Route
          path="apply-for-internship"
          element={
            <>
              <IntenshipPage />
              <Footer />
            </>
          }
        />
        <Route
          path="help-now"
          element={
            <>
              <HelpPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
