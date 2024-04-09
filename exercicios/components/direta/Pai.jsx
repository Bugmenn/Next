import Filho from "./Filho";

// isso é uma comunicação direta, ou seja, o componente pai tem uma referencia do componente filho
export default function Pai(props) {
    return (
        <div>
            <h1>Familia {props.familia}</h1>
            {/*mesmo o nome sendo passado anteriormente, a informação é sobreescrita pela prioridade*/}
            <Filho nome="Gustavo" familia={props.familia}/>
            <Filho nome="Joel" familia={props.familia}/>
            {/*o operador spread "..." faz com que todas as propriedades que foram recebidas no pai passem
            para o componente filho*/}
            <Filho nome="Roberto" {...props}/>
        </div>
    )
}