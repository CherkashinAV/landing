import React from 'react';
import './callToAction.scss';

interface CallToActionProps {
    desc: string;
    heading: string;
    text: string;
    button: string;
    buttonDesc: string;
}

export const CallToAction = ({desc, heading, text, button, buttonDesc}: CallToActionProps) => {
  return (
    <div className="CTA">
        <div className="CTA__desc">
            {desc}
        </div>
        <h1 className='CTA__heading'>{heading}</h1>
        <p className='CTA__text'>{text}</p>
        <div className="CTA__button">
            <button>{button}</button>
            <p className='CTA__button-text'>{buttonDesc}</p>
        </div>
    </div>
  )
}
