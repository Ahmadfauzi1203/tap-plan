import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/dist/css/Main.css";
import "./assets/dist/css/Swiper.css";
import "./assets/dist/css/Navbar.css";
import "./assets/dist/css/Responsive.css";
import "./assets/dist/css/Animation.css";

import "./assets/dist/css/page/Investor.css";
import "./assets/dist/css/subpage/Annual-report.css";
import "./assets/dist/css/subpage/Founders.css";
import "./assets/dist/css/subpage/Dna.css";
import "./assets/dist/css/subpage/Product.css";
import "./assets/dist/css/subpage/Agritech.css";

import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
