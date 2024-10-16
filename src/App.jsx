import React from "react";

import PCNavbar from "./components/Navbar/PCNavbar";
import MobNavbar from "./components/Navbar/MobNavbar";
import { useMediaQuery } from "react-responsive";
import Welcome from "./components/Home/Welcome";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import EmiCalculator from "./components/EmiCalculator/EmiCalculator";
import Carreers from "./components/Carreers/Carreers";
import Contact from "./components/ContactUs/Contact";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Admin from "./components/UserData/Admin"
import PersonalLoan from "./components/ServiceDetails/PersonalLoan";
const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <Welcome />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/services"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/emi-calci"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <EmiCalculator />
              <Footer />
            </>
          }
        />
        <Route
          path="/careers"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <Carreers />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact-us"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
         <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        />
           <Route
          path="/admin"
          element={
            <>
              <Admin />
            </>
          }
        />
 <Route
          path="/service-details"
          element={
            <>
              {isMobile ? <MobNavbar /> : <PCNavbar />}
              <PersonalLoan />
              <Footer/>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
