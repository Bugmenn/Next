export default function Repeticao1() {
    const listaAprovados = [
        "João",
        "Maria",
        "Ana",
        "Bia",
        "Carlos",
        "Daniel",
        "Laura",
    ]
    
    function renderLista() {
        const itens = []
        
        for (let i=0; i<listaAprovados.length; i++) {
            {/*key server para criar uma chave unica*/}
            itens.push(<li key={i}>{listaAprovados[i]}</li>)
        }

        return itens
    }

    function renderLista2() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }

    return (
        <div>
            <ul>
                {renderLista()}
            </ul>
            <br/>
            <ul>
                {renderLista2()}
            </ul>
        </div>
    )
}