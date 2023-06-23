import React from "react";
import { Link } from "react-router-dom";

export const BannerDetalle = (props) => {
  return (
    <>
      <div className="home-poster">
        <div className="banner-img--container">
          <img src={props.pelicula.image}></img>
        </div>
        <div className="poster-info-content">
            <img src={props.pelicula.image}></img>
            <div className="content-info">
            <div className="info">
            <div className="starts-container">
              <i className="fa fa-star"></i>
              {props.pelicula.score}
            </div>
            <p>{props.pelicula.duration}</p>
          </div>
          <div className="title">
              <h2 className="home-poster-title">{props.pelicula.name}</h2>
            </div>
          <div className="banner-description">
            <h6>{props.pelicula.sinopsis}</h6>
            <p><b>Publicado en: </b>{props.pelicula.year}</p>
            <p><b>Director: </b>{props.pelicula.director}</p>
            <p><b>Actores: </b>{props.pelicula.actors}</p>
            <p><b>Categoria: </b>{props.pelicula.category}</p>
          </div>
         
            </div>
        </div>
      </div>
    </>
  );
};
