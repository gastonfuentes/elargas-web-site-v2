import React from "react";

export default function InputReact({
  objeto,
  estado,
  cambiarEstado,
  label,
  placeholder,
  htmlFor,
  tipo,
  leyenda,
  expresionRegular,
  valido,
}) {
  const onChange = (e) => {
    cambiarEstado({ ...objeto, campo: e.target.value });
  };

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado)) {
        /* console.log("input correcto"); */
        cambiarEstado({ ...objeto, valido: "true" });
      } else {
        /* console.log("input incorrecto"); */
        cambiarEstado({ ...objeto, valido: "false" });
      }
    }
  };

  return (
    <div className="field">
      <label htmlFor={htmlFor}>{label}</label>
      <div>
        <input
          type={tipo}
          name={htmlFor}
          id={htmlFor}
          placeholder={placeholder}
          value={estado}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          className={valido === "true" ? "ok" : "none"}
        />
      </div>
      <p className={valido === "false"? "leyendaOk" : "leyendaNone"}>{leyenda}</p>
    </div>
  );
}
