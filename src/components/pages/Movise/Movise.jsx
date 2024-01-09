import { useEffect, useState } from 'react';
import Searchbar from 'components/SearchBar/SearchBar';
import api from 'api/MOVIESAPI';
import { Link, useLocation } from 'react-router-dom';

export default function Movies() {
  const [searchTag, setSearchTag] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState('');

  const location = useLocation();
  console.log(location);

  const hendleSearch = e => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const hendleFormSubmit = tag => {
    setSearchTag(tag);
  };

  useEffect(() => {
    async function fetchQuery() {
      const data = await api.queryFetch(searchTag);
      console.log(data);
      setSearchResult([...data.results]);
    }

    fetchQuery();
  }, [searchTag]);

  console.log(searchResult);

  return (
    <div>
      <Searchbar
        value={search}
        onChange={hendleSearch}
        onSubmit={hendleFormSubmit}
      />
      {searchTag &&
        searchResult.map(foundMovie => (
          <div key={foundMovie.id}>
            <Link to={`${foundMovie.id}`} state={{ from: location }}>
              <h3>{foundMovie.title}</h3>
            </Link>
          </div>
        ))}
    </div>
  );
}
