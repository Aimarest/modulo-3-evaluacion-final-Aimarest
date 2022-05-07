import "../styles/MovieSceneDetail.scss";
import popcorn from "../images/popcorn.png";
import { useLocation, matchPath } from "react-router";
import objectToExport from "../services/LocalStorage";
function MovieSceneDetail__() {
  //Buscar cual es la pelicula de la que quiero mostrar el detalle.
  //Obtenemos la ruta de la aplicación
  const { pathname } = useLocation();
  //Buscamos si coincide con la ruta dinámica
  const routeData = matchPath("movie/:movieIndex", pathname);
  //Buscamos el index de la película
  const movieIndex = routeData !== null ? routeData.params.movieIndex : "";
  //Buscamos toda la información de la escena.
  const movies = objectToExport.get("movies", []);
  const movieScene = movies.find((scene) => scene.id === parseInt(movieIndex));
  return (
    <section className="MovieSceneDetail">
      <img
        src={movieScene.poster}
        className="MovieSceneDetail__image"
        alt={`Poster de la película ${movieScene.name}`}
        title={`Poster de la película ${movieScene.name}`}
      />
      <div className="MovieSceneDetail__info">
        <h2 className="MovieSceneDetail__name">{movieScene.name}</h2>
        <p className="MovieSceneDetail__director">
          Directed by: {movieScene.director}
        </p>{" "}
        <p className="MovieSceneDetail__year">{movieScene.year}</p>
        <p className="MovieSceneDetail__fullLine">{movieScene.fullLine}</p>
        <a
          href={movieScene.audio}
          target="blank"
          className="MovieSceneDetail__link"
        >
          If you want to hear that "wow" click here
        </a>
        <img
          className="MovieSceneDetail__popcorn"
          src={popcorn}
          alt="popcorn"
          title="popcorns"
        />
      </div>
    </section>
  );
}

export default MovieSceneDetail__;
