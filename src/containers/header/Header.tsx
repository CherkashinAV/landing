import React from 'react';
import { geolocation, tel } from '../../assets/import';
import './header.scss';

export const Header = () => {
  return (
    <div className="header section__padding">
      <div className="header__contact">
        <div className="header__contact-logo">
          Сладкий сундук
        </div>
        <div className="header__contact-container">
          <div className="header__contact-address">
            <img src={geolocation} alt="geolocation" />
            <p>г. Санкт Петербург,<br />ул. Куйбышева 31</p>
          </div>
          <div className="header__contact-tel">
            <img src={tel} alt="tel" />
            <p><span>8 (812) 844-95-49</span><br />Ежедневно с 9:00 до 20:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
