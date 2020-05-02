import React, {Component} from 'react';

class Divizas extends Component {

    render(){
        return(
            <div className="divisa">
                <select>
                    <option value="1">SOLES</option>
                    <option value="2">DOLARES</option>
                    <option value="3">EUROS</option>
                </select>
            </div>
        )
    }
    
}
export default Divizas;