import If from "@/components/if"

export default function condicional2() {
    const numero = 3
    return (
        <div>
            {/*vai ser exibido as informações caso dependendo o número*/}
            <If teste={numero%2 === 0}>
                <h1>O número {numero} é par</h1>
            </If>
            <If teste={numero%2 !== 0}>
                <h1>O número {numero} é impar</h1>
            </If>
        </div>
    )
}