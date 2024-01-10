import { Link } from 'react-router-dom';
import css from './BtnGoBack.module.css';

const BtnGoBack = ({ to }) => {
  return (
    <Link to={to}>
      <div className={css.btn}>
        <div>⬅ Go Back</div>
      </div>
    </Link>
  );
};

export default BtnGoBack;
