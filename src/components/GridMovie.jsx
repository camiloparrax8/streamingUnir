import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { SuscripcionModal } from "./SuscripcionModal";
import { useState } from "react";


export const GridMovie = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Card className="card-item">

        <Link to={`/detalles/${props.pelicula.id}`} >

        <Card.Img variant="top"  src={props.pelicula.imagen}  />

        </Link>
        <Card.Body>
          <Card.Title>{props.pelicula.nombre}</Card.Title>
          <Card.Text>{props.pelicula.sinopsis}</Card.Text>
          <div className="action-container">
            <Link className="primary-btn" to={`/detalles/${props.pelicula.id}`}>
              Ver detalles
            </Link>
            <button
              className="icon-save-btn"
              onClick={() => setModalShow(true)}
            >
              <FontAwesomeIcon icon={faSquarePlus} />
            </button>
          </div>
        </Card.Body>
      </Card>
      <SuscripcionModal show={modalShow} onHide={() => setModalShow(false)} pelicula={props.pelicula} />
    </>
  );
};
