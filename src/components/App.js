import React from 'react'
import NavBar from './NavBar'
import Search from './Search'
import Page from './Page'
import * as BooksAPI from './../utils/BooksAPI'

import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }))
    })
  }

  updateShelf = async ({ book, shelf }) => {
    await BooksAPI.update(book, shelf);

    BooksAPI.get(book.id).then((book) => {
      this.setState((currentState) => ({
        books: currentState.books.map(e => e.id === book.id ? book : e)
      }))
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="app ui container">
        <NavBar />
       
        <Route exact path='/search'
          render={() => (
          <Search 
            updateShelf={this.updateShelf}
          />
          )} 
        />

        <Route exact path='/bookshelf'
          render={() => (
          <Page 
            books={this.state.books}
            updateShelf={this.updateShelf}
          />
          )}
        />
    
      </div>
    )
  }
}

export default BooksApp
