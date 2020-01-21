import React, { useState, useEffect } from 'react'

export default props => {
    const [contador, setContador] = useState(100)
    const [status, setParOuImpar] = useState('Par')

    //Esta função é executada sempre que o componente é montado e sempre que houver uma atualização
    useEffect(()=> {
        contador % 2 == 0 ? setParOuImpar('Par') : setParOuImpar('Impar')
    })

    return(
        <div>
            <h1>{contador}</h1>
            <h2>{status}</h2>

            <button onClick={ () => setContador(contador+1) }>Inc</button>
            <button onClick={ () => setContador(contador-1) }>Dec</button>
        </div>
    )
}