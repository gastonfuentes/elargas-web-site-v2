import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/form.css"

export default function FormContactoLlama() {
  const form = useRef();

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
      <div className="field">
        <label for="user_name">Nombre y apellido</label>
        <input type="text" name="user_name" id="user_name" />
      </div>
      <div className="field">
        <label for="user_email">Correo electrónico</label>
        <input type="text" name="user_email" id="user_email" />
      </div>
      <div className="field">
        <label for="message">Barrio</label>
        <input type="text" name="message" id="message" />
      </div>
      <div className="field">
        <label for="contact_number">Teléfono</label>
        <input type="text" name="contact_number" id="contact_number" />
      </div>

      <input type="submit" id="button" value="Enviar" />
    </form>
  );
}
