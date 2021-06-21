import React from 'react'
import { useLocation } from 'react-router-dom'

const Book = props => {

  const location = useLocation().pathname; 

  const { thumbnailURL, title, authors, id, shelf, updateShelf, book } = props;

  return (
    <div className="book" key={id}>
      <div className="book-top">
        <div className="book-cover" 
          style={{ width: 128, height: 193, backgroundImage: `url(${thumbnailURL || ''})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'  }}></div>
        <div className="book-shelf-changer">
          <select value={location === '/search' ? 'none' : shelf}
            onChange={((e) => {
              updateShelf({ shelf: e.target.value, book })
            })}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors?.join(`, `)}
      </div>
    </div>
  )
}

export default Book; 
