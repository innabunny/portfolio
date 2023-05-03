import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import About from './components/About/About';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {

  const [isTranslate, setIsTranslate] = useState(false);
  
    const translateRU = () => {
      setIsTranslate(false);
    }
  
    const translateEN = () => {
      setIsTranslate(true);
    }
  
  return (
   <>
    <Header isTranslate={isTranslate} translateEN={translateEN} translateRU={translateRU} />
    <About isTranslate={isTranslate} />
    <Content isTranslate={isTranslate}/>
    <Footer isTranslate={isTranslate} />
   </>
  );
}

export default App;
