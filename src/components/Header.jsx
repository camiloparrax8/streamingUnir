import React, { useEffect, useState} from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export const Header = () => {

  const location = useLocation();
  const [menuActive, setMenuActive] = useState({
    Inicio: true,
    Categoria: false,
    Buscar: false,
    Peliculas: false,
  });

  useEffect(() => {
    const { pathname } = location;
    setMenuActive(prevState => ({
      ...prevState,
      Inicio: pathname === '/',
      Categoria: pathname.includes('/categoria'),
      Buscar: pathname.includes('/buscar'),
      Peliculas: pathname.includes('/mis-peliculas'),
    }));
  }, [location])

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/"} className={menuActive.Inicio ? "a-active" : ""}>Inicio</Link>
            </li>
            <li>
              <Link to={"/categoria"} className={menuActive.Categoria ? "a-active" : ""}>Categoría</Link>
            </li>
            <li>
              <Link to={"/buscar"} className={menuActive.Buscar ? "a-active" : ""}>Buscar</Link>
            </li>
            <li>
            <Link to={"/mis-peliculas"} className={menuActive.Peliculas ? "a-active" : ""}>Mis Películas</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet></Outlet>
    </>
  );
};
