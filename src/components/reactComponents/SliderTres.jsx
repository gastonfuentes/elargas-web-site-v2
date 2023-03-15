import React, { useState } from "react";
import "../../styles/sliderStyles.css";

export default function SliderTres() {
  const images = [
    ["/gasoducto1.jpg", "/gasoducto2.jpg", "/llamaEncendida1.jpg"],
    ["/llamaEncendida2.jpg", "/llamaEncendida1.jpg", "/gasoducto2.jpg"],
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const [visualizador, setVisualizador] = useState(false);
  const [selectedIndexVisualizador, setSelectedIndexVisualizador] = useState(0);

  /*   const visualizador = false; */

  const previous = () => {
    const condition = selectedIndex > 0;
    const nexIndex = condition ? selectedIndex - 1 : images.length - 1;
    setSelectedIndex(nexIndex);
    setSelectedImage(images[nexIndex]);
  };

  const next = () => {
    const condition = selectedIndex < images.length - 1;
    const nexIndex = condition ? selectedIndex + 1 : 0;
    setSelectedIndex(nexIndex);
    setSelectedImage(images[nexIndex]);
  };

  const closeImg = () => {
    setVisualizador(false);
  };
  const openImg = (indice) => {
    setSelectedIndexVisualizador(indice);
    setVisualizador(true);
    /* console.log(indice); */
  };

  return (
    <>
      <div className={visualizador ? "ful-img" : "ful-img-none"}>
        <img src={selectedImage[selectedIndexVisualizador]} alt="imagen" />
        <span onClick={closeImg}>X</span>
      </div>

      <div className="slider" id="sliderTres">
        <h2>Galería de fotos</h2>
        <div className="contenedor-img">
          <div className="boton-izq">
            <button className="btnSlider" onClick={previous}>
              {"<"}
            </button>
          </div>
          <div className="tres-imagenes">
            {selectedImage.map((i, index) => (
              <img src={i} alt="imagen" onClick={() => openImg(index)} />
            ))}
          </div>
          <div className="boton-der">
            <button className="btnSlider" onClick={next}>
              {">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
