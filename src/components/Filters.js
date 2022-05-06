import "../styles/Filters.scss";
import FilterName from "./FilterName";
import FilterYear from "./FilterYear";

function Filters(props) {
  return (
    <form className="Filters">
      <FilterName
        filterByName={props.filterByName}
        filterName={props.filterName}
      />
      <FilterYear years={props.years} filterByYear={props.filterByYear} />
    </form>
  );
}

export default Filters;
