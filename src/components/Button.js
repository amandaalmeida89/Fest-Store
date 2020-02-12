import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  button: {
    borderRadius: '5px',
    background: '#348bcb',
    color:'white',
    border: 'none',
    height: '5vh',
    width: '15vw',
    fontWeight:'bolder',
    '@media (max-width: 768px)': {
      width:'100px',
      marginBottom:'5%'
    },
  },
});


const Button = ({ id, handleClick, name }) => {
  return (
    <button
      type="button"
      id={id}
      onClick={handleClick}
      className={css(styles.button)}
    >
      {name}
    </button>
  )
}

export default Button
