// App.js

import React from "react";
import Home from "./components/Home-Page/Home";
import Enrollment from "./components/Enrollment/Enrollment";
import Connection from "./components/Connection/Connection";
import Thanks from "./components/Thanks/Thanks";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Packages from "./components/Packages/Packages";
import Translator from "./components/Translator";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Contentpage from "./components/ContentPage/Contentpage";
import SearchMatch from "./components/SearchMatch/SearchMatch";
import Profile from "./components/Profile/Profile";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/content-page" element={<Contentpage />} />
          <Route path="/search-match" element={<SearchMatch />} />
          <Route path="/profile" element={<Profile />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
