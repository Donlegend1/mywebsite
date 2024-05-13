
import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";







//App
const App = React.lazy(() => import("./App"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Contact = React.lazy(() => import("./pages/Contact"));



//Dashboard


const Private = ({ children }) => {
  return children;
};

const Loaderimg = () => {
  return (
    <div id="global-loader">
      <img
        src={"/assets/img/about-2.jpg"}
        className="loader-img"
        alt="Loader"
      />
    </div>
  );
};

const Root = () => {


  return (
    <Fragment>
      <BrowserRouter>
        <React.Suspense fallback={Loaderimg()}>
          {/* <AuthProvider> */}

          <Routes>
            <Route element={<App />}>
              <Route
                path={`${process.env.PUBLIC_URL}/`}
                element={<Home />}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/contact`}
                element={<Contact />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/about`}
                element={<About />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/services`}
                element={<Services />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/projects`}
                element={<Projects />}
              />
            </Route>
          </Routes>

          {/* </AuthProvider>  */}
        </React.Suspense>
      </BrowserRouter>
    </Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
