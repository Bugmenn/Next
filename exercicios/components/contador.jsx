import { Component } from "react";

export default class Contador extends Component {
    
    state = {
        numero: 7,
        numero2: this.props.valorInicial ?? 0 // retorna o valor padrão sendo esse zero caso nenhum valor seja recebido
    }
    
    inc = () => {
        this.setState({
            numero2: this.state.numero2 + 1
        })
    }
    
    render() {
        return (
            <div>
                <h1>Contador</h1>
                <h2>{this.props.valorInicial}</h2>
                <h2>{this.state.numero}</h2>
                <h2>{this.state.numero2}</h2>
                <button onClick={this.inc}>+</button>
            </div>
        )
    }
}