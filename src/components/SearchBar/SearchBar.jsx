import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './SearchBar.module.css';

export default function Searchbar() {
  const [search, setSearch] = useState('');
  const [sp, setSP] = useSearchParams();
  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      alert('Ops! Something went wrong, enter a query in the search term');
      return;
    }
    setSP({ search: search });
  };
  console.log(sp.get('search'));
  const hendleSearch = e => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  return (
    <form className={css.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={css.SearchFormButton}>
        <span className={css.buttonLabel}>🔎</span>
      </button>

      <input
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        value={search}
        placeholder="Search images and photos"
        onChange={hendleSearch}
      />
    </form>
  );
}
