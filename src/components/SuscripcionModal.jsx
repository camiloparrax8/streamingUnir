import React, { useState } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';


export const SuscripcionModal = (props) => {
  const [suscripciones, setSuscripciones] = useLocalStorage(
    "suscripciones",
    []
  );
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [fecha, setFecha] = useState("");
  const [submitConfirm, setSubmitConfirm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let suscripcion = {
      id_pelicula: props.pelicula.id,
      nombre: nombre,
      correo: correo,
      fecha: fecha,
    };
    let suscripcionesInicial = suscripciones;
    suscripcionesInicial.push(suscripcion); 
    setSuscripciones(suscripcionesInicial);
    setSubmitConfirm(true)
  };

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Rentar : {props.pelicula.name}</Modal.Title>
      </Modal.Header>
      
      { submitConfirm==false ?
       <Modal.Body>
       <div className="poster-movie">
         <img src={props.pelicula.image}></img>
       </div>
       <Form onSubmit={handleSubmit}>
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
             value={fecha}
             autoFocus
             required
             onChange={(e) => setFecha(e.target.value)}
           />
         </Form.Group>
         <button className="primary-btn" type="submit">
           Rentar
         </button>
       </Form>
     
     </Modal.Body>
     :
      <Modal.Body>
       <h5 className="mt-4">Película rentada correctamente</h5>
      </Modal.Body> 
      }
    </Modal>
  );
};
