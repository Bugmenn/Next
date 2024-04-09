import { useState } from "react" // React Hooks

// o react não reage a mudança da variavel, por isso se usa o "useState"
export default function mouse() {
    //segunda forma de criar
    const [x, setX] = useState(0) //nesse caso x vai receber o primeiro valor e setX o segundo

    const arrayY = useState(0) //cria um array
    let y = arrayY[0] //o primeiro elemento é o valor da variavel
    const setY = arrayY[1] //o segundo é uma função que vai alterar o valor da variavel
    
    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
        fontSize: "50px"
    }
    
    function mouseMover(ev) {
        setX(ev.clientX)
        setY(ev.clientY)
    }

    return (
        <div style={estilo} onMouseMove={mouseMover}>
            <span>Eixo X:{x}</span>
            <span>Eixo Y:{y}</span>
        </div>
    )
}