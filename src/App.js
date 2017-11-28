import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import Bookshelf from './Bookshelf'
import { Route, Link } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  shelfUpdate = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then( (response) => this.getBooks() )
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf 
                  title="Currently Reading" 
                  shelfFilter="currentlyReading"
                  books={this.state.books}
                  handleChange={this.shelfUpdate}
                />
                <Bookshelf 
                  title="Want to Read" 
                  shelfFilter="wantToRead"
                  books={this.state.books}
                  handleChange={this.shelfUpdate}
                />
                <Bookshelf 
                  title="Read" 
                  shelfFilter="read"
                  books={this.state.books}
                  handleChange={this.shelfUpdate}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
        <Route path="/search" render={() => (
          <SearchBooks 
            shelvedBooks={this.state.books}
            handleChange={this.shelfUpdate}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
