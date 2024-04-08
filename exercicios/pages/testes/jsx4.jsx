export default function quarto() {
    const subtitulo = "Isso é JS"
    return (
        <div>
            <h1>Integração de JS e JSX</h1>
            { /* se utiliza as chaves para criar um espaço JS no meio de JSX */ }
            <h2>{subtitulo}</h2>
            <h2>3*3 != {3*3}</h2>
            <h2>{entre(9.6, 1, 10)}</h2>
        </div>
    )
}

function entre(valor, min, max) {
    if (valor >= min && valor <= max) {
        return "Sim"
    } else {
        return "Não"
    }
}