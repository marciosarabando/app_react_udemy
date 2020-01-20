//Importação da Biblioteca Dom do React
import ReactDOM from 'react-dom'

//Esse import é necessário para funcionar a sintaxe JSX (html no meio do código javascript)
import React from 'react'

import PrimeiroComponente from './componentes/PrimeiroComponente'

import { CompA, CompB as B} from './componentes/DoisComponentes'

import MultiElementos from './componentes/MultiElementos'

//Variável com o Elemento da página onde será renderizado o conteúdo
const elemento = document.getElementById('root')

ReactDOM.render(

    <div>
        { /*<MultiElementos/> */ }

        
            <CompA valor="Olá, eu sou o A"/>
            <B valor="Eu Sou o B"/>
        { /*
            <PrimeiroComponente valor="Bom dia!!" aBcD={2**8}/> 
         */}

    </div>

, elemento);

//Variavel com conteúdo JSX 
//const jsx = <ul><li>1) Marcio</li><li>1) Cassia</li></ul>

//Renderização do Conteúdo no elemento
//ReactDOM.render(
//    jsx
//, elemento);