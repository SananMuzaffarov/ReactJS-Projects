import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todolist from './Components/Todolist';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
    return(
        <div>
            <Todolist />
        </div>
    );
}
root.render(<App />);