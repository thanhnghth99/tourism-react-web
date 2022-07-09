import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Pick any destinations you love!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/ha-noi.jpg'
              text='HA NOI'
              label='Excitement'
              path='/services'
            />
            <CardItem
              src='images/ho-chi-minh.jpg'
              text='HO CHI MINH'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/da-nang.jpg'
              text='DA NANG'
              label='Peace'
              path='/services'
            />
            <CardItem
              src='images/nha-trang.png'
              text='NHA TRANG'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/hue.jpg'
              text='THUA THIEN HUE'
              label='History'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
