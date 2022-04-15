import React, { useState, useEffect } from 'react'
import { BookCard, BookCardSkeleton } from '../BookCard/index.jsx'
import emailjs from '@emailjs/browser'

const EMAILJS_PUBLIC_KEY = 'user_p3bpXLoExjrQXv3GH5P7m'
const EMAILJS_TEMPLATE = 'template_48dj3gn'
const EMAILJS_SERVICE_ID = 'service_90ikj9l'

function Section4() {
  const [books, setBooks] = useState([]);
  const [searchBy, setSearchBy] = useState("");
  const [loading, setLoading] = useState();
  const [selectedBooks, setSelectedBooks] = useState([]);

  useEffect(() => {
    console.log('bookState has changed. books: ', books)
  }, [books])

  useEffect(() => {
    console.log('selected books: ', selectedBooks)
  }, [selectedBooks])

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
    setSelectedBooks([])
    getBooks(searchBy)
  }
  const handleChange = (e) => {
    setSearchBy(e.target.value)
  }
  const sendRecommendation = (e) => {
    e.preventDefault();
    setSelectedBooks([])
    const selBooks = selectedBooks.map((book, idx) => {
      const selBook = {
        [`book${idx}`]: book.split(" - ")[0],
        [`author${idx}`]: book.split(" - "[1]),
      }
      return selBook
    })
    const templateParams = Object.assign({}, ...selBooks)
    console.log(templateParams)
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => console.log('recommendation send.'))
      .catch(e => {
        console.log(e)
      })
  }
  return (
    <section id="books" className="section4" >
      <div className="section4-container">
        <div className="form-container">
          <h3>Recommend a book</h3>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="searchBy">Search by Title</label>
              <input onChange={handleChange} required name="searchBy" id="searchBy" type="text" value={searchBy} />
            </div>
            <button className="form-button" type="submit">Search</button>
          </form>
        </div>
        <div className="selected">
          {selectedBooks && selectedBooks.length > 0 ?
            (
              <>
                <div className="recommend">
                  <h3>selected books</h3>
                  <button onClick={sendRecommendation}>recommend</button>
                </div>
                <div className="selection">
                  <ul>
                    {selectedBooks.map((book, key) => {
                      const [title, author] = book.split(" - ");
                      return (
                        <li className="selection-list-item" key={key}>
                          <span className="book-title">{title}</span>
                          <span className="book-author">{author}</span>
                        </li>)
                    })}
                  </ul>
                </div>
              </>)
            :
            <h3>no selected books</h3>
          }
        </div>
        <div className="book-cards">
          {loading ?
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map(idx => <BookCardSkeleton key={idx} />)
            :
            books.map((book, idx) => {
              const props = { ...book, selectedBooks, setSelectedBooks };
              return <BookCard key={idx} {...props} />
            })
          }
        </div>
      </div>
    </section >
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