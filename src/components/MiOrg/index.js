import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
  //Estado - hooks - useState
  //const [nombreVariable,funcionActualizada] = useState(valor inicial)
  console.log(props)

  
  return <section className="orgSection">
    <h3 className="title">Mi organización</h3>
    <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
  </section>
}

export default MiOrg








/* const [mostrar, actMostrar] = useState(true)

const manejarClick = () => {
  console.log("Mostrar/ocultar elemento", !mostrar)
  actMostrar(!mostrar)
} */