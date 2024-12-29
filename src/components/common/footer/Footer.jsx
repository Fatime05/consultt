import React from 'react'
import style from './Footer.module.css'
import { FaHeart } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.txt}><p>Copyright ©2024 All rights reserved | This template is made with <FaHeart  className={style.heart}/> by Colorlib</p></div>

            <div className={style.icon}>
            <FaTwitter />
            <FaFacebookF />
            <TbWorld />
            <RiInstagramFill />

            </div>
        </div>
    </div>
  )
}

export default Footer