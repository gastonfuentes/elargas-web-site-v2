import React from "react";
import "../../styles/posts.css";

export default function CardPostReact(props) {
  const { imagen, titulo, texto, enlace, id } = props;
  return (
    <div id="contenedor">
      <img src={imagen} alt="" />
      <div id="contenido">
        <h4>{titulo}</h4>
        {/* <p>{texto}</p> */}

        <a href={"/posts/" + enlace}>Leer más</a>
      </div>
    </div>
  );
}
