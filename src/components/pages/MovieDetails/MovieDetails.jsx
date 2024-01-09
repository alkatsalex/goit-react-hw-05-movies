import api from 'api/MOVIESAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import BtnGoBack from 'components/BtnGoBack/BtnGoBack';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  const location = useLocation();
  console.log(location.state);
  const backLinkHref = location.state?.from ?? '/';
  // --------------------------------------------------
  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fatchDetails = async () => {
      const data = await api.movieByIdFacth(movieId);
      console.log(data);
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
      {/* ---------------------------- */}
      <div>
        <img
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`
              : ''
          }
          alt=""
        />
      </div>
      <h2>
        {movieDetails.original_title}({getFullYear()})
      </h2>
      <p>User score: {getPersentScore()}</p>

      <b>Overviwe</b>

      <p>{movieDetails.overview}</p>
      <b>Genres</b>
      <ul>
        {movieDetails.genres &&
          movieDetails.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
      </ul>

      <div>
        <Link to="cast">
          <p>Cast</p>
        </Link>
        <Link to="reviews">
          <p>Reviews</p>
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
