import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/form.css";
import InputReact from "./InputReact";

export default function FormContactoLlama() {
  const form = useRef();

  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [barrio, cambiarBarrio] = useState({ campo: "", valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });

  const expresiones = {
    barrio: /^[a-zA-Z0-9_-\s]{4,40}$/, // Letras, números, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{6,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 dígitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{6,14}$/, // 7 a 14 números.
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jp1nvsn",
        "template_jsvhbkl",
        form.current,
        "jBfnrVi1kbYu5YwLQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <InputReact
        objeto={nombre}
        estado={nombre.campo}
        cambiarEstado={cambiarNombre}
        tipo="text"
        label="Nombre y apellido"
        placeholder="Ej: Marcela Manrique"
        htmlFor="user_name"
        leyenda="por favor escriba correctamente su nombre y apellido"
        expresionRegular={expresiones.nombre}
        valido={nombre.valido}
      />

      <InputReact
        objeto={correo}
        estado={correo.campo}
        cambiarEstado={cambiarCorreo}
        tipo="email"
        label="Email"
        placeholder="Ej: MarcelaManrique@gmail.com"
        htmlFor="user_email"
        leyenda="por favor escriba correctamente su correo electrónico"
        expresionRegular={expresiones.correo}
        valido={correo.valido}
      />

      {/* <div className="field">
        <label htmlFor="user_email">Correo electrónico</label>
        <input type="text" name="user_email" id="user_email" />
      </div> */}

      <InputReact
        objeto={barrio}
        estado={barrio.campo}
        cambiarEstado={cambiarBarrio}
        tipo="text"
        label="Barrio"
        placeholder="Ej: Santa Justina"
        htmlFor="message"
        leyenda="por favor escriba correctamente su barrio"
        expresionRegular={expresiones.barrio}
        valido={barrio.valido}
      />

      {/* <div className="field">
        <label htmlFor="message">Barrio</label>
        <input type="text" name="message" id="message" />
      </div> */}

      <InputReact
        objeto={telefono}
        estado={telefono.campo}
        cambiarEstado={cambiarTelefono}
        tipo="number"
        label="Telefono"
        placeholder="Ej: 3804667788"
        htmlFor="contact_number"
        leyenda="por favor escriba correctamente su numero de telefono"
        expresionRegular={expresiones.telefono}
        valido={telefono.valido}
      />

      {/* <div className="field">
        <label htmlFor="contact_number">Teléfono</label>
        <input type="text" name="contact_number" id="contact_number" />
      </div> */}

      <div className="check-terminos">
        <label>
          <input type="checkbox" name="terminos" id="terminos" />
          Acepto los términos y condiciones
        </label>
      </div>

      {false && (
        <div className="mensaje-error">
          <p>
            <b>Error: </b> Por favor rellene correctamente el formulario.
          </p>
        </div>
      )}

      <div className="boton-form">
        <input type="submit" id="button" value="Enviar" />
        <p>Formulario enviado correctamente</p>
      </div>
    </form>
  );
}
