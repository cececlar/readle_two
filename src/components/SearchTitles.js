import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
export default function SearchTitles() {
    const [apiData, setApiData] = useState([])
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value.split(' ').join('+'));
      }
 

      const handleSubmit = (event) => {
        event.preventDefault();
        setQuery(search);
      }

      useEffect(() => {
        const getApiData = async () => {
          const result = await axios.get(
            `http://openlibrary.org/search.json?q=${query}`
          );
          setApiData(result.data.docs);
  
        }
        getApiData();
      }, [query]);
 

      return (
        <React.Fragment>
            <h1>Readle</h1>
            <form onSubmit={handleSubmit}>
               <input type="text" placeholder="Search books by title" onChange={handleChange}></input>
            </form>
            <ul>
            {apiData.map((book, index) => {
                   if (book.cover_i && book.isbn) {
                   return (
                       <div key={index}>
                           <Link to={`/book/${book.isbn[0]}`}>
                                <img alt="cover" src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}></img>
                           </Link>
                           <p>{book.title}</p>
                       </div>
                   )
                   }
               })}

            </ul>
        </React.Fragment>
    )
 
}
