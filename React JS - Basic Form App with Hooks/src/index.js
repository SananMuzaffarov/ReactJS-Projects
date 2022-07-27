import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './Components/FormHook';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return(
    <div>
      <Form />
    </div>
  );
}
root.render(<App />);