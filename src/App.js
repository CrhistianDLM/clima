import { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: ""
  });
  const {ciudad, pais} = busqueda;
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({  });
  const [error, setError] = useState(false)

  useEffect(() => {
    console.log(ciudad);
    const consultarAPI = async () => {
      if(consultar){
        const appId = "4136da568abe46d1aad83c96a1669253";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const response = await fetch(url);
        const result = await response.json();
        setResultado(result);
        setConsultar(false);
        if(result.cod === "404"){
          setError(true);
        }else{
          setError(false);
        }
      }
    }
      consultarAPI();
      // eslint-disable-next-line
  }, [consultar]);
  let component;
  if(error){
    component = <Error mensaje="No hay resultados"/>
  }else{
    component = <Clima resultado={resultado}/>;

  }
  return (
    <Fragment>
      <Header titulo="Clima React App"></Header>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario busqueda={busqueda} setBusqueda={setBusqueda} setConsultar={setConsultar}/>
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
