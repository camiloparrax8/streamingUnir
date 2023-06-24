import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { crearSuscripcion } from "../service/PeliculaService";

export const SuscripcionModal = (props) => {
  const [id_movie, setId_movie] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");
  const [submitConfirm, setSubmitConfirm] = useState(false);

  useEffect(() => {
    setId_movie(props.pelicula.id);
  }, [props]);

  const guardar = async (e) => {
    e.preventDefault();
    const resultado = await crearSuscripcion(
      id_movie,
      nombre,
      correo,
      fechaVencimiento
    );
    setSubmitConfirm(true);
  };

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>
          Rentar : {props.pelicula.name} - ${props.pelicula.price}{" "}
        </Modal.Title>
      </Modal.Header>

      {submitConfirm == false ? (
        <Modal.Body>
          <div className="poster-movie">
            <img src={props.pelicula.image}></img>
          </div>
          <Form onSubmit={guardar}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={nombre}
                placeholder="Camilo Parra"
                autoFocus
                required
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                value={correo}
                placeholder="name@example.com"
                autoFocus
                required
                onChange={(e) => setCorreo(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fecha de vencimiento</Form.Label>
              <Form.Control
                type="date"
                value={fechaVencimiento}
                autoFocus
                required
                onChange={(e) => setFechaVencimiento(e.target.value)}
              />
            </Form.Group>
            <button className="primary-btn" type="submit">
              Rentar
            </button>
          </Form>
        </Modal.Body>
      ) : (
        <Modal.Body>
          <h5 className="mt-4">Película rentada correctamente</h5>
        </Modal.Body>
      )}
    </Modal>
  );
};
