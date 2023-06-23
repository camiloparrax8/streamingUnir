import React, { useState, useEffect } from "react";
import data from "../data.json";
import { GridMovie } from "./GridMovie";
import { getPeliculas, PeliculasFiltro } from "../service/PeliculaService";

export const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [peliculas, setPeliculas] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");

  useEffect(() => {
    const cargarPeliculas = async () => {
      const response = await getPeliculas();
      setPeliculas(response);
    };

    cargarPeliculas();
    let categoria = ["Todas"];
    setCategorias(categoria.concat(data.categorias));
  }, [data]);

  const filtro = async (e) => {
    let categoria = e.target.value;
    if (categoria == "Todas") {
      const response = await getPeliculas();
      setPeliculas(response);
    } else {
      const response = await PeliculasFiltro({ category: categoria });
      setPeliculas(response);
    }
    setCategoriaActiva(categoria);
  };

  return (
    <div className="category">
      <h2>Categorías</h2>
      <div className="category-container">
        {categorias.map((item) => (
          <button
            className={
              categoriaActiva == item ? "primary-btn-active" : "primary-btn"
            }
            value={item}
            onClick={filtro}
          >
            {item}{" "}
          </button>
        ))}
      </div>
      <div className="container-streaming">
        <div className="grid-container">
          <div className="grid-content">
            {peliculas.map((pelicula) => (
              <GridMovie pelicula={pelicula} key={pelicula}>
                {" "}
              </GridMovie>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
