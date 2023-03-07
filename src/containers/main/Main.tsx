import React from 'react'
import { bg } from '../../assets/import';
import { CallToAction } from '../../components/callToAction/CallToAction';
import { Header } from '../header/Header';
import './main.scss';

export const Main = () => {
  return (
    <div className="main">
        <div className="main__bg">
            <img src={bg} alt="bg" />
        </div>
        <div className="main__container">
            <Header />
        </div>
        <CallToAction desc="вкуснейшие" heading='Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу' text='Приготовим за 3 часа в день заказа. Доставка на авто в холодильнике.' button="Перейти в каталог" buttonDesc='9 различных видов на выбор'/>
        <h1>Для любых событий и дорогих вам людей </h1>
    </div>
  )
}
