import React from 'react'
import * as BooksAPI from './../utils/BooksAPI'
import NavBar from './NavBar'
// import Search from './Search'
import Page from './Page'

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

  render() {
    return (
      <div className="app ui container">
        <NavBar />
       
        <Route exact path='/search'
          // render={() => (
          // <Search 
          
          // />
          // )} 
        />

        <Route exact path='/bookshelf'
          render={() => (
          <Page 
            books={this.state.books}
          />
          )}
        />
    
      </div>
    )
  }
}

export default BooksApp
