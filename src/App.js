import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import AboutMe from './components/About/AboutMe';
import { useState } from 'react';
import Resume from './components/Resume/Resume';

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
        <Route path="*"  element={<MainPage isTranslate={isTranslate} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<AboutMe isTranslate={isTranslate} />} />
      </Routes>
      <Footer isTranslate={isTranslate} />
    </BrowserRouter>
  );
}

export default App;
