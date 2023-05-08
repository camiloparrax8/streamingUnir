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
      <div className="category-container">
        {categorias.map((item) => (
          <button className={categoriaActiva == item ? "primary-btn-active" : "primary-btn"} value={item} onClick={filtro}>
            {item}{" "}
          </button>
        ))}
      </div>
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
