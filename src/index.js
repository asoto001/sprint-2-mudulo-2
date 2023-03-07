import React from 'react';
import ReactDOM from 'react-dom/client';
import  Router  from './router/Router';
import "./style.scss"

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router />
);

