import React from 'react'
import { ItemCard } from '../../components/itemCard/ItemCard';
import { carts } from '../../mocks/mock';
import './menu.scss';

export const Menu = () => {
  return (
    <div className="menu section__margin">
        <div className="menu__items">
            {carts.map((cart, index) => 
                <ItemCard img={cart.img} heading={cart.heading} desc={cart.desc} price={cart.price} btnText={cart.btnText} key={index}/>
            )}
        </div>
    </div>
  )
}
