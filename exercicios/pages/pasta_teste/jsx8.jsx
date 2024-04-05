import Titulo from "@/components/Titulo"
// utilizando o arquivo Titulo em outra pasta e mudando as informações
export default function pegarOutraFunc() {
    return (
        <>
            <Titulo principal="Página de cadastro" secundario="Incluir, alterar e excluir coisas"/>
            <Titulo principal="Página de login" secundario="Diferente"/>
            <Titulo principal="pequeno com true" secundario="Incluir, alterar e excluir coisas"
            pequeno={true}/>
            <Titulo principal="pequeno sem true" secundario="Incluir, alterar e excluir coisas"
            pequeno/>
        </>
    )
}