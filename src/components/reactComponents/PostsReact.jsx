import React, { useState } from "react";
import CardPostReact from "./CardPostReact";
import "../../styles/posts.css";

export default function PostsReact(props) {
  const { posts, boton } = props;

  const [numero, setNumero] = useState(6);
  const [menos, setMenos] = useState(false);

  console.log(numero);

  const more = () => {
    setNumero(posts.length);
    setMenos(true);
  };

  const less = () => {
    setNumero(6);
    setMenos(false);
  };

  return (
    <>
      <div id="super-contenedor">
        {posts.slice(0, numero).map((p) => (
          <CardPostReact
            imagen={p.frontmatter.image.url}
            titulo={p.frontmatter.title}
            texto={p.frontmatter.description}
            enlace={p.url}
          />
        ))}
      </div>
      {boton === "true" ? (
        menos ? (
          <button onClick={less} className="btn-posts">ver menos noticias </button>
        ) : (
          <button onClick={more} className="btn-posts">ver mas noticias </button>
        )
      ) : (
        ""
      )}
    </>
  );
}
