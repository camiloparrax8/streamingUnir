import React, { useState, useEffect } from "react";
import { Banner } from "./Banner";
import { GridMovie } from "./GridMovie";
import { getPeliculas } from "../service/PeliculaService";

export const Home = () => {
  const [pelicula, setPelicula] = useState([]);
  const [popular, setPopular] = useState(null);

  useEffect(() => {
    const cargarPeliculas = async () => {
      const respuesta = await getPeliculas();
      setPelicula(respuesta);
      const cantidad = respuesta.length;
      const indexPopular = Math.floor(Math.random() * cantidad);
      setPopular(respuesta[indexPopular]);
    };

    cargarPeliculas();
  }, []);

  return (
    <div className="home container-streaming">
      {popular && <Banner pelicula={popular} />}
      <div className="grid-container">
        <h2>Películas</h2>
        <div className="grid-content">
          {pelicula.map((pelicula) => (
            <GridMovie pelicula={pelicula} key={pelicula.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
