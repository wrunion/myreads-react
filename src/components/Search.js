import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './../utils/BooksAPI'

// export default class Search extends Component {
//   state={
//     bookResults: [],
//     query: ''
//   }

const Search = (props) => {

  const { updateShelf } = props;
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
 
// export const search = (query) =>
// fetch(`${api}/search`, {
//   method: 'POST',
//   headers: {
//     ...headers,
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ query })
// }).then(res => res.json())
//   .then(data => data.books)


  const handleInputChange = async (e) => {
    setQuery(e.target.value)
    // BooksAPI.search(query).then(res => setResults([...res]))
    const results = await BooksAPI.search(query) || [];
    setResults(results)
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
        <details>
          <summary>Search tips</summary>
        <p>
          <strong>The only search terms that will work are: </strong>
          <p></p>
          'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
        </p>
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