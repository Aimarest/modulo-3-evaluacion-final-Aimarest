import "../styles/MovieSceneDetail.scss";

function MovieSceneDetail(props) {
  return (
    <section className="MovieSceneDetail">
      <img
        src={props.movieScene.poster}
        className="MovieScene__card__image"
        alt={`Poster de la película ${props.movieScene.name}`}
        title={`Poster de la película ${props.movieScene.name}`}
      />
      <h2 className="MovieScene__card__name">{props.movieScene.name}</h2>
      <p className="MovieScene__card__fullLine">{props.movieScene.fullLine}</p>
      <p className="MovieScene__card__year">{props.movieScene.year}</p>
    </section>
  );
}

export default MovieSceneDetail;
