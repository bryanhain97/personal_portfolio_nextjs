import React, { useEffect } from 'react'

function Section2() {
    let listItems;
    let paragraphs;
    useEffect(() => {
        listItems = document.querySelectorAll('ul li.list-item');
        paragraphs = document.querySelectorAll('.paragraph-container p')
        console.log(listItems);
        const options = {
            rootMargin: '-150px 0px -30px 0px'
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }
                entry.target.classList.toggle('show', entry.isIntersecting);
                observer.unobserve(entry.target);
            })
        }, options);
        listItems.forEach(listItem => {
            observer.observe(listItem);
        })
        paragraphs.forEach(paragraph => {
            observer.observe(paragraph);
        })
    }, [])
    function selectTitle(e) {
        const allTitles = [...document.querySelectorAll('h2.section2-title')];
        e.target.parentNode.classList.add('selected');
        allTitles.forEach(title => {
            if (allTitles.indexOf(title) !== allTitles.indexOf(e.target)) {
                title.parentNode.classList.remove('selected');
            }
        })
    }
    return (
        <section id="about" className="section section2">
            <img className="background" src="./pictures/paper.jpeg" alt="background" />
            <div className="section2-head">
                <div className="section2-head-text head-proficiencies selected">
                    <h2 className="section2-head-text-1 section2-title" onClick={selectTitle}>proficiencies</h2>
                    <div className="paragraph-container">
                        <p>I specialize on web-development.</p>
                        <p>I help people find a fitting design for their website and build eye-catching experiences.</p>
                        <p>I focus on the front-end, but can also build full-stack applications.</p>
                        <p>Technologies i commonly use include:</p>
                        <ul>
                            <li className="list-item">HTML</li>
                            <li className="list-item">CSS</li>
                            <li className="list-item">JavaScript</li>
                            <li className="list-item">MongoDB</li>
                            <li className="list-item">Express</li>
                            <li className="list-item">React</li>
                            <li className="list-item">NodeJS</li>
                        </ul>
                    </div>
                </div>
                <div className="section2-head-text head-like">
                    <h2 className="section2-head-text-1 section2-title" onClick={selectTitle}>what i like</h2>
                    <div className="paragraph-container">
                        <p>I like to be productive.</p>
                        <p>I enjoy being physically active, reading and also listening to podcasts.</p>
                        <p>I try to eat as healthy as possible while also taking care of my finances and be aware of what i am consuming.</p>
                        <p>I like taking photos aswell and be creative.</p>
                    </div>
                </div>
                <div className="section2-head-text head-facts">
                    <h2 className="section2-head-text-1 section2-title" onClick={selectTitle}>7 facts about me</h2>
                    <div className="paragraph-container">
                        <ul className="facts-list">
                            <li className="list-item">Took a shower outside next to a bus station in the rain once</li>
                            <li className="list-item">Likes to buy books but don't read them till the end</li>
                            <li className="list-item">Martial-Arts enthusiast</li>
                            <li className="list-item">Seems to never listen to his girlfriend</li>
                            <li className="list-item">Likes to keep it simple</li>
                            <li className="list-item">Bites his nails when he's concentrated or focused</li>
                            <li className="list-item">Laid-back type of person</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section2-head-main"></div>
        </section>
    )
}

export default Section2
