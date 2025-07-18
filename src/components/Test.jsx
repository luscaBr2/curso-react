// Componente de classe estão caindo em desuso, por isso não é recomendado usar, mas é interessante saber como funciona
// Esse componente é um exemplo de como criar um componente de classe no React, não é usado no projeto atual

import React from 'react';

class Test extends React.Component {

    // para usar os props
    constructor(props) {
        super(props);
        this.state = {
            message: "Olá mundo :)"
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}

export default Test;