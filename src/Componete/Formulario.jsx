import React, { useState } from "react";

function Formulario() {
  const [registro, setRegistro] = useState([]);
  const [registroActual, setRegistroActual] = useState({
    nombre: "",
    correo: "",
    contra: "",
  });

  function capturarDatos(e) {
    const { name, value } = e.target;
    setRegistroActual((registroAnterior) => ({
      ...registroAnterior,
      [name]: value,
    }));
  }

  const guardarDatos = (event) => {
    event.preventDefault();
    setRegistro([...registro, registroActual]);
    setRegistroActual({ nombre: "", correo: "", contra: "" });
  };

  return (
    <>
      <form onSubmit={guardarDatos}>
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={registroActual.nombre}
            onChange={capturarDatos}
            required
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div>
          <label htmlFor="correo">Correo: </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={registroActual.correo}
            onChange={capturarDatos}
            required
            placeholder="Ingresa tu correo"
          />
        </div>
        <div>
          <label htmlFor="pass">Contraseña: </label>
          <input
            type="password"
            id="pass"
            name="contra"
            value={registroActual.contra}
            onChange={capturarDatos}
            required
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div>
          <input type="submit" value="Enviar" />
        </div>
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Contra</th>
          </tr>
        </thead>
        <tbody>
          {registro.map((datos, index) => (
            <tr key={index}>
              <td>{datos.nombre}</td>
              <td>{datos.correo}</td>
              <td>{datos.contra}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Formulario;
