import React from 'react'
import PropTypes from 'prop-types'

function Clima({resultado}) {
    const {name, main} = resultado;
    if(!name) {return null};
    const convertToCelcius = (temp) => {
        const kelvin = 273.15;
        return (+temp - kelvin).toFixed(2);
    }
    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">{convertToCelcius(main.temp)} <span> &#x2103;</span></p>
                <p>Temperatura Máxima: {convertToCelcius(main.temp_max)} <span> &#x2103;</span></p>
                <p>Temperatura Minima: {convertToCelcius(main.temp_min)} <span> &#x2103;</span></p>
            </div>
        </div>
    )
}
Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
export default Clima
