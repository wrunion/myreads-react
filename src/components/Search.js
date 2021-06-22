import React from 'react'
import { Input } from 'semantic-ui-react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './../utils/BooksAPI'

const Search = (props) => {

  const { updateBook, shelves, searchResults, setResults } = props;
 
  const handleInputChange = async (e) => {

    /* If the search box is empty, show no results */
    if (e.target.value === undefined || e.target.value === '') {
      setResults([]); return; 
    }
    /* Deconstruct shelf state from props */
    const { currentlyReading, wantToRead, read } = shelves;

    /* Search API call */
    const results = await BooksAPI.search(e.target.value) || [];

    if (!results || !results.length > 0) {
      setResults([]); return; 
    }

    /* Check if book is currently on a shelf, and if so, add that information to the book object before passing it to the filteredResults array */
    const filteredResults = results?.map((book) => {
      if (currentlyReading.includes(book.id)) { 
        book.shelf = 'currentlyReading'; return book; }
      if (wantToRead.includes(book.id)) { 
        book.shelf = 'wantToRead'; return book; }
      if (read.includes(book.id)) { 
        book.shelf = 'read'; return book; }
      else { return book; }
    })
    /* Pass the results to parent component */
    setResults(filteredResults)
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

      {(searchResults && searchResults.length > 0) &&
      <Bookshelf
        displayName='Search Results'
        updateBook={updateBook}
        books={searchResults} 
        />}
    </div>
  )
}

export default Search;