import "../styles/Filters.scss";
import FilterName from "./FilterName";
import FilterYear from "./FilterYear";

function Filters(props) {
  console.log(props.filterName);
  const handleForm = (event) => {
    event.preventDefault();
  };
  return (
    <form className="Filters" onSubmit={handleForm}>
      <FilterName
        filterByName={props.filterByName}
        filterName={props.filterName}
      />
      <FilterYear years={props.years} filterByYear={props.filterByYear} />
    </form>
  );
}

export default Filters;
