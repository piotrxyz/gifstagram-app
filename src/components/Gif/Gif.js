import React from 'react';
import style from './gif.module.css';

const Gif = ({ image }) => {
    return (
        <div className={style.gif}>
            <img className={style.img} src={image} alt="" />
        </div>
    )
};


export default Gif;