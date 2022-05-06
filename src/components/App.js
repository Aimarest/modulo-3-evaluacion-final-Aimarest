import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import getApiMovies from "../services/MoviesApi";
import objectToExport from "../services/LocalStorage";
import Header from "./Header";
import Filters from "./Filters";
import MovieSceneList from "./MovieSceneList";
import MovieSceneDetail from "./MovieSceneDetail";

function App() {
  const [movieScenes, setMovieScenes] = useState(
    objectToExport.get("movies", [])
  );
  const [filterYear, setFilterYear] = useState("");
  const [filterName, setFilterName] = useState("");
  useEffect(() => {
    // Usamos un useEffect para ejecutar el fetch() una sóla vez al cargar la página.
    if (movieScenes.length === 0) {
      getApiMovies().then((data) => {
        //Guardo en el ls lo que me ha devuelto el fetch
        objectToExport.set("movies", data);
        //Modifico la variable de estado del array de películas.
        setMovieScenes(data);
      });
    }
  }, []);

  //Función que agrupa los años de las películas en una constante.
  const getYears = () => {
    const yearMovies = movieScenes.map((movie) => movie.year);
    // Función que filtra para que ningún año se repita:

    const uniqueYear = yearMovies.filter((movie, i) => {
      return yearMovies.indexOf(movie) === i;
    });
    return uniqueYear;
  };

  //Filtro por año:

  const filterByYear = (value) => {
    setFilterYear(value);
  };
  //Fitro por nombre:
  const filterByName = (value) => {
    setFilterName(value);
  };

  const movieFilters = movieScenes
    .filter((movie) => {
      return filterYear === "" ? true : movie.year === parseInt(filterYear);
    })
    .filter((movie) => {
      if (filterName.length === 0) {
        return true;
      } else {
        if (movie.name.toLowerCase().includes(filterName.toLowerCase())) {
          return true;
        }
      }
    });
  //Buscar cual es la pelicula de la que quiero mostrar el detalle.
  //Obtenemos la ruta de la aplicación
  const { pathname } = useLocation();
  //Buscamos si coincide con la ruta dinámica
  const dataPath = matchPath("/movie/:movieIndex", pathname);
  //Buscando el index de la película
  const movieIndex = dataPath !== null ? dataPath.params.movieIndex : null;
  //Buscamos toda la información de la escena.
  const movieFound = movieScenes.find((movie) => index === movieIndex);
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Filters
                    filterName={filterName}
                    years={getYears()}
                    filterByYear={filterByYear}
                    filterByName={filterByName}
                    setFilterName={setFilterName}
                  />
                  <MovieSceneList movies={movieFilters} />
                </>
              }
            />
            <Route
              path="/movie/:movieIndex"
              element={<MovieSceneDetail movie={movieFound} />}
            />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
