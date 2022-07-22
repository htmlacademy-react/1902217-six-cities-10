import { AppRoute } from '../../const/enums';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';

export default function NotFoundScreen(): JSX.Element {
  return (
    <div className="page">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1>404. Страница не найдена</h1>
        <Link style={{ color: 'blue' }} to={AppRoute.Main}>Вернуться на главную</Link>
      </div>
    </div>
  );
}
