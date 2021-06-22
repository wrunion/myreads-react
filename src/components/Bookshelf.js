import React from 'react'
import Book from './Book'

export default function Bookshelf({ books, displayName, updateBook }) {
  
  if (books && books.length > 0) {

  return (
    <div className="bookshelf ui raised segment" 
      style={{ marginTop: '1em' }}>
      <h2 className="bookshelf-title">{displayName}</h2>

      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            
            const { id, title, authors, shelf } = book;

            return (
              <li key={id}>
                <Book 
                  book={book}
                  id={id}
                  title={title}
                  authors={authors}
                  shelf={shelf}
                  updateBook={updateBook}
                  thumbnailURL={book.imageLinks?.smallThumbnail || ''}
                />
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )} else {
    // If no books are on a given shelf, 
    // return a placeholder shelf with a single string as contents
    return (
      <div className="bookshelf ui raised segment" 
        style={{ marginTop: '1em', height: '15em' }}>
        <h2 className="bookshelf-title">{displayName}</h2>
        <div className='no-books-div'>
          <p style={{ color: 'grey' }}>No books yet</p>
        </div>
      </div>
    );
  }
}