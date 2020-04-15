import React from 'react';
import SearchMovie from "../components/Movie/SearchMovie";
import { BookDiv } from "../App.styles";



class Movies extends React.Component {

 render() {
   return (
    <BookDiv style={{height:'100%'}} className="container">
    <div className="header clearfix mt-5">
      <h3 style={{display:'flex', justifyContent:'center'}} className="text-muted">Movie Search</h3>
    </div>
    <div className="jumbotron">
      <SearchMovie />
    </div>
  </BookDiv>
   );
 }
}
export default Movies;