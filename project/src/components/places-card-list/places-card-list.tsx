import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlacesCardListProps = {
  offers: Offer[]
  placeCardClassName: string
  getActiveCard: (offer: Offer) => void
}

export default function PlacesCardList({ offers, placeCardClassName, getActiveCard }: PlacesCardListProps): JSX.Element {

  return (
    <>
      {offers.map((offer: Offer) => <PlaceCard key={offer.id} offer={offer} getActiveCard={getActiveCard} placeCardClassName={placeCardClassName} />)}
    </>
  );
}

