import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player/youtube'
import data from "../data.json";
import { BannerDetalle } from "./BannerDetalle";

export const Detalles = (props) => {
  const ParametrosRuta = useParams();
  const [pelicula, setPelicula] = useState();

  useEffect(() => {
    let peliculaEncontrada = data.peliculas.filter(
      (item) => item.id === ParametrosRuta.id
    );
    setPelicula(peliculaEncontrada[0]);
  }, [ParametrosRuta]);

  return (
    <div>
      {pelicula !== undefined ? (
        <>
        <div className="home container-streaming" id="detalle-container">
          <BannerDetalle pelicula={pelicula}></BannerDetalle>
          <div className="detalles-container">
            <h2>Trailer</h2>
            <ReactPlayer  width height="600px" controls="true" url={pelicula.trailer} />
          </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
