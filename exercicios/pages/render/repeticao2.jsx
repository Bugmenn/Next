import listaProdutos from "@/data/listaProdutos"

export default function repeticao2() {
    function renderLinhas() {
        return listaProdutos.map(produto => {
            return (
                <tr key={produto.id}>
                    <td style={comBorda}>{produto.id}</td>
                    <td style={comBorda}>{produto.nome}</td>
                    <td style={comBorda}>{produto.preco}</td>
                </tr>
            )
        }) 
    }
    
    const comBorda = {border: "1px solid #000"}

    return (
        <div>
            <table style={comBorda}>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderLinhas()}
                </tbody>
            </table>
        </div>
    )
}