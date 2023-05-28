import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Calculadora from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculadora />);