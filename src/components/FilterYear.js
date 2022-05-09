import "../styles/FilterYear.scss";
function FilterYear(props) {
  //Función que recorre el array de años (ya ordenados y únicos) y pinta cada uno como un option del select, con value=año y key= a su index del array.
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
    props.filterByYear(ev.target.value); //Función que pasa por lifting el value del option seleccionado.
  };
  return (
    <section className="search">
      <label className="search__label" htmlFor="year">
        Filter by year
      </label>
      <select
        className="search__select"
        id="year"
        value={props.filterYear} //La variable de estado del select, para tenerlo controlado.
        onChange={handleChangeYear}
      >
        <option value="">All</option>
        {renderYear()}
      </select>
    </section>
  );
}
export default FilterYear;
