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

  const { updateShelf, books } = props;
  
  return (
    <div className="list-books">
      
      {shelves.map((shelf) => (
        <div className="list-books-content" key={shelf.displayName}>
          <Bookshelf 
            displayName={shelf.displayName}
            books={books.filter(e => e.shelf === shelf.variableName)}
            updateShelf={updateShelf}
          />
        </div>
      ))}

      <div className="open-search">
        <Button icon circular={true} color='grey' as={Link} to='/search'>
          <Icon name='plus' />
        </Button>
      </div>

    </div>
  )
}

export default BookDisplayPage;