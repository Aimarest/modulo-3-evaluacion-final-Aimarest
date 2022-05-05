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
  return (
    <>
      <label htmlFor="year">Filter by year</label>
      <select id="year">
        <option value="All">All</option>
        {renderYear()}
      </select>
    </>
  );
}
export default FilterYear;
