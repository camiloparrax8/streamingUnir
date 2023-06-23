import axios from "axios";
const BASE_URL = "http://localhost:8762/";

export const getPeliculas = async () => {
  const result = await axios.get(BASE_URL + "ms-buscador/movies");
  return result.data;
};
export const PeliculasId = async (id) => {
  const result = await axios.get(BASE_URL + "ms-buscador/movies/" + id);
  return result.data;
};
export const PeliculasFiltro = async (querys) => {
  const name = querys.name ? querys.name : "";
  const description = querys.description ? querys.description : "";
  const category = querys.category ? querys.category : "";

  const result = await axios.get(
    BASE_URL +
      "ms-buscador/movies?name=" +
      name +
      "&description=" +
      description +
      "&category=" +
      category
  );
  return result.data;
};
