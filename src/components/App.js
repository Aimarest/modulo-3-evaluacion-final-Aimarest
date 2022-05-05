import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import getApiMovies from "../services/MoviesApi";
import objectToExport from "../services/LocalStorage";
import Header from "./Header";
import Filters from "./Filters";
import MovieSceneList from "./MovieSceneList";
function App() {
  const [movieScenes, setMovieScenes] = useState(
    objectToExport.get("movies", [])
  );
  useEffect(() => {
    if (movieScenes.length === 0) {
      getApiMovies().then((data) => {
        //Guardo en el ls lo que me ha devuelto el fetch
        objectToExport.set("movies", data);
        //Modifico la variable de estado del array de películas.
        setMovieScenes(data);
      });
    }
  }, []);
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
                  <Filters />
                  <MovieSceneList movies={movieScenes} />
                </>
              }
            />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
