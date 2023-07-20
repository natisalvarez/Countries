
import style from './SearchBar.module.css';

const SearchBar = ({ searchName, handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={style.searchBar}
          type="search"
          name="search"
          placeholder="Search..."
          value={searchName}
          onChange={handleChange}
        />
        <button className={style.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;


