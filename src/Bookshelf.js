import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const Bookshelf = ({ title, shelfFilter, books, handleChange }) => {

  const bookList = books.filter((book) => {
    return book.shelf === shelfFilter
  })
  console.log(shelfFilter);
  
  console.log(bookList);
  
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookList.map((book) => (
            <li key={book.id}>
              <Book 
                book={book} 
                handleChange={handleChange}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

Bookshelf.PropTypes = {
  title: PropTypes.string.isRequired,
  shelfFilter: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired

}

export default Bookshelf