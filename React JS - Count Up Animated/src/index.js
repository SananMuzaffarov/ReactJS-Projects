import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CountUp from './Components/CountUp';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return(
    <div>
      <CountUp start={1} end={800} />
    </div>
  );
}
root.render(<App />);