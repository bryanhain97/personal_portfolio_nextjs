import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import smoothscroll from 'smoothscroll-polyfill';



const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement)
smoothscroll();