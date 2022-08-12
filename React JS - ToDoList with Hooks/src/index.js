import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todos from './Components/Todolist';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return(
    <div>
      <Todos />
    </div>
  );
}
root.render(<App />);