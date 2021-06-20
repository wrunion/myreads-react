import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

const shelves = [
  {
    displayName: 'Currently Reading',
    variableName: 'currentlyReading'
  },
  {
    displayName: 'Read',
    variableName: 'read'
  },
  {
    displayName: 'Want to Read',
    variableName: 'wantToRead'
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
            />
            
          </div>
        ))}

        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>

      </div>
    )
  }
}