import React from 'react'
import Header from './Header/Header'
import AboutSection from './About/AboutSection'
import TelegramSection from './Telegram/TelegramSection'
import Footer from './Footer/Footer'

const LandingPage = () => {
    return (
        <>
            <div className="background-image">
                <Header />
                <AboutSection />
                <TelegramSection />
                <Footer />
            </div>
        </>
    )
}

export default LandingPage