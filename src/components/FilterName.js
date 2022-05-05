function FilterName() {
  return (
    <>
      <label htmlFor="inputSearch">Search movie</label>
      <input
        className="search"
        autoComplete="off"
        type="search"
        name="inputSearch"
        placeholder="Filter movies"
      />
    </>
  );
}
export default FilterName;
