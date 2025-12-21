import React from 'react'

const Hero = () => {
    return (
        <section className="hero-img">
            <img src="src/day3-structures/assets/pic1.avif" alt="" />
            
            <div className='hero-center'>
                <h1 className='hero-heading'>Unleash Your Inner Champion Today. <br />
                    All in One Place</h1>
                <p className='hero-content'>Join the ultimate tennis experience - where passion meets performance, and every swing brings you close to victory</p>
                <button className='hero-btn'> Start your own journey </button>
            </div>
            
            <div className="hero-bottom">
                <div className="hero-BR">
                    <h5>Train with real professionals. Get the real results</h5>
                </div>
                <div className="hero-BL">
                    <a className='BL1'> Instgram </a>
                    <a className='BL2'> Facebook </a>
                    <a className='Bl3'> TikTok</a>
                </div>
            </div>
        
        </section>
    )
}

export default Hero
