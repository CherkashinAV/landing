import React from 'react'
import './itemCard.scss';

interface ItemCardProps {
    img: string;
    heading: string;
    desc: string;
    price: number;
    btnText: string;
}

export const ItemCard = ({img, heading, desc, price, btnText}: ItemCardProps) => {
  return (
    <div className="item-card">
        <div className="item-card__image">
            <img src={img} alt={heading} />
        </div>
        <div className="item-card__content">
            <h1 className='item-card__heading'>{heading}</h1>
            <p className="item-card__desc">{desc}</p>
            <p className='item-card__price'>{price} ₽/шт.</p>
            <button className='item-card__button'>{btnText}</button>
        </div>
    </div>
  )
}
