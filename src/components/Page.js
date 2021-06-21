import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

const shelves = [
  {
    displayName: 'Currently Reading',
    variableName: 'currentlyReading'
  },
  {
    displayName: 'Want to Read',
    variableName: 'wantToRead'
  },
  {
    displayName: 'Read',
    variableName: 'read'
  }
];

export default class Page extends Component {

  render() {

    return (
      <div className="list-books">
        {shelves.map((shelf) => (
          <div className="list-books-content" key={shelf.displayName}>

            <Bookshelf 
              displayName={shelf.displayName}
              books={this.props.books.filter(e => e.shelf === shelf.variableName)}
              updateShelf={this.props.updateShelf}
            />
            
          </div>
        ))}

        <div className="open-search">
          {/* <Link to='/search' as={button}></Link> */}
          <button as={Link} to='/search'>Add a book</button>
        </div>
      </div>
    )
  }
}