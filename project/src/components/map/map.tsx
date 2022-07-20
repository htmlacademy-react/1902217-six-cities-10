import { Offer } from '../../types/offer';
import useMap from '../../hooks/useMap/useMap';
import { Icon, Marker } from 'leaflet';
// import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';

type MapProps = {
  offers: Offer[]
}

const urlMarkerDefault = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
// const urlMarkerCurrent = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


const defaultCustomIcon = new Icon({
  iconUrl: urlMarkerDefault,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

// const currentCustomIcon = new Icon({
//   iconUrl: urlMarkerCurrent,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40]
// });

export default function Map({ offers }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, offers[0].city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            defaultCustomIcon
          )
          .addTo(map);
      });
    }
  });

  return (
    <div ref={mapRef}></div>
  );
}
