import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/dist/css/main.css";
import "./assets/dist/css/swiper.css";
import "./assets/dist/css/navbar.css";
import "./assets/dist/css/responsive.css";
import "./assets/dist/css/animation.css";

import "./assets/dist/css/page/investor.css";
import "./assets/dist/css/subpage/annual-report.css";
import "./assets/dist/css/subpage/founders.css";
import "./assets/dist/css/subpage/dna.css";
import "./assets/dist/css/subpage/news.css";
import "./assets/dist/css/subpage/product.css";

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
