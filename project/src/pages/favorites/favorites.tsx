import Header from '../../components/header/header';
import FavoriteLocation from '../../components/favorite-location/favorite-location';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';
import { CityType } from '../../const';
import { Link } from 'react-router-dom';

type FavoritesScreenProps = {
  offers: Offer[]
}

export default function Favorites({ offers }: FavoritesScreenProps): JSX.Element {
  const favoriteCards = offers.filter((offer) => offer.isFavorite);
  const sortedFavoriteCards = {
    PARIS: favoriteCards.filter((card) => card.city.name === CityType.Paris),
    COLOGNE: favoriteCards.filter((card) => card.city.name === CityType.Cologne),
    BRUSSELS: favoriteCards.filter((card) => card.city.name === CityType.Brussels),
    AMSTERDAM: favoriteCards.filter((card) => card.city.name === CityType.Amsterdam),
    HAMBURG: favoriteCards.filter((card) => card.city.name === CityType.Hamburg),
    DUSSELDORF: favoriteCards.filter((card) => card.city.name === CityType.Dusseldorf)
  };

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                sortedFavoriteCards.PARIS.length !== 0 ? <FavoriteLocation offers={sortedFavoriteCards.PARIS} city={CityType.Paris} /> : ''
              }
              {
                sortedFavoriteCards.COLOGNE.length !== 0 ? <FavoriteLocation offers={sortedFavoriteCards.COLOGNE} city={CityType.Cologne} /> : ''
              }
              {
                sortedFavoriteCards.BRUSSELS.length !== 0 ? <FavoriteLocation offers={sortedFavoriteCards.BRUSSELS} city={CityType.Brussels} /> : ''
              }
              {
                sortedFavoriteCards.AMSTERDAM.length !== 0 ? <FavoriteLocation offers={sortedFavoriteCards.AMSTERDAM} city={CityType.Amsterdam} /> : ''
              }
              {
                sortedFavoriteCards.HAMBURG.length !== 0 ? <FavoriteLocation offers={sortedFavoriteCards.HAMBURG} city={CityType.Hamburg} /> : ''
              }
              {
                sortedFavoriteCards.DUSSELDORF.length !== 0 ? <FavoriteLocation offers={sortedFavoriteCards.DUSSELDORF} city={CityType.Dusseldorf} /> : ''
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}
