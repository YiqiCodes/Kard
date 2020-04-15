import React, { useState } from 'react';
import "./SearchMovie.css";

import AllMovieResults from "./AllMovieResults";



function SearchMovie (props) {
   

   const [title, setTitle] = useState("")
   const [movies, setMovies] = useState(null)
   

  const sendRequest = (title) => {

     const url = `https://api.themoviedb.org/3/search/movie?api_key=045667824413bb71ad2a7717041e8757&query=${title}
     `
    fetch(url)
    .then((response) => {
      
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setMovies(data)
    });
  }

  const onTextChange = e => {
    setTitle(e.target.value);
  }


  const handleSubmit = () => {
       sendRequest(title)
       setTitle("")
   }
  
       return (
           <div className="search">
                <div style={{margin:'auto'}} className="form-group row">
            <input
            style={{marginBottom:'2em'}}
              className="mr-1 col-sm-9 form-control"
              type="text"
              placeholder="Search Books By title, author, or ISBN..."
              name="searchText"
              onChange={onTextChange}
              value={title}
            />      
            </div>

                <input className="button" type="submit" onClick={handleSubmit} value="Search"/>
          
          <div className="movie-div">
            {movies !== null ? (
              <AllMovieResults 
              movies={movies}
              />
            ) : null }
          </div>
          
          </div>
       )
   
}
export default SearchMovie;