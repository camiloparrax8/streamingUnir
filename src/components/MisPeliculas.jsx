import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  SuscripcionesPorCorreo,
  getPeliculas,
} from "../service/PeliculaService";

export const MisPeliculas = () => {
  const [suscripciones, setSuscripciones] = useState([]);

  const [input, setInput] = useState("");

  const buscadorPorCorreo = async (e) => {
    e.preventDefault();
    const correo = input
      .toLowerCase()
      .replace(/(?:^|\s)\w/g, (letra) => letra.toUpperCase());
    const response = await SuscripcionesPorCorreo({
      correo: correo,
    });
    const allMovies = await getPeliculas();
    let sus = [];
    response.forEach((element) => {
      let pelicula = allMovies.filter(
        (movie) => movie.id === element.id_movie
      )[0];
      sus.push({
        image: pelicula.image,
        name: pelicula.name,
        fechaVencimiento: new Date(element.fechaVencimiento).toLocaleDateString(
          "es-ES",
          { weekday: "long", day: "numeric", month: "long", year: "numeric" }
        ),
        usuario: element.nombre,
        correo: element.correo,
        total: element.precio_total,
      });
    });
    setSuscripciones(sus);
  };

  return (
    <div className="search">
      <h2>Busca una película por correo</h2>
      <form className="form-search" onSubmit={buscadorPorCorreo}>
        <input
          className="input-search"
          type="text"
          placeholder="Buscar una película"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn-search" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className="mis-peliculas-container">
        <div className="grid-container">
          <h2>Películas</h2>
          <div className="grid-content">
            {suscripciones.length > 0 ? (
              suscripciones.map((suscripciones) => (
                <div key={suscripciones} className="">
                  <Card className="card-item">
                    <Card.Img variant="top" src={suscripciones.image} />
                    <Card.Body>
                      <Card.Title> {suscripciones.name}</Card.Title>
                      <Card.Text className="fecha-vencimiento">
                        Vence el {suscripciones.fechaVencimiento}
                      </Card.Text>                      
                      <br />
                      <Card.Text>                    
                        <b> Precio Total:</b> {"$"+suscripciones.total}
                      </Card.Text>
                      <div className="action-container"></div>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <h4>No hay películas suscritas</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
