import { Component } from "react";

export default class Contador extends Component {
    
    state = {
        numero: 7,
        numero2: this.props.valorInicial ?? 0, // retorna o valor padrão sendo esse zero caso nenhum valor seja recebido
        passo: this.props.passo ?? 1
    }

    // ou
    /*constructor(props) {
        super(props)

        this.state = {
            numero: 7,
            numero2: props.valorInicial ?? 0, // retorna o valor padrão sendo esse zero caso nenhum valor seja recebido
            passo: props.passo ?? 1
        }
    }*/
    
    inc = () => {
        this.setState({
            numero2: this.state.numero2 + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero2: this.state.numero2 - (this.props.passo ?? 1)
        })
    }

    alterarPasso = (ev) => {
        this.setState({passo: +ev.target.value})
    }
    
    render() {
        return (
            <div>
                <h1>Contador</h1>
                <h2>{this.props.valorInicial}</h2>
                <h2>{this.state.numero}</h2>
                <h2>{this.state.numero2}</h2>
                <input type="number" min={1} max={1000} value={this.state.passo} 
                onChange={this.alterarPasso}/>
                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}