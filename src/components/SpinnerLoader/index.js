import React from 'react';
import './styles.css';

export default function Spinner() {
    return (
      <div className='container'>
        <div className='spinner'>
          <div className='doubleBounce1' />
          <div className='doubleBounce2' />
        </div>
      </div>
    );
}
