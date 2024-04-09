// chamada de função por meio de evento
// e é de evento
function acao1() {
    console.log("acao1")
}

export default function botao() {
    function acao2() {
        console.log("acao2")
    }

    function acao5(e) {
        console.log(e)
    }

    return (
        <div>
            <div>
                <button onClick={acao1}>Click 1</button>
                <button onClick={acao2}>Click 2</button>
                <button onClick={function () {
                    console.log("acao3")
                }}>Click 3</button>
                <button onClick={() => console.log("acao4")}>Click 4</button>
                <button onClick={acao5}>Click 5</button> {/*mostra todos a informações*/}
                <button onClick={e => acao5(e.altKey)}>Click 5v2</button> {/*mostra informações desejadas*/}
            </div>
            <div>
                <input type="text" onChange={() => console.log("Alterado")}/>
                <input type="text" onChange={e => console.log(e.target.value)}/>
            </div>
        </div>
    )
}