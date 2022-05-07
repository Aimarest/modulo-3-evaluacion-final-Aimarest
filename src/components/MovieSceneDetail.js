import "../styles/MovieSceneDetail.scss";
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
      <h2 className="MovieSceneDetail__name">{movieScene.name}</h2>
      <p className="MovieSceneDetail__fullLine">{movieScene.fullLine}</p>
      <p className="MovieSceneDetail__year">{movieScene.year}</p>
      <p className="MovieSceneDetail__director">{movieScene.director}</p>
      <p>
        <span className="MovieSceneDetail__audio">
          If you want to hear that "wow" click on this link
        </span>
        <a
          href={movieScene.audio}
          target="blank"
          className="MovieSceneDetail__link"
        >
          {movieScene.audio}
        </a>
      </p>
    </section>
  );
}

export default MovieSceneDetail__;
