import React, { useState, useEffect } from "react";
import data from "../data.json";
import { GridMovie } from "./GridMovie";

export const Buscador = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setPeliculas(data.peliculas);
  }, [data]);

  const buscador = (e) => {
    e.preventDefault();
    const strTitulo = input
      .toLowerCase()
      .replace(/(?:^|\s)\w/g, (letra) => letra.toUpperCase());
    let datosBusquedad = data.peliculas.filter(
      (item) =>
        item.nombre.includes(input) ||
        item.nombre.includes(input.toLowerCase()) ||
        item.nombre.includes(input.toUpperCase()) ||
        item.nombre.includes(strTitulo)
    );
    setPeliculas(datosBusquedad);
  };

  return (
    <div className="search">
      <form className="form-search" onSubmit={buscador}>
        <input
          className="input-search"
          type="text"
          placeholder="Buscar una película"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn-search" type="submit">
          Buscar
        </button>
      </form>
      <div className="home">
        <div className="mx-4 my-4">
          <h2>Películas</h2>
          <div className="row p-4">
            {peliculas.map((pelicula) => (
              <div key={pelicula} className="col-md-3 mt-3">
                <GridMovie pelicula={pelicula}> </GridMovie>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
