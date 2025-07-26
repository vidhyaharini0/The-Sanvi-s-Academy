import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home.jsx";
import IELTS from "./pages/IELTS.jsx";
import TOEFL from "./pages/TOEFL.jsx";
import PTA from "./pages/PTE.jsx";
import GRE from "./pages/GRE.jsx";
import SAT from "./pages/SAT.jsx";
import Duolingo from "./pages/Duolingo.jsx";
import French from "./pages/French.jsx";
import German from "./pages/German.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Courses from "./components/Courses.jsx";
import Testimonials from "./pages/Testimonials.jsx"; // ✅ Corrected this line
import Blog from "./pages/Blog.jsx";
import FAQ from "./pages/FAQ.jsx";
import Gallery from "./pages/Gallery.jsx";
import IELTSTips from "./pages/IELTSTIPS.jsx";
import StudyAbroad2025 from "./pages/StudyAbroad2025.jsx";

import TOEFLvsDuolingo from "./pages/IELTSvsTOEFLvsDuolingoPTE.jsx";
import GREVocabulary from "./pages/GREVocabulary.jsx";
import StudentVisaInterview from "./pages/StudentVisaInterview.jsx";
import BestApps2025 from "./pages/BestApps2025.jsx";
import StudyPlanWorking from "./pages/StudyPlanWorking.jsx";
import WhyJapan from "./pages/WhyJapan.jsx";
import SpeakingMistakes from "./pages/SpeakingMistakes.jsx";
import SOPandLOR from "./pages/SopLorGuide.jsx";
import EuropeUniversities from "./pages/EuropeUniversities.jsx";
import SuccessStories from "./pages/SuccessStories.jsx";
import IELTSvsTOEFLvsDuolingoPTE from "./pages/IELTSvsTOEFLvsDuolingoPTE.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Automatically scrolls to top on route change */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ielts" element={<IELTS />} />
        <Route path="/toefl" element={<TOEFL />} />
        <Route path="/pte" element={<PTA />} />
        <Route path="/gre" element={<GRE />} />
        <Route path="/sat" element={<SAT />} />
        <Route path="/duolingo" element={<Duolingo />} />
        <Route path="/french" element={<French />} />
        <Route path="/german" element={<German />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog/ielts-tips" element={<IELTSTips />} />
        <Route path="/blog/study-abroad-2025" element={<StudyAbroad2025 />} />
        <Route path="/blog/toefl-vs-duolingo" element={<TOEFLvsDuolingo />} />
        <Route path="/blog/gre-vocabulary" element={<GREVocabulary />} />
        <Route
          path="/blog/student-visa-interview"
          element={<StudentVisaInterview />}
        />
        <Route path="/blog/best-apps-2025" element={<BestApps2025 />} />
        <Route path="/blog/study-abroad-2025" element={<StudyAbroad2025 />} />

        <Route path="/blog/why-japan" element={<WhyJapan />} />
        <Route path="/blog/speaking-mistakes" element={<SpeakingMistakes />} />
        <Route path="/blog/sop-lor-guide" element={<SOPandLOR />} />
        <Route
          path="/blog/europe-universities"
          element={<EuropeUniversities />}
        />
        <Route path="/blog/success-stories" element={<SuccessStories />} />
        <Route
          path="/blog/toefl-vs-duolingo-pte"
          element={<IELTSvsTOEFLvsDuolingoPTE />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
