import React, { Component } from 'react'

export default class Book extends Component {

  render() {
  
  const { thumbnailURL, title, authors, id, shelf, updateShelf, book } = this.props;

  return (
    <div className="book" key={id}>
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnailURL})` }}></div>
        <div className="book-shelf-changer">
          <select value={shelf}
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
        {authors?.map(author => author + ' ')}
      </div>
    </div>
  )
 }
}
  // Books api returns:
  // Shelf (str)
  // Title (str)
  // Authors (array)
  // Id (str)
  
  // imageLinks.smallThumbnail 
  // And 
  // imageLinks.thumbnail
  // const [shelf, setShelf] = useState('')

  // useEffect(() => {
  //   setShelf(shelf)
  // }, [shelf])

//   return (
//     <div className="book" key={id}>
//       <div className="book-top">
//         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnailURL})` }}></div>
//         <div className="book-shelf-changer">
//           {/* TODO: add a way to track this state  */}
//           <select value={shelf} onChange={() => {

//           }}>
//             <option value="move" disabled>Move to...</option>
//             <option value="currentlyReading">Currently Reading</option>
//             <option value="wantToRead">Want to Read</option>
//             <option value="read">Read</option>
//             <option value="none">None</option>
//           </select>
//         </div>
//       </div>
//       <div className="book-title">{title}</div>
//       <div className="book-authors">{authors.map(author => author + ' ')}</div>
//     </div>
//   )
// }

// export default Book;