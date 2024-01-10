import { useEffect, useState } from 'react';
import Searchbar from 'components/SearchBar/SearchBar';
import api from 'api/MOVIESAPI';
import { useLocation, useSearchParams } from 'react-router-dom';
import Film from 'components/Film/Film';

export default function Movies() {
  const [searchResult, setSearchResult] = useState([]);

  const [sp] = useSearchParams();
  const qwery = sp.get('search');
  const location = useLocation();

  console.log(sp.get('search'));
  useEffect(() => {
    console.log('qwe', qwery);
    async function fetchQuery() {
      const data = await api.queryFetch(qwery);
      setSearchResult([...data.results]);
    }

    fetchQuery();
  }, [qwery, sp]);

  return (
    <div>
      <Searchbar />
      {qwery &&
        searchResult.map(foundMovie => (
          <div key={foundMovie.id}>
            <Film
              id={foundMovie.id}
              title={foundMovie.title}
              locations={location}
            />
          </div>
        ))}
    </div>
  );
}
