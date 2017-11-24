import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
  
  render() {
    const { title, shelfFilter, books, handleChange } = this.props
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
}

export default Bookshelf