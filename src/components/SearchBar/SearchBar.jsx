export default function Searchbar({ value, onChange, onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      alert('Ops! Something went wrong, enter a query in the search term');
      return;
    }
    onSubmit(value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="button-label">🔎</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          value={value}
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </form>
    </header>
  );
}
