import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

  static PropTypes = {
    book: PropTypes.array.isRequired
  }

  moveBook(book, event) {
    if(event) {
      const newShelf = event.target.value
        this.props.handleChange(book, newShelf)
    }
  }

  render() {

    let { book, shelvedBooks } = this.props
    let thumbnail = book.imageLinks ? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193?text=No%20Cover'
    let title = book.title ? book.title : ''
    let authors = book.authors ? book.authors : []
    let shelf = book.shelf ? book.shelf : 'none'
    if (shelvedBooks) {
      shelvedBooks.forEach( (shelvedBook) => {
        if (shelvedBook.id === book.id) 
          shelf = shelvedBook.shelf
      });
    }
    
    return (
      <div className={"book " + shelf}>
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + thumbnail + '")' }}></div>
          <div className="book-shelf-changer">
            <select 
              onChange={this.moveBook.bind(this, book)}
              defaultValue={shelf}  
            >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.map( (name) => (
          <div key={name}>{name}</div>
        ))}</div>
      </div>
    )
  }
}

export default Book