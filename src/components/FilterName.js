import "../styles/FilterName.scss";
function FilterName(props) {
  const handleChangeName = (ev) => {
    ev.preventDefault(); //Evito que al darle al enter en el input se refresque la pagina.

    props.filterByName(ev.target.value); //Función que pasa por lifting el valor escrito en el input.
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
        value={props.filterName} //la variable de estado del input para tenerlo controlado.
      />
    </section>
  );
}
export default FilterName;
