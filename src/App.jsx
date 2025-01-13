import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import AboutSection from './Componets/About';
import FAQ from './Componets/Faq';
import Footer from './Componets/Footer';
import PrizeCards from './Componets/Box';
import RegistrationDetails from './Componets/RegistrationDetails';
import Sponsors from './Componets/Sponsors';
import Contact from './Componets/contact';
import Team from './Componets/Team';
import EventHighlights from './Componets/EventHeightlight';
import Background from './Componets/Background';
import HackathonThemes from './Componets/Theme';
import RegistrationTimeline from './Componets/Timeline';
import Navbar from './Componets/Navbar';
import Members from './Componets/Members'; // Proper import for your Members.jsx file

function App() {
  return (
    <Router>
      {/* Navbar shown on all pages */}
      <Navbar />

      {/* Define routes for different pages */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Background />
              <AboutSection />
              <EventHighlights />
              <HackathonThemes />
              <PrizeCards />
              <RegistrationTimeline />
              <RegistrationDetails />
              <Sponsors />
              <Team />
              <FAQ />
              <Contact />
            </>
          }
        />
        <Route path="/members" element={<Members />} />
      </Routes>

      {/* Footer shown on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
