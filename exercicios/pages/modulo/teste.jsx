// importando componente, mas com nome diferente do original
//import NomeDiferente from "@/components/modulo/funcionais" //modulo

// importando tendo que utilizar o nome original por não exportar por padrão
import Padrao, { Comp2 as NomeDiferente, Comp3, Comp4, Comp5, Comp6, Comp7 } from "@/components/modulo/funcionais"

// formas diferente de definir componentes em "funcionais"
export default function teste() {
    return (
        <div>
            <Padrao/>
            <NomeDiferente/>
            <Comp3/>
            <Comp4/>
            <Comp5/>
            <Comp6/>
            <Comp7 msg={"Olá"}/>
        </div>
    )
}