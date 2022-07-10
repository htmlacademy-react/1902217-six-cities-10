import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  PLACE_COUNT: 120,
};

root.render(
  <React.StrictMode>
    <App placeCount={Setting.PLACE_COUNT} />
  </React.StrictMode>,
);
