// children nesse caso vai colocar todo e qualquer componente passado nesse local
export default function Lista(props) {
    return (
        <div>
            <h1>Lista</h1>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}