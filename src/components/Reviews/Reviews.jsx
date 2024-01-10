import api from 'api/MOVIESAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async id => {
      const data = await api.reviewsFetch(id);
      setReviews([...data.results]);
    };
    if (movieId) {
      fetchReviews(movieId);
    }
  }, [movieId]);

  return (
    <ul>
      {reviews[0] ? (
        reviews.map(({ author, content, id }) => (
          <li key={id}>
            <p>
              <b>{author}</b>
            </p>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <h3>No info</h3>
      )}
    </ul>
  );
}
