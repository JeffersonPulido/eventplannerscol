import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <>
      {/* INIT PAGE INFORMATION */}
      <section className="infoContainer" id="home">
        <div className="imagesLeft zoomIn">
          {/* <img src="./assets/images/info.jpg" alt="imgInfo" className="imgInfo"> */}
        </div>
        <div className="textRight">
          <p className="infoTitle bounceIn">Bienvenidos a</p>
          <p className="infoTitlemin bounceInRight">Event Planners</p>
          <p className="infoDesc">Te ayudamos a organizar el evento perfecto. Desde fiestas privadas hasta bodas o eventos
            corporativos, ofrecemos un servicio de planificación de eventos profesionales para todas sus necesidades.
            Haremos de tu evento algo memorable.</p>
          <div className="btnMore">
            <a className="btn" href="/history">Leer más</a>
          </div>
        </div>
      </section>
    </>
  )
}
