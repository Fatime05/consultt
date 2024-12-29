import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

import style from './Header.module.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.time}>
                <div className={style.watch}><MdOutlineWatchLater /></div>
                <div className={style.am}><p> Mon - SAT: 6.00 am - 10.00 pm</p></div>
                <div className={style.sun}> <p>Sun: Closed</p></div>
            </div>

            <div className={style.icon}>
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaGooglePlusG />

            </div>

            <div className={style.hicons}>
              <Link to={"/basket"}><FaBasketShopping className={style.shop}/></Link>
              <Link to={"/wishlist"}><FaHeart  className={style.heart}/></Link>
            </div>
        </div>
    </div>
  )
}

export default Header