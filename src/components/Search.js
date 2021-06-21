import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './../utils/BooksAPI'

const Search = (props) => {

  const { updateShelf } = props;
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
 
  const handleInputChange = async (e) => {
    setQuery(e.target.value)

    if (e.target.value === undefined || e.target.value === '') {
      setResults([]); 
      return; 
    }
    const results = await BooksAPI.search(e.target.value) || [];
    setResults(results)
    console.log(results)
  }

  return (
    <div className="search-books ui container">
      <div className='input-div' style={{ marginTop: '2em' }}>
        <Input fluid 
          action={{ icon: 'search' }}
          placeholder='Search for books...' 
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <details style={{ margin: '1.5em', lineHeight: '2em' }}>
        <summary><span>Search tips</span></summary>
        <strong>The only search terms that will work are: </strong>
        <div style={{ color: '#393F48' }}>
        'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
        </div>
      </details>

      {(results && results.length > 0) &&
      <Bookshelf
        displayName='Search Results'
        updateShelf={updateShelf}
        books={results} 
        />}
    </div>
  )
}

export default Search;