import { Component } from "react";
import Contador from "@/components/contador";

// componente baseado em classe
export default class ContadorPage extends Component {
    render() {
        return (
            <div>
                <Contador valorInicial={100}/>
                <Contador passo={2}/>
            </div>
        )
    }
}