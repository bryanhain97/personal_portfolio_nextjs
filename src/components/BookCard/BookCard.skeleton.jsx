import React from 'react'

function BookCardSkeleton() {
    return (
        <div className="book-card-skeleton">
            <div className="skeleton-img"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text author"></div>
        </div>
    )
}

export default BookCardSkeleton