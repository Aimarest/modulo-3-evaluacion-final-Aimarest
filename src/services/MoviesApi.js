function getApiMovies() {
  return fetch(
    "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50"
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((movie) => {
        return {
          poster: movie.poster,
          name: movie.movie,
          fullLine: movie.full_line,
          year: parseInt(movie.year),
          director: movie.director,
          audio: movie.audio,
        };
      });
      return dataClean;
    });
}

export default getApiMovies;
