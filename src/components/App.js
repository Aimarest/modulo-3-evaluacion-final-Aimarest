import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import getApiMovies from "../services/MoviesApi";
import objectToExport from "../services/LocalStorage";
import Header from "./Header";
import Filters from "./Filters";
import Footer from "./Footer";
import MovieSceneList from "./MovieSceneList";
import MovieSceneDetail from "./MovieSceneDetail";
import getDirectors from "../services/DirectoresApi";
function App() {
  //Buscar en localStorage el valor del input del filtro.
  const inputText = objectToExport.get("inputText", "");
  //Busco en el LS lo que hay guardado con la key "movies", y si no hay nada, me retorna un array vacío (defaultValue):
  const [movieScenes, setMovieScenes] = useState(
    objectToExport.get("movies", [])
  );
  //Buscamos en el ls el valor del select del año.
  const yearSearch = objectToExport.get("yearSearch", "");
  //Variables de estado para los input de búsqueda:
  const [filterYear, setFilterYear] = useState(yearSearch);
  const [filterName, setFilterName] = useState(inputText);
const [filterDirector,setFilterDirector] = useState("");
  const [listDirector, setlistDirector] = useState([]);
  // Usamos un useEffect para ejecutar el fetch() una sóla vez al cargar la página.

  useEffect(() => {
    if (movieScenes.length === 0) {
      getApiMovies().then((data) => {
        data = data.map((scene, index) => ({
          ...scene,
          id: index,
        }));
        //Guardo en el ls lo que me ha devuelto el fetch
        objectToExport.set("movies", data);
        //Modifico la variable de estado del array de películas.
        setMovieScenes(data);
      });
    }
    return () => {
      objectToExport.set("movies", []); //Si no está vacío el LS, sustituya lo que hay por un array vacío.
    };
  }, []);
  useEffect(() => {
    getDirectors().then((data) => setlistDirector(data));
  }, []);
  //Función que recorre el array de escenas para agrupar los años de las películas en un array:
  const getYears = () => {
    const yearMovies = movieScenes.map((movie) => movie.year);

    // Función que ordena los años de menor a mayor y filtra para que ningún año se repita :

    const uniqueYear = yearMovies
      .sort((a, b) => a - b)
      .filter((movie, i) => {
        return yearMovies.indexOf(movie) === i; //indexOf devuelve el primer indice en el que se puede encontrar un elemento.Cuando el índice del elemento que se está recorriendo en ese momento no sea igual que el primer índice de ese elemento,no lo incluye en el nuevo array.
      });

    return uniqueYear;
  };

  //Filtro por año:

  const filterByYear = (value) => {
    setFilterYear(value);
    objectToExport.set("yearSearch", value);
  };

  //Fitro por nombre:
  const filterByName = (value) => {
    setFilterName(value);
    objectToExport.set("inputText", value);
  };
  //Filtro por director:
  const filterByDirector = (value) => {
    setFilterDirector(value);
  };
  //Ordenar las películas por orden alfabético y filtrado:

  const movieFilters = movieScenes
    .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
    //Si el value del select del año es "", significa que queremos all scenes, con lo cual devuelve todas.Si no está en "", significa que la usuaria ha seleccionado un año, y me devuelve las escenas en las que el año sea igual que el año seleccionado.
    .filter((movie) => {
      return filterYear === "" ? true : movie.year === parseInt(filterYear); //Tengo que hacer el parseInt porque el movie.year es un string y el filterYear es un número.
    })
    .filter((movie) => {
      if (filterName.length === 0) {
        //Significa que la usuaria no ha escrito nada en el input y me devuelve el array completo de escenas
        return true;
      } else {
        //Significa que la usuaria ha escrito algo, y me va a devolver un array de escenas cuyo nombre incluya lo que ha escrito la usuaria. Todo pasado a minusculas para que de igual como lo escriba.
        if (movie.name.toLowerCase().includes(filterName.toLowerCase())) {
          return true;
        }
      }
      return false;
    })
    .filter((movie)=>{
      return filterDirector===""?true : movie.director === filterDirector;
    })
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
                    filterYear={filterYear}
                    filterByYear={filterByYear}
                    setFilterYear={setFilterYear}
                    filterByName={filterByName}
                    setFilterName={setFilterName}
                    listDirector={listDirector}
                    filterDirector={filterDirector}
                    filterByDirector={filterByDirector}
                  />
                  <MovieSceneList movies={movieFilters} />
                </>
              }
            />
            <Route path="/movie/:movieIndex" element={<MovieSceneDetail />} />
          </Routes>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
