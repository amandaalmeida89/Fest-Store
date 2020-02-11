import React from 'react';
import logo from '../img/logo.png';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  img: {
    marginTop: '1vh',
    height: '8vh',
    width: '6vw',
    borderRadius: '5px',
  },
  header: {
    boxSizing: 'border-box',
    backgroundColor: '#348BCB',
    display: 'flex',
    padding: '0 15px',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '10vh',
  },
  car: {
    borderRadius: '5px',
    background: '#348BCB',
    border: 'none',
    height: '6vh',
    fontSize: '35px',
    color:'white',
  },
  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '12vw',
    height: '5vh',
    padding: '0',
    marginRight: '0px',
  }

});


const Header = ({ quant, total, handleClick }) => {
  return (
    <header className={css(styles.header)}>
      <img className={css(styles.img)} src={logo} alt="logo" />

      <div className={css(styles.span)}>
        <button
          onClick={handleClick}
          className={css(styles.car)}
        >
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
        {quant ? <span>{quant}</span> : ''}
        {total ? <span>{Number(total).toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}</span> : ''}
      </div>
    </header>
  )
}

export default Header
