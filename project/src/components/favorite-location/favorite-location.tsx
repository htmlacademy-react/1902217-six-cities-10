import { Link } from 'react-router-dom';
import PlacesCardList from '../places-card-list/places-card-list';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';
import { PlaceCardClassName } from '../../const';

type FavoriteLocationScreenProps = {
  offers: Offer[]
  city: string
}

export default function FavoriteLocation({ offers, city }: FavoriteLocationScreenProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {/* <PlacesCardList offers={offers} placeCardClassName={PlaceCardClassName.Favorite} /> */}
      </div>
    </li>
  );
}
