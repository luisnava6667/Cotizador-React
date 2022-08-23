import { createContext, useState } from "react";
import {
  obtenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  formatearDinero,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);
  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const cotizarSeguro = () => {
    //base
    let resultado = 2000;

    //diferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year);
    // console.log(diferencia);

    //se resta 3% por cada año
    resultado -= (diferencia * 3 * resultado) / 100;

    //Europeo 30%
    //Americano 15%
    //Asiatico 5%
    resultado *= calcularMarca(datos.marca);

    //basic 20%
    //complete 50%
    resultado *= calcularPlan(datos.plan);

    //formatear el precio
    resultado = formatearDinero(resultado);
    // console.log(resultado);
    setCargando(true)
    setTimeout(() => {

        setResultado(resultado);
        setCargando(false)
    }, 3000)
  };
  return (
    <CotizadorContext.Provider
      value={{
        handleChangeDatos,
        datos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};
export { CotizadorProvider };
export default CotizadorContext;
