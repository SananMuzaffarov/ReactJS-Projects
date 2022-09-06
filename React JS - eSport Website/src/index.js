import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Components/HomePage';
import Sponsors from './Components/Sponsors';
import Tournaments from './Components/Tournaments';
import Quote from './Components/Quote';
import Download from './Components/Download';
import Footer from './Components/Footer';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return(
    <div>
      <HomePage />
      <Sponsors/>
      <Tournaments />
      <Quote />
      <Download />
      <Footer />
    </div>
  );
}
root.render(<App />);