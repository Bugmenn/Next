// Está sendo importado de forma local dentro da variavel "estilo".
import estilo from "./integracao2.module.css"

export default function integracaoCSS() {
    return (
        <div id={estilo.integracao2}>
            <div className={estilo.vermelho}>texto</div>
            <div className={estilo.azul}>texto</div>
            <div className={estilo.branco}>texto</div>
        </div>
    )
}