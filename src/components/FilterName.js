function FilterName(props) {
  const handleChangeName = (ev) => {
    ev.preventDefault();

    props.filterByName(ev.target.value);
  };
  return (
    <>
      <label htmlFor="inputSearch">Search movie</label>
      <input
        className="search"
        autoComplete="off"
        type="search"
        name="inputSearch"
        placeholder="Filter movies"
        onChange={handleChangeName}
        value={props.FilterName}
      />
    </>
  );
}
export default FilterName;
