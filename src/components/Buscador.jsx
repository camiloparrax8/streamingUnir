import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import data from "../data.json";
import { GridMovie } from "./GridMovie";
import { PeliculasFiltro, getPeliculas } from "../service/PeliculaService";

export const Buscador = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const cargarPeliculas = async () => {
      const response = await getPeliculas();
      setPeliculas(response);
    };

    cargarPeliculas();
  }, [setPeliculas]);

  const buscador = async (e) => {
    e.preventDefault();
    const strTitulo = input
      .toLowerCase()
      .replace(/(?:^|\s)\w/g, (letra) => letra.toUpperCase());
    const response = await PeliculasFiltro({
      name: strTitulo,
    });
    setPeliculas(response);
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
            {peliculas.length > 0 ? (
              peliculas.map((pelicula) => (
                <GridMovie pelicula={pelicula} key={pelicula}>
                  {" "}
                </GridMovie>
              ))
            ) : (
              <h3>No hay resultados</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
