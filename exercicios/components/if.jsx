// vai retornar as informações filhas se teste for verdade
export default function If(props) {
    if (props.teste) {
        return props.children
    } else {
        return null
    }
}