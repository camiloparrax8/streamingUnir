import React from "react";
import { Link } from "react-router-dom";

export const BannerDetalle = (props) => {
  return (
    <>
      <div className="home-poster">
        <div className="banner-img--container">
          <img src={props.pelicula.imagen}></img>
        </div>
        <div className="poster-info-content">
            <img src={props.pelicula.imagen}></img>
            <div className="content-info">
            <div className="info">
            <div className="starts-container">
              <i className="fa fa-star"></i>
              {props.pelicula.puntuacion}
            </div>
            <p>{props.pelicula.duracion}</p>
          </div>
          <div className="title">
              <h2 className="home-poster-title">{props.pelicula.nombre}</h2>
            </div>
          <div className="banner-description">
            <h6>{props.pelicula.sinopsis}</h6>
            <p><b>Publicado en: </b>{props.pelicula.año}</p>
            <p><b>Director: </b>{props.pelicula.director}</p>
            <p><b>Actores: </b>{props.pelicula.actores_principales.join(", ")}</p>
          </div>
          <div className="poster-action">
            {
                props.pelicula.categoria.map( element => 
                    <div className="primary-btn">
                        {element}
                    </div>       
                )
            }
          </div>
            </div>
        </div>
      </div>
    </>
  );
};
