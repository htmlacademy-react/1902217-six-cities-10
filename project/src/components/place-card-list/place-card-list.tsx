import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { useState } from 'react';

type PlaceCardListProps = {
  offers: Offer[]
  placeCardClassName: string
}

export default function PlaceCardList({ offers, placeCardClassName }: PlaceCardListProps): JSX.Element {

  const [activeCardId, setActiveCardId] = useState(0);
  const activeCard = offers.find((card) => card.id === activeCardId); //временно записал в переменную

  return (
    <>
      {offers.map((offer: Offer) => <PlaceCard key={offer.id} offer={offer} setActiveCard={setActiveCardId} placeCardClassName={placeCardClassName} />)}
    </>
  );
}

