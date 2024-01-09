import { Link } from 'react-router-dom';

const BtnGoBack = ({ to }) => {
  return <Link to={to}>⬅ Go Back</Link>;
};

export default BtnGoBack;
