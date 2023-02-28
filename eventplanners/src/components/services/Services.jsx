import React from 'react'
import './Services.css'

export const Services = () => {
  return (
    <>
      {/* SERVICES */}
      <section id="services">
        <div className="containerServices">
          <h1 data-aos="zoom-in" data-aos-delay="300">Nuestros Servicios</h1>
          <div className="row">
            <div className="service" data-aos="flip-up" data-aos-delay="600">
              <i className="fa-solid fa-list-check"></i>
              <h2>Organizacion de Eventos</h2>
              <p>Servicio profesional para planear y organizar todos los detalles de un evento de manera única.</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="800">
              <i className="fa-solid fa-calendar-days"></i>
              <h2>Decoracion de Eventos</h2>
              <p>Servicio para diseñar y crear una atmosfera única para cualquier tipo de evento.</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="1000">
              <i className="fa-solid fa-utensils"></i>
              <h2>Servicios de Catering</h2>
              <p>Servicio para preparar y servir comida y bebida para un evento y satisfacer a todos los invitados.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
