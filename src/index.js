/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import React from 'react';
import ReactDOM from 'react-dom/client';

// Local Components
import App from './App';
import reportWebVitals from './reportWebVitals';

/* -------------------------------------------------------------------------- */
/*                               ROOT COMPONENT                               */
/* -------------------------------------------------------------------------- */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();