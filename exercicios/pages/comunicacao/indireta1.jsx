import Pai from "@/components/indireta1/Pai";
// comunicação indireta é quando o filho quer passar uma informação ao pai
// portanto o pai precisa mandar algo (função) para o filho, assim o filho consegue retornar
export default function indireta1() {
    return (
        <div>
            <Pai/>
        </div>
    )
}