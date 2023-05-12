import React, { useState, useEffect } from "react";
import { Banner } from "./Banner";
import { GridMovie } from "./GridMovie";
import data from "../data.json";

export const Home = () => {

  const [peliculas, setPeliculas] = useState([]);
  const [populares, setPopulares] = useState([]);

  useEffect(() => {
    setPeliculas(data.peliculas);
    setPopulares(data.populares);
  }, [data]);

  return (
    <div className="home container-streaming">
      <Banner pelicula={populares}></Banner>
      <div className="grid-container">
        <h2>Películas</h2>
        <div className="grid-content">
          {peliculas.map((pelicula) => (
              <GridMovie pelicula={pelicula} key={pelicula}> </GridMovie>
          ))}
        </div>
      </div>
    </div>
  );
};
