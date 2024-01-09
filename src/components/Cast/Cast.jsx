import api from 'api/MOVIESAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

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
    <ul>
      {cast.map(({ character, original_name, profile_path, id }) => (
        <li key={id}>
          <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt="" />
          <p>{original_name}</p>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
}
