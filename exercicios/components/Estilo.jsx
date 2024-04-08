export default function Estilo(props) {
    // azul e vermelho estão no css global na pasta styles
    const classeAplicada = props.numero>= 0 ? "azul" : "vermelho"
    
    return (
        <div>
            {/*utilizando duas chaves se cria um objeto e assim podendo se utilizar css*/}
            {/*nesse caso se o valor de numero for >= 0 a tag h1 sera #2D2 e se for menor sera #D22*/}
            <h1 style={{
                backgroundColor: props.numero>=0 ? "#2D2" : "#D22",
                color: props.color,
                textAlign: props.direita ? "right" : "left"
            }}>
                Texto1
            </h1>
            <h2 className={classeAplicada}>Texto2</h2>
            <br/>
        </div>
    )
}