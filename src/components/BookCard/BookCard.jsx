import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'


function BookCard({ thumbnail, authors, title, selectedBooks, setSelectedBooks }) {
    const [selected, setSelected] = useState(false);
    const author = (authors && authors[0]) ?? 'no author'
    useEffect(() => {
        const selection = `${title} - ${author}`
        if (selected) {
            setSelectedBooks([...selectedBooks, selection])
        } else {
            setSelectedBooks([...selectedBooks].filter(sel => sel !== selection))
        }
    }, [selected])
    const className = selected ? "book-card selected" : "book-card"
    const toggleSelect = () => {
        setSelected(!selected)
    }
    if (!thumbnail) return null;
    return (
        <>
            <div className={className} onClick={toggleSelect}>
                <div className="container">
                    <div className="img-container">
                        <img loading="lazy" src={thumbnail} />
                    </div>
                    <div className="text-container">
                        <h4 className="text-title">{title}</h4>
                        <p className="text-author">{author}</p>
                    </div>
                    <div className="card-buttons">
                    </div>
                </div>
            </div>
        </>
    )
}
BookCard.propTypes = {
    thumbnail: PropTypes.string,
    authors: PropTypes.string,
    title: PropTypes.string,
    selectedBooks: PropTypes.array,
    setSelectedBooks: PropTypes.func
}
export default BookCard


// authors: (2) ['Mike Tyson', 'Paul Sloman']
// averageRating: 5
// categories: ['Biography & Autobiography']
// description: "A bare-knuckled, tell-all memoir from Mike Tyson, the onetime heavyweight champion of the world—and a legend both in and out of the ring."
// id: "9FSvNAEACAAJ"
// images: {}
// industryIdentifiers: (2) [{…}, {…}]
// language: "en"
// link: "https://books.google.com/books/about/Undisputed_Truth_Subtitle_TK.html?hl=&id=9FSvNAEACAAJ"
// maturityRating: "NOT_MATURE"
// pageCount: 368
// printType: "BOOK"
// publishedDate: "2013-11-12"
// publisher: "Blue Rider Press"
// ratingsCount: 2
// title: "Undisputed Truth: Subtitle TK"