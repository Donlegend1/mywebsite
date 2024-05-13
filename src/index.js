import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Loaderimg = () => (
  <div id="global-loader">
    <img
      src={"/logo512.png"}
      className="loader-img"
      alt="Loader"
    />
  </div>
);

root.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <React.Suspense fallback={<Loaderimg />}>
          <Routes>
            <Route element={<App />}>
              <Route
                path={`https://legend-osa-consultants.vercel.app/`}
                element={<Home />}
              />
              <Route
                path={`https://legend-osa-consultants.vercel.app/about`}
                element={<About />}
              />
              <Route
                path={`https://legend-osa-consultants.vercel.app/services`}
                element={<Services />}
              />
              <Route
                path={`https://legend-osa-consultants.vercel.app/project`}
                element={<Projects />}
              />
              <Route
                path={`https://legend-osa-consultants.vercel.app/contact`}
                element={<Contact />}
              />
            </Route>
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </React.StrictMode>
  </>
);
