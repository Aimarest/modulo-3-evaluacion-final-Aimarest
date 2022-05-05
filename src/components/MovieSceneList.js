import "../styles/MovieSceneList.scss";
import MovieSceneItem from "./MovieSceneItem";
function MovieSceneList(props) {
  const scenes = props.movies.map((movieScene) => {
    return (
      <li className="MovieScene__card">
        <MovieSceneItem movieScene={movieScene} />
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
