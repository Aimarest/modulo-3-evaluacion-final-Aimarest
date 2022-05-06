import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { matchPath, useLocation } from "react-router";
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
  //Guardar en el localStorage las películas después de filtrarlas
  useEffect(() => {
    objectToExport.set("movies", movieFilters);
  }, [movieFilters]);

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
                  <h1>total: {movieFilters.length}</h1>
                  <MovieSceneList movies={movieFilters} />
                </>
              }
            />
            <Route
              path="/movie/:movieIndex"
              element={<MovieSceneDetail /*movie={movieFound} */ />}
            />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
