// especifica as propriedades da função pessoa
interface PessoaProps {
    nome: string
    idade?: number // propriedade opicional
}

// arquivo componente de TypeScript
export default function Pessoa(props: PessoaProps) {
    return (
        <div>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade ?? "Idade não informada"}</div>
        </div>
    )
}