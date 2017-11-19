import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import Bookshelf from './Bookshelf'
import { Route, Link } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    shelves: [
      {
        id: "currentlyReading",
        title: "Currently Reading",
        books: []
      },
      {
        id: "wantToRead",
        title: "Want to Read",
        books: []
      },
      {
        id: "read",
        title: "Read",
        books: []
      }
    ]
  }

  componentDidMount() {
    BooksAPI.getAll().then((bookData) => {
      const newState = this.state
      newState.shelves.map( (shelf) => (
        shelf.books = bookData.filter( (book) => {
          return shelf.id === book.shelf
        })
      ))
      this.setState( newState )

    })
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
                {this.state.shelves.map((shelf) => (
                  <Bookshelf key={shelf.id} shelf={shelf} />
                ))}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
        <Route path="/search" render={() => (
          <SearchBooks />
        )} />
      </div>
    )
  }
}

export default BooksApp
