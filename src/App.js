import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Screens
import Landing from "./screens/Landing.jsx";
import Error404Page from "./screens/404page.jsx";
import PrivacyPolicy from "./screens/PrivacyPolicy.jsx";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          {/* <Route path="/privacypolicy" element={<PrivacyPolicy/>}/> */}
          <Route path="*" element={<Error404Page/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

