import React from 'react';
// import Input from './Input'

const Card = (props) => {
    const productsState = props.productsState;
    console.log(productsState);
    
    return (
        <section className={props.class}>
            {productsState.forEach(element => {
                
                console.log(element)
            })
                
        // <Input 
        // type = {item.image}
        //  />
            }
        </section>
    )
}
export default Card;
        // onClick={props.handleClick}>
        //         <img 
        //         src = {props.img}
        //         className = {'image'}>
        //         </img>
        //     <p>{props.name}</p>
        //     <p>{props.price}</p>
        //     <p></p>