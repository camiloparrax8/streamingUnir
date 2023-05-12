import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
      <h2>Busca una película</h2>
      <form className="form-search" onSubmit={buscador}>
        <input
          className="input-search"
          type="text"
          placeholder="Buscar una película"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn-search" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className="container-streaming">
        <div className="grid-container">
          <div className="grid-content">
            {peliculas.map((pelicula) => (
              <GridMovie pelicula={pelicula} key={pelicula}> </GridMovie>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
