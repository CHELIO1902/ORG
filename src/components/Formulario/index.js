import { useState } from "react";
import "./Formulario.css";
import ListaOpciones from "../ListaOpciones";
import Campo from "../Campo";
import Boton from "../Boton";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("")
  const [puesto, actualizarPuessto] = useState("")
  const [foto, actualizarFoto] = useState("")
  const [equipo, actualizarEquipo] = useState("")

  const [titulo, actualizarTitulo] = useState("")
  const [color, actualizarColor] = useState("")

  const {regitrarColaborador, crearEquipo} = props

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar envio");
    let datosEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo
    }
    regitrarColaborador(datosEnviar)
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    //pasar los datos, como tienen el mismo nombre no hace falta pasar los datos como en la funcion manejarEnvio
    crearEquipo({titulo, colorPrimario: color});
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo 
          titulo="Puesto" 
          placeholder="Ingresar puesto" 
          required
          valor={puesto}
          actualizarValor={actualizarPuessto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones 
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={props.equipos}
        />
        <Boton texto="Crear" />
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar Titulo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo 
          titulo="Color" 
          placeholder="Ingresar el color en Hex" 
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Boton texto="Registrar equipo" />
        </form>
    </section>
  );
};

export default Formulario;
