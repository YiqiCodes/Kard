import React, { Component } from "react";
import Search from "../components/Search";
import BookInfo from "../components/BookInfo";
import { BookDiv } from "../App.styles";


class Books extends Component {
  state = {
    results: [],
    expandedBook: null
  };

  setResults = results => {
    this.setState({ results });
  };

  collapseBook = () => {
    this.setState({
      expandedBook: null
    });
  };

  expandBook = expandedBook => {
    this.setState({ expandedBook });
  };

  render() { 
    return (
      <BookDiv style={{height:'100%'}} className="container">
        <div className="header clearfix mt-5">
          <h3 style={{display:'flex', justifyContent:'center'}} className="text-muted">Goodreads Search</h3>
        </div>
        <div className="jumbotron">
          {this.state.expandedBook ? (
            <BookInfo
              bookData={this.state.expandedBook}
              collapseBook={this.collapseBook}
            />
          ) : (
            <Search
              results={this.state.results}
              setResults={this.setResults}
              expandBook={this.expandBook}
            />
          )}
        </div>
      </BookDiv>
    );
  }
}

export default Books;
