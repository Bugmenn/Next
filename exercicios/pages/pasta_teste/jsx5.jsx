export default function lista() {
    return (
        <div>
            {repeticao(10)}
        </div>
    )
}
// função na qual retorna a quantidade de tag span pelo número dado
function repeticao(quantidade) {
    const lista = []
    for(let i = 1; i <= quantidade; i++) {
        lista.push(<span>{i}, </span>);
    }
    return lista
}