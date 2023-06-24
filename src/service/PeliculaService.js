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
export const crearSuscripcion = async (
  id_movie,
  nombre,
  correo,
  fechaVencimiento
) => {
  const result = await axios.post(BASE_URL + "ms-suscriptions/suscripciones", {
    id_movie,
    nombre,
    correo,
    fechaVencimiento,
  });
  return result.data;
};

export const SuscripcionesPorCorreo = async (correo) => {
  const result = await axios.get(
    BASE_URL + "ms-suscriptions/suscripciones?correo=" + correo.correo
  );
  return result.data;
};
