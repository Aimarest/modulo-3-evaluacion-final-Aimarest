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
    <>
      <label htmlFor="year">Filter by year</label>
      <select id="year" value={props.filterYear} onChange={handleChangeYear}>
        <option value="">All</option>
        {renderYear()}
      </select>
    </>
  );
}
export default FilterYear;
