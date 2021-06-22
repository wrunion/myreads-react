import React from 'react'
import NavBar from './NavBar'
import Search from './Search'
import BookDisplayPage from './BookDisplayPage'
import * as BooksAPI from './../utils/BooksAPI'

import { Route, Switch } from 'react-router-dom'
import './App.css'

class App extends React.Component {
  state = {
    books: [], 
    searchResults: [],
    shelves: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  /*
  * @description 
    Function passed to Search component as props.
    Allows Search to "lift" search state back up to App
    so that search results can persist 
    when the user navigates away and then back 
    to/from the search route.

    Function accepts an array of book results, 
    and sets them in App.js state
    
  * @param {object} results - An array of books returned from search
  */
  onSearchResults = (results) => {
    this.setState((currentState) => ({
      ...currentState, searchResults: results
    }))
  }

  /*
  * @description 
    Updates which shelf a book is "on."
    
    This function is passed to all child components.
    It is invoked by Book.js.

  * @param {object} book - The book object to modify
  * @param {string} shelf - The new book location
  */
  updateBook = async ({ book, shelf }) => {
    await BooksAPI.update(book, shelf);

    BooksAPI.get(book.id).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState(() => ({ books }));
        this.updatesShelves(books);
      })
    }).catch(err => console.error(err))
  }

  /*
  * @description 
    Helper function called immediately after "getAll" is called.
    See updateBook and componentDidMount for usage examples.
    
    This function takes an array of books and returns
    an object with three arrays of book IDs.
    Each return array holds the IDs of books now "on" that shelf.
    Each return array holds only book IDs, not the full book object.

  * @param {array} books - The books returned from the "getAll" API call
  */
  updatesShelves(books) {
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading').map(book => book.id);
    const wantToRead = books.filter(book => book.shelf === 'wantToRead').map(book => book.id);
    const read = books.filter(book => book.shelf === 'read').map(book => book.id);
    
    this.setState((currentState) => ({ 
      ...currentState, 
      shelves: { currentlyReading, wantToRead, read }
    }))
  }

  /*
  * @description 
    Fetches all books from the API, 
    stores them in component state, and 
    calls the "updatesShelves" helper function
    to update the shelf state slice.
  */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {

      this.setState(() => ({ books }));
      this.updatesShelves(books);

    }).catch(err => console.error(err))
  }
  
  render() {

    const { books, shelves, searchResults } = this.state
    const { updateBook, onSearchResults } = this

    return (
      <div className="app ui container">
        
        <NavBar />

        <Switch>
          <Route exact path='/search'
            render={() => (
              <Search 
                shelves={shelves}
                updateBook={updateBook} 
                searchResults={searchResults}
                setResults={onSearchResults}
              />
            )} 
          />
          <Route path='/'
            render={() => (
              <BookDisplayPage 
                books={books}
                updateBook={updateBook}
              />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App;
