import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player/youtube'
import data from "../data.json";

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
          <div className="detalles-container row pb-4">
            <div className="col-3 p-4 m-4 ">
              <Card className="card-item">
                <Card.Img variant="top" src={pelicula.imagen} />
                <Card.Body>
                  <Card.Title>
                    <b>Titulo:</b> {pelicula.nombre}
                  </Card.Title>
                  <Card.Text>
                    {pelicula.sinopsis} <br />
                    <b>Director: </b>
                    {pelicula.director} <br />
                    <b>Duración: </b>
                    {pelicula.duracion} <br />
                    <b>Categoria: </b>
                    {pelicula.categoria} <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-8 pt-4 m-4 ">
              <h1>Trailer</h1>
              <ReactPlayer  width height="92%" controls="true" url={pelicula.trailer} />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
