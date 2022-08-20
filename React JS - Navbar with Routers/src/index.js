import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home';
import About from './Components/About';
import Port from './Components/Portfolio';
import Resume from './Components/Resume';
import { BrowserRouter, Route } from "react-router-dom";
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return(
    <BrowserRouter>
        <Home />
          <Route path="/about" component={About}></Route>
          <Route path="/portfolio" component={Port}></Route>
          <Route path="/resume" component={Resume}></Route>
    </BrowserRouter>
  );
}
root.render(<App />);