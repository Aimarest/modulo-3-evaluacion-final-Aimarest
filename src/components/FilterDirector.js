function FilterDirector(props) {
  const renderDirector = () => {
    return props.listDirector.map((director, i) => {
      return (
        <option value={director} key={i}>
          {director}
        </option>
      );
    });
  };
  const handleChangeDirector = (ev) => {
    props.filterByDirector(ev.target.value);
  };
  return (
    <section className="search">
      <label className="search__label" htmlFor="director">
        Filter by director
      </label>
      <select
        className="search__select"
        id="director"
        value={props.filterDirector}
        //La variable de estado del select, para tenerlo controlado.
        onChange={handleChangeDirector}
      >
        <option value="">All</option>
        {renderDirector()}
      </select>
    </section>
  );
}
export default FilterDirector;
