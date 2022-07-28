import React from 'react';
import ReactDOM from 'react-dom/client';
import Boxes from './Components/Box';
import './index.css';

import myImage from '../src/Assets/kia.jpg';
import myMerc from '../src/Assets/mercedes.jpg';
import myBMW from '../src/Assets/bmw.jpg';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return(
    <div className='container'>
      <Boxes img = {myImage} name = "KIA" news = "What's new in new KIA car?" answer = "There are new doors."/>
      <Boxes img = {myMerc}  name = "Mercedes" news = "What's tha advantages of driving Mercedes?" answer = "It is so fast." />
      <Boxes img = {myBMW} name = "BMW" news = "What's the disadvantages of driving BMW?" answer = "The wheels wear out quickly." />
    </div>
  );
}
root.render(<App />);
