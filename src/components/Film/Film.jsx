import { Link } from 'react-router-dom';

export default function Film({ id, title }) {
  return (
    <Link to={`movies/${id}`}>
      <h3>{title}</h3>
    </Link>
  );
}
