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
    <div className="home">
      <Banner pelicula={populares}></Banner>
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
  );
};
