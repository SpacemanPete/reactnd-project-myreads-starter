import React, { Component } from 'react'

class Bookshelf extends Component {
  
  moveBook(book, event) {
    if(event) {
      const newShelf = event.target.value
      if (newShelf !== 'none') {
        this.props.handleChange(book, newShelf)
      }
    }
  }
  render() {
    const { shelf } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelf.books.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + book.imageLinks.thumbnail + '")' }}></div>
                    <div className="book-shelf-changer">
                      <select 
                        onChange={this.moveBook.bind(this, book)}
                        defaultValue={book.shelf}  
                      >
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.author}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf