import React from 'react';
import logo from '../img/logo.png';
import { StyleSheet, css } from 'aphrodite';
import Button from './Button'

const styles = StyleSheet.create({
  img: {
    marginTop:'1vh',
    height: '8vh',
    width: '6vw',
    borderRadius:'5px', 
  },

  header:{
    backgroundColor:'#348BCB',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    width:'100%',
    height:'10vh',
  }
});


const Header = ({name, handleClick, id }) => {
  return (
    <header className={css(styles.header)}>
      <img className={css(styles.img)} src={logo} alt="logo" />
      <Button
        name={name}
        handleClick={handleClick}
        id={id}
      />
    </header>
  )
}

export default Header
