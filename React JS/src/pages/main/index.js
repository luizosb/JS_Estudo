import React, { Component } from 'react';
import api from "../../services/api";

import './style.css';

export default class Main extends Component {
    state = {
      casas: [],  
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        
        const response = await api.get("/api/casas");

        this.setState({casas: response.data});
    };

    render() {
        const { casa } = this.state;

        return(
            <div className="product-list">
              {this.state.casas.map(casa =>(
                <article key={casa.id}>
                    <strong>{casa.nomeCasa}</strong>
                    <p>{casa.endereco}</p>

                    <a href="https://gftcasadeshow.herokuapp.com/casadeshow">Acessar</a>
                </article>
              ))}
            </div>
        );
    }
}