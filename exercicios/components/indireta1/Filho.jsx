export default function Filho(props) {
    console.log(props.funcao)
    return (
        <div>
            <h1>Filho</h1>
            {/*chama a função do pai sem retornar nada para o pai*/}
            <button onClick={props.funcao}>Falar com o pai 1</button>
            {/*retorna algo para o pai*/}
            <button onClick={() => props.funcao("Olá, pai", "teste", 10)}>Falar com o pai 2</button>
        </div>
    )
}