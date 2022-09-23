import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i);
  }

  return (
    <div className='wrapper'>
      <div className='accordion'>

        {data.map((item, i) => (
          <div className='item'>
            <div className='title' onClick={() => toggle(i)}>
            <h2>{item.question}</h2>          
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              <p>{item.answers}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


const data = [
  {
    question: "Natural Ededler 1",
    answers: "Natural Ededlerin 1"
  },
  {
    question: "Natural Ededler 2",
    answers: "Natural Ededlerin 2"
  },
  {
    question: "Natural Ededler 3",
    answers: "Natural Ededlerin 3"
  },
];

root.render(<App />);