import React from 'react';
import Header from '../components/Header'

const Teste = () => {
    return (
        <div>
            <Header 
            name="Teste"
            handleClick={() => console.log('oi')}
            id="button"/>
        </div>
    )
}

export default Teste
