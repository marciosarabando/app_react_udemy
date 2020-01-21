import React, {Component} from 'react'

export default class Contador extends Component {
    //Inicializar o Estado do Componente
    state = {
        numero: 100
    }

    maisUm = (e) => {
        //this.setState({numero: this.state.numero + 1})
        this.alteraNumero(1)
        console.log(e.target)
    }

    menosUm = () => {
        //this.setState({numero: this.state.numero - 1})
        this.alteraNumero(-1)
    }

    alteraNumero = diferenca => {
        this.setState({
            numero: this.state.numero + diferenca
        })
    }

    render(){
        return(
            <div>
                <div>Número: {  this.state.numero }</div>
                <button onClick={this.maisUm}>INC</button>
                <button onClick={this.menosUm}>DEC</button>
                <button onClick={() => this.alteraNumero(10)}>Inc10</button>
                <button onClick={() => this.alteraNumero(-10)}>Dec10</button>
            </div>
        )
    }
}

//Solução 01 - Bind com Construtor
//constructor(props) {
//    super(props)
//    this.maisUm = this.maisUm.bind(this)
//}

//Solucao 02 - Usando Arrow Function no Onclick
//<button onClick={() => this.maisUm()}>INC</button>

//Solucao 03 - Transformar a função para Arrow
//maisUm = () => {
    //this.props.numero++
//    console.log(this)
//}