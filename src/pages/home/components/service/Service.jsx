import React from 'react'
import style from './Service.module.css'
import { IoSettingsOutline } from "react-icons/io5";

const Service = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.img}>
                <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png" alt="" />
            </div>

            <div className={style.text}>
                <p>Our Top Services</p>
                <h1>Our Best Services</h1>
                <p className={style.top}>Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess <br /> cillum   dolore egru lofrre dsu quality mollit anim laborumuis au <br /> dolor in voluptate velit cillu.</p>
                <p className={style.bottom}>Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate velit <br /> esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non <br /> aute iruxvfg dhjinulpadeserunt moll.</p>
                <button>MORE ABOUT US</button>
            </div>
        </div>
    </div>
  )
}

export default Service