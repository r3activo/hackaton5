import React, {Component} from 'react';
import Divizas from './Divizas.js';
import Titulo from './Titulo.js';
import Boton from './Boton.js';

class Cotizador extends Component {

    render(){
        return(
            <div>
                <Titulo/>
                <div id="conversor">
                    <div className="monto">
                        <input type="number" value="0"/>
                    </div>
                    <div>
                        <Divizas/>
                        <Divizas/>
                    </div>
                </div>
                <div>
                    <Boton/>
                </div>
            </div>
        )
    }
    
}
export default Cotizador;