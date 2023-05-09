import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/categoria"} >Categoría</Link>
            </li>
            <li>
              <Link to={"/buscar"} >Buscar</Link>
               
            </li>
            <li>
            <Link to={"/mis-peliculas"} >Mis Películas</Link>
            </li>
          </ul>
        </nav>
      </header>
      

      <Outlet></Outlet>
    </>
  );
};
