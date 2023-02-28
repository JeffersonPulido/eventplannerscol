import React from 'react'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Services } from './components/services/Services'
import { Testimonials } from './components/testimonials/Testimonials'
import { Copyright } from './components/copyright/Copyright'
import { Whatsapp } from './components/btnWhatsapp/Whatsapp'

export const Landing = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Services/>
      <Testimonials/>
      <Footer/>
      <Copyright/>
      <Whatsapp/>
    </>
  )
}
