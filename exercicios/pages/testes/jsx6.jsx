import React from "react"
// fragmente server para retornar mais de um valor sem que precise estar em uma div
export default function fragment() {
    return (
        <React.Fragment>
            <h1>Titulo</h1>
            <h2>Subtitulo</h2>
        </React.Fragment>
    )
}