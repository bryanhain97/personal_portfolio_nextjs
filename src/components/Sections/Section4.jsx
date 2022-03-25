import React, { useState, useEffect } from 'react'
import { BookCard, BookCardSkeleton } from '../BookCard/index.jsx'

function Section4() {
  const [books, setBooks] = useState([]);
  const [searchBy, setSearchBy] = useState("");
  const [loading, setLoading] = useState();
  useEffect(() => {
    console.log('bookState has changed. books: ', books)
  }, [books])
  const getBooks = async (searchBy) => {
    setLoading(true);
    const search = JSON.stringify({ searchBy })
    try {
      const response = await fetch('https://thatguybryan-server.herokuapp.com/get-books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        cors: 'cors',
        body: search
      });
      const books = await response.json()
      setLoading(false);
      setBooks(books);
    } catch (e) {
      console.log(e.message)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getBooks(searchBy)
  }
  const handleChange = (e) => {
    setSearchBy(e.target.value)
  }
  return (
    <section className="section4" >
      <div className="section4-container">
        <div className="form-container">
          <h3>Recommend a book</h3>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="searchBy">Search by Title</label>
              <input onChange={handleChange} name="searchBy" id="searchBy" type="text" value={searchBy} />
            </div>
            <button className="form-button" type="submit">Search</button>
          </form>
        </div>
        <div onMouseDown={dragEvent} className="book-cards">
          {loading ?
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map(idx => <BookCardSkeleton key={idx} />)
            :
            books.map((book, idx) => {
              const props = { ...book };
              return <BookCard key={idx} {...props} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Section4

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

// get mousePosition on mousedown
// get dxdy on mousemove and e.target.scrollLeft, e.target.scrollTop
// remove event listener on mouseup

function dragEvent(e) {
  const booksContainer = document.querySelector('div.book-cards')
  booksContainer.style.cursor = 'grab'
  booksContainer.addEventListener('mousemove', moveList)
  booksContainer.addEventListener('mouseup', () => {
    booksContainer.removeEventListener('mousemove', moveList)
    booksContainer.style.cursor = 'initial'
  })
  console.log(booksContainer.scrollLeft)
  function moveList(e2) {
    booksContainer.scrollLeft = e.clientX - e2.clientX;
  }
}