import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import About from "./components/About/About";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Resume from "./components/Resume/Resume";

function App() {
  const [isTranslate, setIsTranslate] = useState(false);

  const translateRU = () => {
    setIsTranslate(false);
  };

  const translateEN = () => {
    setIsTranslate(true);
  };

  return (
    <BrowserRouter>
      <Header
        isTranslate={isTranslate}
        translateEN={translateEN}
        translateRU={translateRU}
      />
      <Routes>
        <Route path="/resume" element={Resume} />
      </Routes>
      <About isTranslate={isTranslate} />
      <Content isTranslate={isTranslate} />
      <Footer isTranslate={isTranslate} />
    </BrowserRouter>
  );
}

export default App;
