import React from 'react'

export default props => [
    <h1>Parte 1</h1>,
    <h1>Parte 2</h1>
]

//Solucao mais usada - Envolvendo Tudo em uma DIV
//export default props =>
//<div>
//    <h1>Parte 1</h1>
//    <h1>Parte 2</h1>
//</div>

//Solucao 2 - Usando o React Fragment
// export default props =>
// <React.Fragment>
//     <h1>Parte 1</h1>
//     <h1>Parte 2</h1>
// </React.Fragment>