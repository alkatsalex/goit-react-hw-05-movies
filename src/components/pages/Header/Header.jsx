import { NavLink, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" end>
            <p>
              <b>Home</b>
            </p>
          </NavLink>
          <NavLink to="/movies">
            <p>
              <b>Movise</b>
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
