import React from 'react'
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import { Copyright } from './components/copyright/Copyright'
import { Whatsapp } from './components/btnWhatsapp/Whatsapp'
import { History } from './components/history/History'

export const HistoryPage = () => {
    return (
        <>
            <Navbar />
            <History />
            <Footer />
            <Copyright />
            <Whatsapp />
        </>
    )
}
