import React from 'react'

function BookCard({ src, author, title, description }) {
    return (
        <div className="book-card">
            <div className="img-container">
                <img src={src} alt={`${title}-img`} />
            </div>
            <div className="text-container">
                <h4>{title}</h4>
                <p className="text-paragragph text-description">{description}</p>
                <p className="text-paragragph text-author">{`by ${author}`}</p>
            </div>
            <div className="card-buttons">
            </div>
        </div>
    )
}

export default BookCard