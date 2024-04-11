import { useState } from "react"

// controled components são componentes vinculados a algo
export default function formulario() {
    const [valor, setValor] = useState("")

    function alterarInput() {
        setValor(valor+"!")
    }
    
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <span>{valor}</span>
            {/*pode se criar uma função dessa forma "e => nomeFunc(valorRecebe)*/}
            <input type="text" value={valor} onChange={e => setValor(e.target.value)}/>
            <button onClick={alterarInput}>Alterar</button>
            {/*sem o onChange o valor não pode ser mudado e não é vinculado a nada*/}
            <input type="text" value={valor}/>
        </div>
    )
}