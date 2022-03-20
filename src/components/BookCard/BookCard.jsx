import React from 'react'

function BookCard({ thumbnail, author, title, description }) {
    if (!thumbnail) return null;
    return (
        <div className="book-card">
            <div className="container">
                <div className="img-container">
                    <img loading="lazy" src={thumbnail} />
                </div>
                <div className="text-container">
                    <h4>{title}</h4>
                    <p className="text-paragragph text-description">{description}</p>
                    <p className="text-paragragph text-author">{`by ${author}`}</p>
                </div>
                <div className="card-buttons">
                </div>
            </div>
        </div>
    )
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