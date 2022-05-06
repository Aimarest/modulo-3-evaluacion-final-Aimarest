import "../styles/MovieSceneDetail.scss";
import { useLocation, matchPath } from "react-router";
import objectToExport from "../services/LocalStorage";

function MovieSceneDetail() {
  //Buscar cual es la pelicula de la que quiero mostrar el detalle.
  //Obtenemos la ruta de la aplicación
  const { pathname } = useLocation();
  //Buscamos si coincide con la ruta dinámica
  const routeData = matchPath("movie/:movieIndex", pathname);
  //Buscando el index de la película
  const movieIndex = routeData !== null ? routeData.params.movieIndex : "";
  //Buscamos toda la información de la escena.
  const movies = objectToExport.get("movies", []);
  const movieScene = movies.find((scene) => scene.id == movieIndex);
  console.log(movieScene);
  return (
    <section className="MovieSceneDetail">
      <img
        src={movieScene?.poster}
        className="MovieScene__card__image"
        alt={`Poster de la película ${movieScene?.name}`}
        title={`Poster de la película ${movieScene?.name}`}
      />
      <h2 className="MovieScene__card__name">{movieScene?.name}</h2>
      <p className="MovieScene__card__fullLine">{movieScene?.fullLine}</p>
      <p className="MovieScene__card__year">{movieScene?.year}</p>
    </section>
  );
}

export default MovieSceneDetail;
