import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  button: {
    borderRadius: '5px',
    background: '#FFCC02',
    border: 'none',
    height: '5vh',
    width: '15vw',
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
