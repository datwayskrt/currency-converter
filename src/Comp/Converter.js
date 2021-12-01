import React from 'react';
import { Component } from 'react';
import './Converter.css';

export default class Converter extends Component {
    constructor(props){
        super(props);

        this.state = {
            moedaA_valor : "",
            moedaB_valor: 0,
            valorx: "USD",
            valory: "BRL"
        }
    
        this.Convert = this.Convert.bind(this);
    }
    
    Convert(){
        console.log(this.state);
        let from_to=`${this.state.valorx}_${this.state.valory}`;
        let url =`https://free.currconv.com/api/v7/convert?q=${from_to}&compact=y&apiKey=88b08b70098a7f505e95`;
    
        fetch(url)
        .then(res=>{

            return res.json();

        })
        .then(json=>{
            let cota =json[from_to].val;
            let moedaB_valor =(parseFloat(this.state.moedaA_valor * cota)).toFixed(2)
            this.setState({moedaB_valor});
        })
        
    }

    onChange = (e) => {
        const { value } = e.target;
        this.setState(prevState => {
          return { moedaA_valor: value}
      })
    }
 
    render(){
        return(
            <div className="conv">
                <div className="xugo">
                  <h2>{this.state.moedaB_valor}</h2>
                <h2>{this.state.valorx} ➡️ {this.state.valory}</h2>
                <select type="select" value={this.state.valorx} onChange={(event)=>(this.setState({valorx:event.target.value}))}>
                    <option>USD</option>
                    <option>AOA</option>
                    <option>BRL</option>
                    <option>EUR</option>
                </select>
                <input type="text" onChange={this.onChange} value={this.state.moedaA_valor} onKeyUp={this.Convert}>
                </input>
                <select type="select" value={this.state.valory} onChange={((event)=>(this.setState({valory:event.target.value})))}>
                    <option>USD</option>
                    <option>AOA</option>
                    <option>BRL</option>
                    <option>EUR</option>
                </select>
                </div>
            </div>

        )
    }




}