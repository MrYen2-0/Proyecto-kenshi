"use client";

import { useState, useEffect } from 'react';

export default function Carrusel() {
  const [imagenActual, setImagenActual] = useState(0);
  const imagenes = ["/img/Heng1.jpg", "/img/LoFi_Campout.jpg", "/img/Screenshot_1.jpg"];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((imagenActual + 1) % imagenes.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => {
      clearInterval(intervalo);
    };
  }, [imagenActual]);

  return (
    <div className="imagen-cuadro">
      <div className="bienvenida-imagen">
        <div className="gallery">
          <img src={imagenes[imagenActual]} alt={`Imagen ${imagenActual + 1}`} />
        </div>
      </div>
    </div>
  );
}
