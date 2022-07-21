import { useEffect, useState, MutableRefObject } from 'react';
import { instanceLayer, layerAttribution } from '../../const/map';
import { Map, TileLayer } from 'leaflet';
import { City } from '../../types/offer';

export default function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const { latitude, longitude, zoom } = city.location;

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom: zoom
      });

      const layer = new TileLayer(
        instanceLayer,
        {
          attribution:
            layerAttribution
        }
      );

      instance.addLayer(layer);

      setMap(instance);

    }
  }, [mapRef, map, latitude, longitude, zoom]);

  return map;
}
