import React from 'react'
import style from './Member.module.css'
const Member = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.title}>
                <p>Our Professional members</p>
                <h1>Our Team Mambers</h1>
            </div>

            <div className={style.item}>
                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png" alt="" />
                    <h2>Ethan Welch</h2>
                    <p className={style.designer}>UX Designer</p>
                </div>

                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team3.png" alt="" />
                    <h2>Ethan Welch</h2>
                    <p className={style.designer}>UX Designer</p>
                </div>

                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team1.png" alt="" />
                    <h2>Ethan Welch</h2>
                    <p className={style.designer}>UX Designer</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Member