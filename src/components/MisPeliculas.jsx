import React from "react";
import { useLocalStorage } from "../hook/useLocalStorage";
import { useEffect, useState } from "react";
import data from "../data.json";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export const MisPeliculas = () => {
  const [suscripciones, setSuscripciones] = useLocalStorage(
    "suscripciones",
    []
  );
  const [misPeliculas, setMisPeliculas] = useState([]);

  useEffect(() => {
    let peliculasEncontradas = [];
    suscripciones.forEach((sus) => {
      data.peliculas.forEach((peli) => {
        if (peli.id === sus.id_pelicula) {
          peliculasEncontradas.push({
            id: peli.id,
            imagen: peli.imagen,
            nombre: peli.nombre,
            correo: sus.correo,
            usuario: sus.nombre,
            vencimiento: sus.fecha,
          });
        }
      });
    });
    setMisPeliculas(peliculasEncontradas);
  }, [suscripciones, data.peliculas]);

  return (
    <div className="mis-peliculas-container">
      <div className="grid-container">
        <h2>Películas</h2>
        <div className="grid-content">
          {misPeliculas.map((misPeliculas) => (
            <div key={misPeliculas} className="">
              <Card className="card-item">
                <Card.Img variant="top" src={misPeliculas.imagen} />
                <Card.Body>
                  <Card.Title>  {misPeliculas.nombre}</Card.Title>
                  <Card.Text className="fecha-vencimiento">Vence el {misPeliculas.vencimiento}</Card.Text>
                  <Card.Text> <b>Usuario</b>   {misPeliculas.usuario}</Card.Text>
                  <Card.Text> <b> Correo</b> {misPeliculas.correo}</Card.Text>
                  <div className="action-container">
                    <Link
                      className="primary-btn my-3 mx-3"
                      to={`/detalles/${misPeliculas.id}`}
                    >
                      Ver detalles
                    </Link>
                    {/* <button className="icon-save-btn">
                      <FontAwesomeIcon icon={faSquarePlus} />
                    </button> */}
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
