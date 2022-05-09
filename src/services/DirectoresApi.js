function getDirectors() {
  return fetch("https://owen-wilson-wow-api.herokuapp.com/wows/directors")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
export default getDirectors;
