import React from 'react'
import Book from './Book'

export default function Bookshelf({ books, displayName }) {
  
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
                  id={id}
                  title={title}
                  authors={authors}
                  shelf={shelf}
                  thumbnailURL={book.imageLinks.smallThumbnail}
                />
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )} else {
    return null;
  }
}