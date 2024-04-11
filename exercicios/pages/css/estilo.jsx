import Estilo from "../../components/Estilo";

// aplicando css por meio de jsx sem utilizar um arquivo css especifico
export default function usandoEstilo() {
    return (
        <div>
            <Estilo numero={3} color="#000"/>
            <Estilo numero={-13} color="#fff" direita/>
        </div>
    )
}