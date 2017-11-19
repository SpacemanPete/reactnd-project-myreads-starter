import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
  
  render() {
    const { shelf, handleChange } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelf.books.map((book) => (
              <li key={book.id}>
                <Book book={book} handleChange={handleChange}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf