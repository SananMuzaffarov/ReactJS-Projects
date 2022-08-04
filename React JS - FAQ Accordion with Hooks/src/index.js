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
            {item.answers.map((item) => {
                return (
                  <h2>{item.title}</h2>
                )
              })}    
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
    answers: [
      {
        title: "Natural Ededlerin 1"
      },
      {
        title: "Natural Ededlerin 2"
      },
      {
        title: "Natural Ededlerin 3"
      }
    ]
  },
  {
    question: "Natural Ededler 2",
    answers: [
      {
        title: "Natural Ededlerin 1"
      },
      {
        title: "Natural Ededlerin 2"
      },
      {
        title: "Natural Ededlerin 3"
      }
    ]
  },
  {
    question: "Natural Ededler 3",
    answers: [
      {
        title: "Natural Ededlerin 1"
      },
      {
        title: "Natural Ededlerin 2"
      },
      {
        title: "Natural Ededlerin 3"
      }
    ]
  },

]
root.render(<App />);