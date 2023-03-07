import React from 'react';
import { downCloud, handPhone, upperCloud } from '../../assets/import';
import { CallToAction } from '../../components/callToAction/CallToAction';
import './content.scss';

export const Content = () => {
  return (
    <div className="content">
      <img src={upperCloud} alt="cloud" />
      <div className="content__container">
        <div className="content_image">
          <img src={handPhone} alt="hand with phone" />

        </div>
        <CallToAction desc='Не нашли то что нужно?' heading='Приготовим заказ любой сложности по фото или эскизу' text='Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость за 30 минут' button='Загрузить фотографию' buttonDesc=''/>
        <div className="content__up-cloud">

          <img src={downCloud} alt="cloud" />
        </div>
      </div>
    </div>  
  )
}
