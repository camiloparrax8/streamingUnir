import React from "react";
import { NotFound } from "../components/NotFound";
import { Home } from "../components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detalles } from "../components/Detalles";
import { MisPeliculas } from "../components/MisPeliculas";
import { Categorias } from "../components/Categorias";
import { Buscador } from "../components/Buscador";

export const StreamingRouter = () => {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={<Home/>} />
        <Route path="/detalles/:id" element={<Detalles />} />
        <Route path="/mis-peliculas" element={<MisPeliculas />} />
        <Route path="/categoria" element={<Categorias/>}/>
        <Route path="/buscar" element={<Buscador/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>


  );
};