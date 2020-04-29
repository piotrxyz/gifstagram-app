import React from 'react';
import style from './gif.module.css';

const Gif = ({ image, link, title, alt }) => {
    return (
        <div className={style.gif}>
          <a href={link}>
            <img className={style.img} src={image} alt={alt} title={title} />
              </a>
        </div>
    )
};

export default Gif;