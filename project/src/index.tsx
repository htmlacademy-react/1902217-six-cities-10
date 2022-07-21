import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  PLACE_COUNT: 120,
};

root.render(
  <App
    placeCount={Setting.PLACE_COUNT}
    offers={offers}
  />
);
