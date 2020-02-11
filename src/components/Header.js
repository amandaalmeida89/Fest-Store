import React from 'react';
import logo from '../img/logo.png';
import { StyleSheet, css } from 'aphrodite';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  img: {
    marginTop:'1vh',
    height: '8vh',
    width: '6vw',
    borderRadius:'5px', 
  },
  header:{
    boxSizing: 'border-box',
    backgroundColor:'#348BCB',
    display:'flex',
    padding: '0 15px',
    justifyContent: 'space-between',
    alignItems:'center',
    width:'100%',
    height:'10vh',
  },
  car:{
    borderRadius: '5px',
    background: '#FFCC02',
    border: 'none',
    height: '6vh',
    width: '6vh',
    fontSize:'20px'
  }
});


const Header = ({quant, total }) => {
  return (
    <header className={css(styles.header)}>
      <img className={css(styles.img)} src={logo} alt="logo" />
      <button
        onClick={()=> console.log('oi')}
        className={css(styles.car)}
      >
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
      {quant ? <span>{quant}</span> : ''}
      {total ? <span>{total}</span> : '' }
    </header>
  )
}

export default Header
