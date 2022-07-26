import React from 'react';
import ReactDOM from 'react-dom/client';
//import Counter from './Components/ClassStateCounter';
import HookCounter from './Components/CounterHook';
import './index.css';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return(
    <div>
      {/*<Counter />*/}
      <HookCounter />
    </div>
  );
}
root.render(<App />);
