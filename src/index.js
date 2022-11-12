import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StateProvider } from './StateProvider';
import { initialState } from './reducer';
import  reducer  from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Routes >
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </StateProvider>
    
  </React.StrictMode>
);
