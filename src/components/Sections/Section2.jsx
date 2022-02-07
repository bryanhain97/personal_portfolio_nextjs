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
            <div className="section2-head">
                <div className="section2-head-text head-proficiencies selected">
                    <h2 className="section2-head-text-1 section2-title" onClick={selectTitle}>proficiencies</h2>
                    <div className="paragraph-container">
                        <p>I specialize on web-development.</p>
                        <p>I help people find a fitting design for their needs and build eye-catching experiences.</p>
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
                        <p>I specialize on web-development.</p>
                        <p>I help people find a fitting design for their needs and build eye-catching experiences.</p>
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
                <div className="section2-head-text head-facts">
                    <h2 className="section2-head-text-1 section2-title" onClick={selectTitle}>10 facts</h2>
                    <div className="paragraph-container">
                        <p>I specialize on web-development.</p>
                        <p>I help people find a fitting design for their needs and build eye-catching experiences.</p>
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
            </div>
            <div className="section2-head-main"></div>
        </section>
    )
}

export default Section2
