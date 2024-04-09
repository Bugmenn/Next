import Pai from "@/components/direta/Pai";
// o componente manda a informação para o pai que manda para o filho, sendo em cascata
export default function direta() {
    return (
        <div>
            {/*nesse caso o nome é padrao e sera enviado para o pai, porem o nome é
            sobreescrito por outra informação passada*/}
            <Pai familia="Alves" nome="padrao"/>
        </div>
    )
}