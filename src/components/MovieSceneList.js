import "../styles/MovieSceneList.scss";
import MovieSceneItem from "./MovieSceneItem";

function MovieSceneList(props) { //Guardo en una constante un array que resulta de recorrer el array de escenas para pintar cada una en un movieItem, que va a ser un li de la lista. A movieItem le tengo que pasar por props la escena que va  a pintar y su id.
  const scenes = props.movies.map((movieScene, index) => {
    return (
      <li className="MovieScene__card" key={index}>
        <MovieSceneItem movieScene={movieScene} id={movieScene.id} />
      </li>
    );
  });
  if (props.movies.length === 0) {
    return (
      <p className="MovieScene__error">
        Sorry,there are no scenes where Owen Wilson says "wow" in that movie
      </p>
    );
  }
  return (
    <section className="MovieScene">
      <h2 className="MovieScene__title">Total scenes: {props.movies.length}</h2>
      <ul className="MovieScene__list">{scenes}</ul>
    </section>
  );
}

export default MovieSceneList;
