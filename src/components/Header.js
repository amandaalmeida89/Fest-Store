import React from 'react';
import logo from '../img/fest store logo.png';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  img: {
    height: '12vh',
    width: '6vw',
    '@media (max-width: 768px)': {
      width: '20vw',
      height:'12vh',
    },
  },
  header: {
    boxSizing: 'border-box',
    backgroundColor: '#ffcc02',
    display: 'flex',
    padding: '0 15px',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '10vh',
    '@media (min-width: 768px)': {
      height: '10vh',
    },
  },
  car: {
    background: '#ffcc02',
    border: 'none',
    height: '6vh',
    fontSize: '35px',
    color: '#348BCB',
    '@media (max-width: 768px)': {
      fontSize: '4vh',
    },
  },
  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '12vw',
    height: '5vh',
    padding: '0',
    marginRight: '20px',
    '@media (max-width: 768px)': {
      marginRight:'10%',
    },
 
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
        {total ? <span>{Number(total).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span> : ''}
      </div>
    </header>
  )
}

export default Header
