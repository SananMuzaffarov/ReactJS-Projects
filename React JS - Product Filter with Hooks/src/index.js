import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Category from './Components/Category';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
    return(
        <div>
            <Category />
        </div>
    );
}
root.render(<App />);