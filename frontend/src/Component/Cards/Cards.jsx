import React from 'react';
import style from './Cards.module.css';

import relationship from '../../Assets/relationshipcard.webp';
import stress from '../../Assets/stresscard.webp';
import anxiety from '../../Assets/anxietycard.webp';
import confidence from '../../Assets/confidencecard.webp';
import depression from '../../Assets/depressioncard.webp';
import life from '../../Assets/life-stylescard.webp';

const cardsData = [
  {
    id: 1,
    imgSrc: relationship,
    title: 'Relationship',
    text: 'Therapy helps you build relationships with your partner, family, and loved ones. It can help you move on from the ones that no longer work and stay for the ones that are worth it.',
    link: '#'
  },
  {
    id: 2,
    imgSrc: stress,
    title: 'Stress',
    text: 'This is a description for card 2.',
    link: '#'
  },
  {
    id: 3,
    imgSrc: anxiety,
    title: 'Anxiety',
    text: 'This is a description for card 3.',
    link: '#'
  },
  {
    id: 4,
    imgSrc: confidence,
    title: 'Confidence',
    text: 'This is a description for card 4.',
    link: '#'
  },
  {
    id: 5,
    imgSrc: depression,
    title: 'Depression',
    text: 'This is a description for card 5.',
    link: '#'
  },
  {
    id: 6,
    imgSrc: life,
    title: 'Life Styles',
    text: 'This is a description for card 6.',
    link: '#'
  }
];

const Cards = () => {
  return (
    <div className={style.cardsContainer}>
      {cardsData.map(card => (
        <div className={style.card} key={card.id}>
          <img src={card.imgSrc} alt={card.title} className={style.cardImage} />
          <div className={style.cardContent}>
            <h3 className={style.cardTitle}>{card.title}</h3>
            <p className={style.cardText}>{card.text}</p>
            <a href={card.link} className={style.readMore}>Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Cards;
