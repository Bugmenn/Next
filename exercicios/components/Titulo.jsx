export default function Titulo(props) {
    // retorna paragrafo se pequeno for true
    //props.numero++; Não pode se fazer isso pois o valor é só para leitura e não pode ser mudado
    if (props.pequeno) {
        return (
            <>
                <p>{props.principal}</p>
                <p>{props.secundario}</p>
                <p>{props.numero}</p>
            </>
        )
    } else {
            return (
                <>
                    <h1>{props.principal}</h1>
                    <h2>{props.secundario}</h2>
                    <h2>{props.numero + 1}</h2> {/* isso pode ser feito pois o número não está sendo mudado */}
                </>
            )
        }
    
}