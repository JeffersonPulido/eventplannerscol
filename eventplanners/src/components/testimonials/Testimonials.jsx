import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Testimonials.css'

export const Testimonials = () => {
  return (
    <>
      {/* TESTIMONIALS */}
      <section id="testimonials" className="containerTestimonials">
        <div id="box">
          <h1 data-aos="zoom-in" data-aos-delay="300">Testimonios</h1>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}>
            <div data-aos="fade-down" data-aos-delay="300">
              <div className="myCarousel">
                <h3>Roberto Díaz</h3>
                <p>Event Planners es una empresa excepcional con la que tuve la oportunidad de trabajar. Los profesionales que maneja esta empresa son muy creativos, trabajan con entusiasmo y siempre entregan excelentes resultados. Muchas gracias por haber hecho el sueño de mi hija realidad.</p>
              </div>
            </div>

            <div data-aos="fade-down" data-aos-delay="300">
              <div className="myCarousel">
                <h3>Samantha Quintero</h3>
                <p>Angie y Laura solo tengo agradecimiento hacia ustedes, todo salió como lo imaginaba. Sin duda alguna las volvería a elegir una y mil veces.</p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  )
}
