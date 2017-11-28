import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component {

  state = {
    query: '',
    foundBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    if (query) {
      BooksAPI.search(query, 20).then( (foundBooks) => {
        if (foundBooks.error === 'empty query') {
          this.setState({ foundBooks: [] })
        } else {
          this.setState({ foundBooks })
        }
      })
    } else {
      this.setState({ foundBooks: [] })
    }
  }

  render () {
    const { query, foundBooks } = this.state
    let { shelvedBooks, handleChange } = this.props
    
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input 
            type="text" 
            placeholder="Search by title or author"
            value={query}
            onChange={ (event) => this.updateQuery(event.target.value) }
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {foundBooks.map((book) => (
            <li key={book.id}>
              <Book 
                book={book}
                shelvedBooks={shelvedBooks}
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

export default SearchBooks