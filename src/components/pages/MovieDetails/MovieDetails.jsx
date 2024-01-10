import api from 'api/MOVIESAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import BtnGoBack from 'components/BtnGoBack/BtnGoBack';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  const location = useLocation();
  console.log(location.state);
  const backLinkHref = location.state?.from ?? '/';

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fatchDetails = async () => {
      const data = await api.movieByIdFacth(movieId);
      setMovieDetails({ ...data });
    };
    if (movieId) {
      fatchDetails();
    }
  }, [movieId]);

  const getFullYear = () => {
    const dateString = movieDetails.release_date;
    const dateObject = new Date(dateString);
    return dateObject.getFullYear();
  };
  const getPersentScore = () => {
    return `${Math.round(movieDetails.vote_average * 10)}%`;
  };

  return (
    <div>
      <BtnGoBack to={backLinkHref} />
      <div className={css.card}>
        <div>
          <img
            className={css.poster}
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`
                : defaultImg
            }
            alt=""
          />
        </div>
        <div>
          {' '}
          <h2 className={css.title}>
            {movieDetails.original_title}({getFullYear()})
          </h2>
          <p>User score: {getPersentScore()}</p>
          <b>Overviwe</b>
          <p>{movieDetails.overview}</p>
          <p>
            <b>Genres</b>
          </p>
          <ul className={css.genresList}>
            {movieDetails.genres &&
              movieDetails.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
          </ul>
          <div className={css.additionalInfo}>
            <Link to="cast" state={{ from: backLinkHref }}>
              <p>Cast</p>
            </Link>
            <Link to="reviews" state={{ from: backLinkHref }}>
              <p>Reviews</p>
            </Link>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
