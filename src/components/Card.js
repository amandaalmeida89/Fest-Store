import React from 'react';
import ItemCard from './ItemCard'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  Cards:{
    display:'flex',
    width:'100%',
   flexWrap:'wrap',
   justifyContent:'center',
   marginTop:'10%'
   
  },

})

const Card = (props) => {
    const productsState = props.productsState;

    return (
        <section className={css(styles.Cards)}>
            {productsState && productsState.map(item => 
               <ItemCard key={item.id} item={item}
               onClick = {(e)=> {
                   props.productsDetails(item)
                   e.preventDefault();
               }}
               />
            )}
      
        </section>
    )
}
export default Card;