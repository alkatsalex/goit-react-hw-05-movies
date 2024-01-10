import api from 'api/MOVIESAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const fetchCast = async id => {
      const data = await api.castFetch(id);
      setCast([...data.cast]);
    };
    if (movieId) {
      fetchCast(movieId);
    }
  }, [movieId]);

  return (
    <ul className={css.list}>
      {cast[0] ? (
        cast.map(({ character, original_name, profile_path, id }) => (
          <li className={css.item} key={id}>
            <img
              className={css.cast}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : defaultImg
              }
              alt=""
            />
            <p>{original_name}</p>
            <p>{character}</p>
          </li>
        ))
      ) : (
        <h3>No info</h3>
      )}
    </ul>
  );
}
