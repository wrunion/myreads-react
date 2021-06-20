import React from 'react'

const Book = ({ thumbnailURL, title, authors, shelf, id }) => {
  // Books api returns:
  // Shelf (str)
  // Title (str)
  // Authors (array)
  // Id (str)
  
  // imageLinks.smallThumbnail 
  // And 
  // imageLinks.thumbnail

  return (
    <div className="book" key={id}>
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnailURL})` }}></div>
        <div className="book-shelf-changer">
          {/* TODO: add a way to track this state  */}
          <select value={shelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors.map(author => author + ' ')}</div>
    </div>
  )
}

export default Book;