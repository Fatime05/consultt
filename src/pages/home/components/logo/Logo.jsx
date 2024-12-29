import React from 'react'
import style from './Logo.module.css'
const Logo = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.logo}>
            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand2.png" alt="" />
            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand3.png" alt="" />
            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand4.png" alt="" />
            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand5.png" alt="" />
            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand1.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Logo