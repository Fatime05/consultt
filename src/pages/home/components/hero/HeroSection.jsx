import React from 'react'
import style from './HeroSection.module.css'
const HeroSection = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.text}>
                <p className={style.success}>COMMITTED TO SUCCESS</p>
                <h1>We help to grow your business</h1>
                <p className={style.mollit}>Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate <br /> velit esscillumlore eu quife rulla parihatur.</p>
                <button>OUR SERVICES</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection