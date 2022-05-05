import "../styles/MovieSceneList.scss";
import MovieSceneItem from "./MovieSceneItem";

function MovieSceneList(props) {
  const scenes = props.movies.map((movieScene, index) => {
    return (
      <li className="MovieScene__card" key={index}>
        <MovieSceneItem movieScene={movieScene} id={index} />
      </li>
    );
  });
  return (
    <section className="MovieScene__List">
      <ul>{scenes}</ul>
    </section>
  );
}

export default MovieSceneList;
