import { Routes, Route } from "react-router-dom";

import TranslateComponent from "./components/TranslateComponent";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import SustainabilityPage from "./pages/SustainabilityPage";
import OperationalPage from "./pages/OperationalPage";
import GalleryPage from "./pages/GalleryPage";
import AgritechPage from "./pages/AgritechPage";
import InvestorPage from "./pages/InvestorPage";

// SubPages
import FoundersPage from "./pages/subpages/FoundersPage";
import AboutUsPage from "./pages/subpages/AboutUsPage";
import DnaPage from "./pages/subpages/DnaPage";
import AnnualReportPage from "./pages/subpages/AnnualReportPage";

function App() {
  return (
    <div>
      <TranslateComponent />
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/operational" Component={OperationalPage} />
        <Route path="/sustainability" Component={SustainabilityPage} />
        <Route path="/gallery" Component={GalleryPage} />
        <Route path="/agritech" Component={AgritechPage} />
        <Route path="/investor" Component={InvestorPage} />

        <Route path="/about/about-us" Component={AboutUsPage} />
        <Route path="/about/dna-triputra" Component={DnaPage} />
        <Route path="/about/founders" Component={FoundersPage} />

        <Route path="/investor/annual-report" Component={AnnualReportPage} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
