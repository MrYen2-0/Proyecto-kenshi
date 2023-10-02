  "use client";
import { useState, useEffect } from 'react';

export default function Custom() {
  const [mostrarCuadro, setMostrarCuadro] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      const mostrar = window.scrollY > 50;
      setMostrarCuadro(mostrar);
    };

    window.addEventListener('scroll', manejarScroll);
    return () => {
      window.removeEventListener('scroll', manejarScroll);
    };
  }, []);

  if (!mostrarCuadro) {
    return null;
  }

  return (
    <div id="scrollBox">
    <nav className="navegador">
      <ul className="nav-navegador">
        <div className="titulo-scrollbox">
          <a href="https://kenshi.fandom.com/" className="titulo-header">
            Kenshi Wiki
          </a>
        </div>
        <li className="nav-navegador-horizontal">
          <span>H</span>
        </li>
        <li className="nav-navegador-horizontal">
          <span>Guides</span>
        </li>
        <li className="nav-navegador-horizontal">
          <span>Characters</span>
        </li>
        <li className="nav-navegador-horizontal">
          <span>World</span>
        </li>
        <li className="nav-navegador-horizontal">
          <span>Items</span>
        </li>
      </ul>
    </nav>
  </div>
  );
}