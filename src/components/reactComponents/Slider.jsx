import React, { useState } from "react";
import '../../styles/sliderStyles.css'

export default function Slider() {
  const images = [
    "gasoducto1.jpg",
    "gasoducto2.jpg",
    "llamaEncendida1.jpg",
    "llamaEncendida2.jpg",
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectNewImage = (index, images, next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };
  /*  const previuos = () => {
    const condition = selectedIndex > 0;
    const nexIndex = condition ? selectedIndex - 1 : images.length - 1;
    setSelectedIndex(nexIndex);
    setSelectedImage(images[nexIndex]);
  }; */

  /*  const next = () => {
    const condition = selectedIndex < images.length;
    const nexIndex = condition ? selectedIndex + 1 : 0;
    setSelectedIndex(nexIndex);
    setSelectedImage(images[nexIndex]);
  }; */

  return (
    <div className="slider">
      <img src={selectedImage} alt="imagen" />
      <div className="botones">
        <button className="btnSlider" onClick={previous}>{"<"}</button>
        <button className="btnSlider" onClick={next}>{">"}</button>
      </div>
    </div>
  );
}
