import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 

//  const name="sachin";
// const st={ color:'aqua', backgroundColor:'crimson'  }
// const display=<h1 style={st}>{name}</h1>

// const col=

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//root.render(col);

// If you want to start   measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
