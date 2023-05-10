import React from 'react'
import './Navbar.css'
import LogoGold from '../../assets/images/LogoGold.webp'

export const Navbar = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="nav">
        <input type="checkbox" id="nav-check"/>
          {/* MENU NAVBAR */}
          <div className="nav-links">
            <a href="/">Inicio</a>
            <a href="/#services">Servicios</a>
            <a href="/#testimonials">Testimonios</a>
          </div>
          {/* LOGO NAVBAR */}
          <div className="nav-header">
            <img className="logoP" src={LogoGold} alt=""/>
          </div>
          {/* REDES NAVBAR */}
          <div className="socialNav">
            <a href="https://www.tiktok.com/@event.planners.col" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
            <a href="https://www.facebook.com/eventplannerscol/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/event.planners.col/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://wa.me/+573228782459/?text=Hola!%20Me%20gustaria%20realizar%20una%20cotizacion%20por%20favor,%20gracias!" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
          {/* BTN NAVBAR HAMBURGUER */}
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
      </nav>
    </>
  )
}
