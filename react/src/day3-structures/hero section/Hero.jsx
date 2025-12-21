import React from 'react'

const Hero = () => {
    return (
        <section className="hero-img">
            <img src="https://images.unsplash.com/photo-1709403552725-97e0ba206cb8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            
            <div className='hero-center'>
                <h1 className='hero-heading'>Unleash Your Inner Champion Today. <br />
                    All in One Place</h1>
                <p className='hero-content'>Join the ultimate tennis experience - where passion meets performance, <br />and every swing brings you close to victory</p>
                <button className='hero-btn'> Start your own journey </button>
            </div>
            
            <div className="hero-bottom">
                <div className="hero-BR">
                    <h5>Train with real professionals. <br />
                    Get the real results</h5>
                </div>
                <div className="hero-BL">
                    <a className='BL1'> Instagram <i className="ri-arrow-right-up-long-line"></i></a>
                    <a className='BL2'> Facebook <i className="ri-arrow-right-up-long-line"></i></a>
                    <a className='Bl3'> TikTok <i className="ri-arrow-right-up-long-line"></i></a>
                </div>
            </div>
        
        </section>
    )
}

export default Hero
