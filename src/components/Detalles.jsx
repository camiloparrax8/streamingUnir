import React from "react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { PeliculasId } from "../service/PeliculaService";
import { BannerDetalle } from "./BannerDetalle";

export const Detalles = (props) => {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState();

  

  useEffect(() => {
    const cargarPelicula = async () => {
      const respuesta = await PeliculasId(id);
      const pelicula = respuesta;
      setPelicula(pelicula);
      
    };
    cargarPelicula();
  }, []);


  return (
    <div>
      {pelicula !== undefined ? (
        <>
          <div className="home container-streaming" id="detalle-container">
            <BannerDetalle pelicula={pelicula}></BannerDetalle>
            <div className="detalles-container">
              <h2>Trailer {pelicula.name}</h2>
              <ReactPlayer
                width
                height="600px"
                controls="true"
                url={pelicula.trailer}
              />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
