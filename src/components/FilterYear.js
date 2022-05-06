function FilterYear(props) {
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
      <select id="year" onChange={handleChangeYear}>
        <option value="">All</option>
        {renderYear()}
      </select>
    </>
  );
}
export default FilterYear;
