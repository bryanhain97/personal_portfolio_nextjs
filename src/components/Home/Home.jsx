import React from 'react'
import background from '../../videos/background.mp4'


function Home() {
    return (
        <section className="home-container" id="section-home-container">
            <video muted autoPlay loop>
                <source src={background}></source>
            </video>
            <h1>You are in Home - Route</h1>
        </section>
    )
}

export default Home
