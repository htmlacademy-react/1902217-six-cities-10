import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
// import { useState } from 'react';

type PlacesCardListProps = {
  offers: Offer[]
  placeCardClassName: string
  getSelectedCardId: (id: number) => void
}

export default function PlacesCardList({ offers, placeCardClassName, getSelectedCardId }: PlacesCardListProps): JSX.Element {

  return (
    <>
      {offers.map((offer: Offer) => <PlaceCard key={offer.id} offer={offer} getSelectedCardId={getSelectedCardId} placeCardClassName={placeCardClassName} />)}
    </>
  );
}

