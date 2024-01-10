import { Link } from 'react-router-dom';
import css from './Film.module.css';

export default function Film({ id, title, locations }) {
  return (
    <Link to={`${id}`} state={{ from: locations }}>
      <h3 className={css.box}>{title}</h3>
    </Link>
  );
}
