import React from "react";
import Home from "./pages/Home.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Messagefull from "./components/Messagefull.jsx";
import Administration from "./pages/Administration.jsx";
import FormComponent from "./components/FormComponent.jsx";
import PlacementProcedure from "./pages/PlacementProcedure.jsx";
import Programs from "./pages/Programs.jsx";
import Departments from "./pages/Departments.jsx";
import QuickLink from "./components/QuickLink.jsx";
import Recuiters from "./pages/Recuiters.jsx";
import Infrastructure from "./pages/Infrastructure.jsx";
import GuestHouse from "./pages/GuestHouse.jsx";
import Hotels from "./pages/Hotels.jsx";
import ContactDetails from "./pages/ContactDetails.jsx";
import Faq from "./pages/Faq.jsx";
import HowToReach from "./pages/HowToReach.jsx";
import PlacementPolicy from "./components/PlacementPolicy.jsx";
import AipcGuidlines from "./components/AipcGuidlines.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message/:by" element={<Messagefull />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/forms/:id" element={<FormComponent />} />
        <Route path="/placement-policy" element={<PlacementPolicy />} />
        <Route path="/aipc-guidlines" element={<AipcGuidlines />} />
        <Route path="/placement" element={<PlacementProcedure />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/recruiters" element={<Recuiters />} />
        <Route path="/Infrastructure" element={<Infrastructure />} />
        <Route path="/guest-house" element={<GuestHouse />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/contact-details" element={<ContactDetails />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/how-to-reach" element={<HowToReach />} />
      </Routes>
      <QuickLink />
      <Footer />
    </>
  );
};

export default App;
