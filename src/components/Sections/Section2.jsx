import React, { useEffect } from 'react'

function Section2() {
    let listItems;
    let paragraphs;
    useEffect(() => {
        listItems = document.querySelectorAll('ul li.list-item');
        paragraphs = document.querySelectorAll('.paragraph-container p')
        const options = {
            rootMargin: '-50px 0px 0px 0px'
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return
                }
                else {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target)
                }
            })
        }, options);
        listItems.forEach(listItem => {
            observer.observe(listItem);
        })
        paragraphs.forEach(paragraph => {
            observer.observe(paragraph);
        })
    }, [])
    return (
        <section id="about" className="section section2">
            <div className="section2-head">
                <div className="section2-head-text head-proficiencies">
                    <h2 className="section2-head-text-1 section2-title">proficiencies</h2>
                    <div className="paragraph-container">
                        <p>I specialize on web-development.</p>
                        <p>I help people find a fitting design for their website and build eye-catching experiences.</p>
                        <p>I focus on the front-end, but can also build full-stack applications.</p>
                        <p>Technologies i commonly use include:</p>
                        <ul>
                            <li className="list-item">HTML</li>
                            <li className="list-item">CSS</li>
                            <li className="list-item">JavaScript</li>
                            <li className="list-item">TypeScript</li>
                            <li className="list-item">MongoDB</li>
                            <li className="list-item">Express</li>
                            <li className="list-item">React</li>
                            <li className="list-item">NodeJS</li>
                            <li className="list-item">Git</li>
                            <li className="list-item">Webpack</li>
                            <li className="list-item">Testing Library</li>
                            <li className="list-item">Jest</li>
                            <li className="list-item">Three.js</li>
                        </ul>
                    </div>
                </div>
                <div className="section2-head-text head-like">
                    <h2 className="section2-head-text-1 section2-title">what i like</h2>
                    <div className="paragraph-container">
                        <p>Generally, i like to be productive</p>
                        <p>I like being physically active and try to keep my body healthy and strong</p>
                        <p>I like reading and also listening to podcasts</p>
                        <p>I like to help people when i can</p>
                        <p>Sometimes i enjoy having a walk outside and take pictures</p>
                    </div>
                </div>
                <div className="section2-head-text head-facts">
                    <h2 className="section2-head-text-1 section2-title">7 facts about me</h2>
                    <div className="paragraph-container">
                        <ul className="facts-list">
                            <li className="list-item">Took a shower outside next to a bus station in the rain once</li>
                            <li className="list-item">Likes to buy books but don't always read them till the end</li>
                            <li className="list-item">Martial-Arts enthusiast</li>
                            <li className="list-item">Has no problem with going to the cinema alone</li>
                            <li className="list-item">Likes to keep it simple</li>
                            <li className="list-item">Sometimes a little bit reserved</li>
                            <li className="list-item">Laid-back type of person</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2
