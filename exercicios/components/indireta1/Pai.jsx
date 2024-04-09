import Filho from "./Filho";

export default function Pai(props) {
    function falar(param1, param2, param3) {
        console.log("Pai foi chamado")
        console.log(param1, param2, param3)
    }

    return (
        <div>
            <Filho funcao={falar}/>
        </div>
    )
}