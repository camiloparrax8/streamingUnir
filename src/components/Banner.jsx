import React from "react";
import { Link } from "react-router-dom";

export const Banner = (props) => {
  return (
    <>
      <div className="home-poster">
        <img src={props.pelicula.imagen}></img>
        <div className="poster-info-content">
          <div className="info">
            <div className="starts-container">
              <i className="fa fa-star"></i>
              {props.pelicula.puntuacion}
            </div>
            <div className="title">
              <h2 className="home-poster-title">{props.pelicula.nombre}</h2>
            </div>
            <p className="trending">Popular</p>
          </div>
          <div className="banner-description">
            <h6>{props.pelicula.sinopsis}</h6>
          </div>
          <div className="poster-action">
            <Link className="primary-btn"  to={`/detalles/${props.pelicula.id}`} >Ver Detalles</Link>
          </div>
        </div>
      </div>
    </>
  );
};
