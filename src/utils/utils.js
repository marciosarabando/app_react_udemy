import React from 'react'

export function filhosComProps(props){
    //API do React para clonar e ler a propriedade de todos os Filhos
    React.Children.map(props.children, filho => {
        return React.cloneElement(filho, { ...props })
    })
}