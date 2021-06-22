import React from 'react'
import Bookshelf from './Bookshelf'
import { Button, Icon } from 'semantic-ui-react'
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

const BookDisplayPage = props => {

  const { updateBook, books } = props;
  
  return (
    <div className="list-books">
      {/* Map over the array above and 
      render each item as a Bookshelf object */}
      {shelves.map((shelf) => (
        <div className="list-books-content" key={shelf.displayName}>
          <Bookshelf 
            displayName={shelf.displayName}
            books={books.filter(e => e.shelf === shelf.variableName)}
            updateBook={updateBook}
          />
        </div>
      ))}
      {/* Link to the search page  */}
      <div className="open-search">
        <Button icon circular={true} color='grey' as={Link} to='/search'>
          <Icon name='plus' />
        </Button>
      </div>

    </div>
  )
}

export default BookDisplayPage;