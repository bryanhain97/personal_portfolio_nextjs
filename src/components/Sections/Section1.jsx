import React, { useState, useEffect } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';

function Section1() {
    const [loaded, setLoaded] = useState(false);
    const [showHostingInfo, setShowHostingInfo] = useState(false);
    const [showCodeInfo, setShowCodeInfo] = useState(false);
    let text1Container;
    let text2Container;
    useEffect(() => {
        const section1 = document.querySelector('section.section.section1');
        const source = section1.getAttribute('data-src');
        const img = document.createElement('img');
        img.src = source;
        img.addEventListener('load', () => {
            section1.style.backgroundImage = `url(${source})`
            setLoaded(true);
        })
    }, [])
    useEffect(() => {
        text1Container = document.getElementById('h1-text-container-1')
        text2Container = document.getElementById('h1-text-container-2')
        setInterval(() => {
            text1Container?.classList.toggle('hidden')
            text2Container?.classList.toggle('hidden')
        }, 4000)
    }, [loaded])
    const toggleHostingInfo = () => {
        setShowHostingInfo(!showHostingInfo);
    }
    const toggleCodeInfo = () => {
        setShowCodeInfo(!showCodeInfo);
    }
    if (showHostingInfo) {
        setTimeout(() => setShowHostingInfo(false), 3500)
    }
    if (showCodeInfo) {
        setTimeout(() => setShowCodeInfo(false), 3500)
    }
    const closeTextContainer = () => {
        document.querySelectorAll('.h1-text-container').forEach(node => {
            node.remove()
        })
    }
    return (
        <section id="home" className="section section1" data-src="./pictures/background.png">
            {loaded && (
                <>
                    <div id="h1-text-container-1" className="h1-text-container">
                        <h1 className="h1-text1 h1-text-intro">My name is Bryan.</h1>
                        <h1 className="h1-text2">I'm a self taught developer.</h1>
                    </div>
                    <div id="h1-text-container-2" className="h1-text-container hidden">
                        <h1 className="h1-text1 h1-text-intro">I'm 24 years old.</h1>
                        <h1 className="h1-text2">from Berlin, Germany.</h1>
                    </div>
                </>)}
            <div onClick={toggleCodeInfo} className="code-container">
                <h3 className="code-heading">CODE</h3>
                <div className={showCodeInfo ? "code-text show" : "code-text"}>
                    <p className="code-name"><a className="code-link" target="_blank" href="https://github.com/bryanhain97/personal-portfolio">Client</a></p>
                    <p className="code-name"><a className="code-link" target="_blank" href="https://github.com/bryanhain97/personal-portfolio-server">Server</a></p>
                </div>
            </div>
            <div onClick={toggleHostingInfo} className="hosting-container">
                <h3 className="hosting-heading">HOSTING</h3>
                <div className={showHostingInfo ? "hosting-text show" : "hosting-text"}>
                    <p className="hosting-name"><a className="hosting-link" target="_blank" href="https://www.netlify.com/">Client, Netlify</a></p>
                    <p className="hosting-name"><a className="hosting-link" target="_blank" href="https://www.heroku.com/home">Server, Heroku</a></p>
                </div>
            </div>
        </section>
    )
}

export default Section1
