import api from 'api/MOVIESAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import Film from 'components/Film/Film';
import { useLocation } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function test() {
      const { results } = await api.trendingFetch();
      console.log(results);

      setTrending(results);
    }

    test();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending Today</h1>
      <ul>
        {trending.map(({ id, title }) => (
          <li key={id}>
            <Film id={`movies/${id}`} title={title} locations={location} />
          </li>
        ))}
      </ul>
    </div>
  );
}
