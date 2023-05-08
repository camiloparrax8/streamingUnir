import React, { useState } from "react";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/categoria">Categoría</a></li>
          <li><a href="/buscar">Buscar</a></li>
          <li><a href="/mis-peliculas">Mis Películas</a></li>
        </ul>
      </nav>
    </header>
  );
}


