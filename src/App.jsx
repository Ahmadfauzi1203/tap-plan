import { Routes, Route } from "react-router-dom";

import TranslateComponent from "./components/TranslateComponent";
// import NavbarComponent from "./components/NavbarComponent";
// import NavbarComponent from "./components/NavbarComponent-copy";
import NavbarComponent from "./components/NavbarComponent-copy2";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import SustainabilityPage from "./pages/SustainabilityPage";
import OperationalPage from "./pages/OperationalPage";
import GalleryPage from "./pages/GalleryPage";
import AgritechPage from "./pages/AgritechPage";

// SubPages
import FoundersPage from "./pages/subpages/FoundersPage";
import AboutUsPage from "./pages/subpages/AboutUsPage";
import InvestorPage from "./pages/InvestorPage";

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
        <Route path="/about/founders" Component={FoundersPage} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
