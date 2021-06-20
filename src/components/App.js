import React from 'react'
// import * as BooksAPI from './BooksAPI'
import NavBar from './NavBar'
import Search from './Search'
import Bookshelf from './Bookshelf'

import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app ui container">
        <NavBar 
          onItemClick={(history, path) => {
            history.push(path)
          }}
        />
       
        <Route exact path='/search'
          render={() => (
          <Search 
          
          />
          )} 
        />

        <Route path='/bookshelf'
          render={() => (
          <Bookshelf 
          
          />
          )}
        />
    
      </div>
    )
  }
}

export default BooksApp
