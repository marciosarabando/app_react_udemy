//Importação da Biblioteca Dom do React
import ReactDOM from 'react-dom'

//Esse import é necessário para funcionar a sintaxe JSX (html no meio do código javascript)
import React from 'react'

import PrimeiroComponente from './componentes/PrimeiroComponente'

import { CompA, CompB as B} from './componentes/DoisComponentes'

import MultiElementos from './componentes/MultiElementos'

import FamiliaSarabando from './componentes/FamiliaSarabando'

//import Familia from './componentes/Familia'
//import Membro from './componentes/Membro'

//import ComponenteComFuncao from './componentes/ComponenteComFuncao'

//import Pai from './componentes/Pai'

import ComponenteClasse from './componentes/ComponenteClasse'

import Contador from './componentes/Contador'

import Hook from './componentes/Hook'

//Variável com o Elemento da página onde será renderizado o conteúdo
const elemento = document.getElementById('root')

ReactDOM.render(

    <div>
        <Hook />
        {/*<Contador/> */}
        {/* <ComponenteClasse valor="sou um componente de classe"/> */}
        {/* <Pai/> */}
        {/*<ComponenteComFuncao/> */}
        {/*
        <Familia sobrenome="Santos" idade="123">
            <Membro nome="Marcio" />
            <Membro nome="Cassia" />
        </Familia>
        */}
        { /*<MultiElementos/> */ }
        { /* <FamiliaSarabando/> */ }
        { /*
            <CompA valor="Olá, eu sou o A"/>
            <B valor="Eu Sou o B"/>
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