import React from 'react'
import style from './Headeralt.module.css'
import { GiHamburgerMenu } from "react-icons/gi";

const Headeralt = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.logo}>
                <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/loder.jpg" alt="" />
            </div>

            <div className={style.navbar}>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
            <div className={style.bar}><GiHamburgerMenu /></div>

        </div>
    </div>
  )
}

export default Headeralt