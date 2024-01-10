import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export default function SharedLayout() {
  return (
    <div>
      <header className={css.header}>
        <div className={css.logo}>🎥</div>
        <nav className={css.nav}>
          <NavLink className={css.navItem} to="/" end>
            <p className={css.navItem}>
              <b>Home</b>
            </p>
          </NavLink>
          <NavLink to="/movies">
            <p className={css.navItem}>
              <b>Movies</b>
            </p>
          </NavLink>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
