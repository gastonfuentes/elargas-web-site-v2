import React from "react";
import "../../styles/posts.css"

export default function CardPostReact(props) {
    const {imagen, titulo, texto, enlace} = props
  return (
    <div id="contenedor">
      <img src={imagen} alt="" />
      <div id="contenido">
        <h4>{titulo}</h4>
        <p>{texto}</p>
        <button>
          <a href={enlace}>ver mas</a>
        </button>
      </div>
    </div>
  );
}
