import React, { useState, useEffect } from 'react'

function Section1() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const section1 = document.querySelector('section.section.section1');
        const source = section1.getAttribute('data-src');
        console.log(source);
        const img = document.createElement('img');
        img.src = source;
        img.addEventListener('load', () => {
            section1.style.backgroundImage = `url(${source})`
            setLoaded(true);
        })
    }, [])
    return (
        <section id="home" className="section section1" data-src="./pictures/background.jpeg">
            {loaded && (
                <>
                    <div id="h1-text-container-1" className="h1-text-container">
                        <h1 className="h1-text1">Hello. My name is Bryan.</h1>
                        <h1 className="h1-text2">I'm a self taught developer.</h1>
                    </div>
                    <div id="h1-text-container-2" className="h1-text-container hidden">
                        <h1 className="h1-text1">I'm 24 years old.</h1>
                        <h1 className="h1-text2">from Berlin, Germany.</h1>
                    </div>
                </>)}
        </section>
    )
}

export default Section1
