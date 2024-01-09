import api from 'api/MOVIESAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import Film from 'components/Film/Film';

export default function Home() {
  const [trending, setTrending] = useState([]);

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
      <h1>Home</h1>

      {trending.map(({ id, title }) => (
        <div key={id}>
          <Film id={id} title={title} />
        </div>
      ))}
    </div>
  );
}
