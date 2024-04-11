import Pessoa from "../../components/Pessoa";

export default function exemploTS() {
    return (
        <div>
            <Pessoa nome="Marcelo" idade={20}/>
            <Pessoa nome="Maria"/>
        </div>
    )
}