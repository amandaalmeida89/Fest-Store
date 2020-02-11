import React from 'react';
import ItemCard from './ItemCard'

const Card = (props) => {
    const productsState = props.productsState;
    console.log(productsState);

    return (
        <section className={props.class}>
            {productsState && productsState.map(item => 
               <ItemCard key={item.id} item={item}/>
            )}
      
        </section>
    )
}
export default Card;
