import React from 'react'
import NavBar from './NavBar'
import Search from './Search'
import BookDisplayPage from './BookDisplayPage'
import * as BooksAPI from './../utils/BooksAPI'

import { Route } from 'react-router-dom'
import './App.css'

class App extends React.Component {
  state = {
    books: [], 
    shelves: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  updateBook = async ({ book, shelf }) => {
    await BooksAPI.update(book, shelf);

    BooksAPI.get(book.id).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState(() => ({ books }))
      })
    }).catch(err => console.error(err))
  }

  updatesShelves(books) {
    /* Filter books by shelf */
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading').map(book => book.id);
    const wantToRead = books.filter(book => book.shelf === 'wantToRead').map(book => book.id);
    const read = books.filter(book => book.shelf === 'read').map(book => book.id);

    this.setState((currentState) => ({ 
      ...currentState, 
      shelves: { currentlyReading, wantToRead, read }
    }))
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {

      this.setState(() => ({ books }));
      this.updatesShelves(books);

    }).catch(err => console.error(err))
  }
  
  render() {

    return (
      <div className="app ui container">
        <NavBar />
        <Route exact path='/search'
          render={() => (
            <Search 
              shelves={this.state.shelves}
              updateBook={this.updateBook} 
            />
          )} 
        />
        <Route exact path='/bookshelf'
          render={() => (
            <BookDisplayPage 
              books={this.state.books}
              updateBook={this.updateBook}
            />
          )}
        />
      </div>
    )
  }
}

export default App;
