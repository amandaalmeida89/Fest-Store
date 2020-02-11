import React from 'react';
import Input from './Input'

const Card = (props) => {
    const productsState = props.productsState;
    console.log(productsState);
    
    return (
        <section className={props.class}>
            {productsState && productsState.map(item => {
        <Input 
        type = {item.image}
         />
                
            })
                
            }
        </section>
    )
}
export default Card;
        