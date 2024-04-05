// Para importar o css, deve importa-lo dentro do arquivo _app.js
// Sendo essa importação global, ou seja, todos podem usar, assim causa o problema de utilização
// portanto deve-se colocar especificações (se for filho) para não gerar problemas.

export default function integracaoCSS() {
    return (
        <div className="integracao1">
            <div className="vermelho">texto</div>
            <div className="azul">texto</div>
            <div className="branco">texto</div>
        </div>
    )
}