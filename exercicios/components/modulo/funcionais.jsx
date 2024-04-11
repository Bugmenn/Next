// quando se exporta algo por padrão, pouco importa o nome, pois o arquivo que
// está importando pode usar outro nome
export default function Comp1() {
    return (
        <div>
            <h2>Comp1</h2>
        </div>
    )
}

// quando não se exporta por padrão o nome deve ser igual
export function Comp2() {
    return <h2>Comp2</h2>
}

export const Comp3 = function() {
    return <h2>Comp3</h2>
}

export const Comp4 = () => {
    return <h2>Comp4</h2>
}

export const Comp5 = () => <h2>Comp5</h2>

const Comp6 = () => (
    <div>
        <h2>Comp6</h2>
    </div>
)

const Comp7 = props => (
    <div>
        <h2>Comp7 - {props.msg}</h2>
    </div>
)

// exportando tudo junto
export {
    Comp6, Comp7
}