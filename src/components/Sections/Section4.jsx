import React, { useState, useEffect } from 'react'
import BookCard from '../BookCard/BookCard.jsx'

function Section4() {
  const [books, setBooks] = useState([]);
  const [searchBy, setSearchBy] = useState("");

  useEffect(() => {
    console.log('BOOKS:::::::', books)
  }, [books])


  const getBooks = async (searchBy) => {
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
        <div className="recommendation">
          <h3>Recommend a book</h3>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="searchBy">Title</label>
              <input onChange={handleChange} name="searchBy" id="searchBy" type="text" value={searchBy} />
            </div>
            <button className="form-button" type="submit">Search</button>
          </form>
        </div>
        <div className="book-cards">
          {books.length > 0 && books.map(book => {
            return <p>{book.title}</p>
          })}
        </div>
      </div>
    </section>
  )
}

export default Section4