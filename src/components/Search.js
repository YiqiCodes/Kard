import React, { Component } from "react";
import Axios from "axios";
import AllResults from "./AllResults";
import PropTypes from "prop-types";
import { SearchDiv } from "../App.styles";

const apiKey = "yOCh6daSoxHqslqgU0Ag";

class Search extends Component {
  state = {
    searchText: "",
    error: "",
    fetchingData: false,
  };

  onTextChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });

    setTimeout(() => {
      this.setState({
        fetchingData: true,
      });
      const { searchText } = this.state;
      const requestUri =
        `https://cors-anywhere.herokuapp.com/` +
        `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchText}`;

      Axios.get(requestUri)
        .then((res) => {
          this.parseXMLResponse(res.data);
        })
        .catch((error) => {
          this.setState({
            error: error.toString(),
            fetchingData: false,
          });
        });
    }, 500);
  };

  // parse string xml received from goodreads api
  parseXMLResponse = (response) => {
    const parser = new DOMParser();
    const XMLResponse = parser.parseFromString(response, "application/xml");
    const parseError = XMLResponse.getElementsByTagName("parsererror");

    if (parseError.length) {
      this.setState({
        error: "There was an error fetching results.",
        fetchingData: false,
      });
    } else {
      const XMLresults = new Array(...XMLResponse.getElementsByTagName("work"));
      const searchResults = XMLresults.map((result) => this.XMLToJson(result));
      //limit of 5 books from seraching
      const shorterSearch = searchResults.slice(0, 5);
      this.setState({ fetchingData: false }, () => {
        this.props.setResults(shorterSearch);
      });
    }
  };

  // Function to convert simple XML document into JSON.
  // Loops through each child and saves it as key, value pair
  // if there are sub-children, call the same function recursively on its children.
  XMLToJson = (XML) => {
    const allNodes = new Array(...XML.children);
    const jsonResult = {};
    allNodes.forEach((node) => {
      if (node.children.length) {
        jsonResult[node.nodeName] = this.XMLToJson(node);
      } else {
        jsonResult[node.nodeName] = node.innerHTML;
      }
    });

    return jsonResult;
  };

  render() {
    return (
      <SearchDiv>
        <div
          style={{ margin: "auto", fontWeight: "200" }}
          className="form-group row"
        >
          <input
            style={{
              marginBottom: "1em",
              minWidth: "15rem",
              minHeight: "2rem",
              borderRadius: "8px",
              border: "2px solid white",
              textAlign: "center",
              fontSize: "large",
              fontWeight: "200",
              padding: "0 1rem",
            }}
            className="mr-1 col-sm-9 form-control"
            type="text"
            placeholder="Search by title, author or IBSN"
            name="searchText"
            onChange={this.onTextChange}
            value={this.state.searchText}
          />
        </div>

        {/**
         * if fetching data, display "loading...", if error, display error message, else display search results
         */}
        {this.state.fetchingData ? (
          <div style={{ textAlign: "center" }}>Loading...</div>
        ) : (
          (this.state.error && (
            <p className="text-danger">{this.state.error}</p>
          )) || (
            <AllResults
              chgBook={this.props.chgBook}
              books={this.props.results}
              expandBook={this.props.expandBook}
            />
          )
        )}
      </SearchDiv>
    );
  }
}

Search.propTypes = {
  results: PropTypes.array,
  setResults: PropTypes.func,
  expandBook: PropTypes.func,
};

export default Search;
