import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/useClima"
import Spinner from "./Spinner"

const AppClima = () => {

    const {resultado,cargando,error}=useClima()

  return (
    <>
        <main className="dos-columnas">
            <Formulario/>
            {cargando ? <Spinner/> : resultado?.name ? <Resultado/> : error ? <p>{error}</p> : <p>El Clima se mostrará aquí</p>}
        </main>
    </>
  )
}

export default AppClima