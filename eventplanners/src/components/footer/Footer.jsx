import React from 'react'
import './Footer.css'
import waves from '../../assets/svg/waves.svg'
import logoWhite from '../../assets/images/logoWhite.webp'

export const Footer = () => {
  return (
    <>
      {/* WAVE UP */}
      <img src={waves} alt="" />
      {/* FOOTER */}
      <footer>
        <div className="containerLogo">
          <a href="#">
            <img src={logoWhite} alt=""/>
          </a>
        </div>
        <div className="containerSocialNetwork">
          <a href="https://www.tiktok.com/@eventplannerscol" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
          <a href="https://www.facebook.com/eventplannerscol/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/event.planners.col/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://wa.me/+573228782459/?text=¡Hola!%20Me%20gustaría%20realizar%20una%20cotización%20por%20favor,%20gracias!" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
        </div>
      </footer>
    </>
  )
}
