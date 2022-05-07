import "../styles/FilterYear.scss";
function FilterYear(props) {
  //Función que recorre el array de años y los pinta
  const renderYear = () => {
    return props.years.map((year, i) => {
      return (
        <option value={year} key={i}>
          {year}
        </option>
      );
    });
  };
  const handleChangeYear = (ev) => {
    props.filterByYear(ev.target.value);
  };
  return (
    <section className="search">
      <label className="search__label" htmlFor="year">
        Filter by year
      </label>
      <select
        className="search__select"
        id="year"
        value={props.filterYear}
        onChange={handleChangeYear}
      >
        <option value="">All</option>
        {renderYear()}
      </select>
    </section>
  );
}
export default FilterYear;
