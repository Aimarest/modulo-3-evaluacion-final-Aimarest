import "../styles/FilterName.scss";
function FilterName(props) {
  const handleChangeName = (ev) => {
    ev.preventDefault();

    props.filterByName(ev.target.value);
  };
  return (
    <section className="search">
      <label className="search__label" htmlFor="inputSearch">
        Search movie
      </label>
      <input
        className="search__input"
        autoComplete="off"
        type="search"
        name="inputSearch"
        placeholder="Filter movies"
        onChange={handleChangeName}
        value={props.filterName}
      />
    </section>
  );
}
export default FilterName;
