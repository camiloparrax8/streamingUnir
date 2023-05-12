import React, { useState, useEffect } from "react";
import data from "../data.json";
import { GridMovie } from "./GridMovie";

export const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [peliculas, setPeliculas] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');

  useEffect(() => {
    let categoria = ["Todas"];
    setCategorias(categoria.concat(data.categorias));
    setPeliculas(data.peliculas);
  }, [data]);

  const filtro = (e) => {
    let categoria = e.target.value;
    let peliculasCategoria = [];
    if (categoria == "Todas") {
      peliculasCategoria = data.peliculas;
    } else {
      peliculasCategoria = data.peliculas.filter((item) =>
        item.categoria.includes(categoria)
      );
    }
    setPeliculas(peliculasCategoria);
    setCategoriaActiva(categoria)
  };

  return (
    <div className="category">
      <h2>Categorías</h2>
      <div className="category-container">
        {categorias.map((item) => (
          <button className={categoriaActiva == item ? "primary-btn-active" : "primary-btn"} value={item} onClick={filtro}>
            {item}{" "}
          </button>
        ))}
      </div>
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
