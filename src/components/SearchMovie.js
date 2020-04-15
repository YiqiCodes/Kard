import React from 'react';
import "./SearchMovie.css";
import unirest from 'unirest';




class Search extends React.Component {
   state= {
       title: ''
   }

   sendRequest = (title) => {



    // var req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");

    //   req.query({
    //     "page": "1",
    //     "r": "json",
    //     "s": "Avengers Endgame"
    //   });

    //   req.headers({
    //     "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
    //     "x-rapidapi-key": "88494ad5a9msh58837f7d17a99c9p1f5907jsn363e3903d8e5"
    //   });


    //   req.end(function (res) {
    //     if (res.error) throw new Error(res.error);

    //     console.log(res.body);
    //   });
   

    console.log(title)
    const url = "https://movie-database-imdb-alternative.p.rapidapi.com/";
    fetch(url, {
      method: "GET",
      query:{
        "page": "1",
        "r": "json",
        "s": "Avengers Endgame"
      },  
      headers: {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "88494ad5a9msh58837f7d17a99c9p1f5907jsn363e3903d8e5"
      }
    }).then((response) => {
      console.log(response.body)

      response.json().then((data) => {
        console.log(data);
      });
    })
    
  
    

    //  const url = `https://api.themoviedb.org/3/movie/550?api_key=045667824413bb71ad2a7717041e8757&query=${title}`
    // fetch(url)
    // .then((response) => {
      
    //   return response.json();
    // })
    // .then((data) => {
    //   console.log(data);
    // });




  }

   onTextChange = e => {
    this.setState({
      title: e.target.value
    });

    // setTimeout( () =>{
    //   this.sendRequest(this.state.title)
    // }, 500)


  }

   handleSubmit = () => {
       const {title} = this.state;
       this.sendRequest(title)
      this.setState({title: ''})
   }
   handleInputTitle = (event) => {
       event.preventDefault();
       const title = event.target.value;
       this.setState({title});
   }
   render() {
       const {title} = this.state;
       return (
           <div className="search">
               <div style={{margin:'auto'}} className="form-group row">
          <input
          style={{marginBottom:'2em'}}
            className="mr-1 col-sm-9 form-control"
            type="text"
            placeholder="Search Books By title, author, or ISBN..."
            name="searchText"
            onChange={this.onTextChange}
            value={this.state.title}
          />
          
        </div>

               <input className="button" type="submit" onClick={this.handleSubmit} value="Search"/>
           </div>
       )
   }
}
export default Search;