import { BrowserRouter, Routes, Route } from "react-router-dom";

import TranslateComponent from "./components/TranslateComponent";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import InvestorPage from "./pages/InvestorPage";

// SubPages
import FoundersPage from "./pages/subpages/FoundersPage";
import AboutUsPage from "./pages/subpages/AboutUsPage";
import DnaPage from "./pages/subpages/DnaPage";
import AnnualReportPage from "./pages/subpages/AnnualReportPage";
import MapPage from "./pages/subpages/MapPage";
import ProductPage from "./pages/subpages/ProductPage";
import TechinfoPage from "./pages/subpages/TechinfoPage";
import PrecisionPage from "./pages/subpages/PrecisionPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <div>
      <TranslateComponent />
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />

        <Route path="/investor" Component={InvestorPage} />

        <Route path="/about/about-us" Component={AboutUsPage} />
        <Route path="/about/dna-triputra" Component={DnaPage} />
        <Route path="/about/founders" Component={FoundersPage} />
        <Route path="/operational/map" Component={MapPage} />
        <Route path="/operational/product" Component={ProductPage} />
        <Route path="/gallery/news" Component={NewsPage} />

        <Route path="/investor/annual-report" Component={AnnualReportPage} />
        <Route
          path="/agritech/technology-information"
          Component={TechinfoPage}
        />
        <Route
          path="/agritech/precision-agriculture"
          Component={PrecisionPage}
        />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
