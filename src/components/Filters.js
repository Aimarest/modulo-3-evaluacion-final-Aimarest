import "../styles/Filters.scss";
import FilterName from "./FilterName";
import FilterYear from "./FilterYear";

function Filters(props) {
  return (
    <form className="Filters">
      <FilterName />
      <FilterYear years={props.years} />
    </form>
  );
}

export default Filters;
