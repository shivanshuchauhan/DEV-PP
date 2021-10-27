import React, { Component } from 'react';
import Header from "./Components/Header/Header.jsx";
import Movies from "./Components/Movies/Movies.jsx";
import Pagination from "./Components/Pagination/Pagination.jsx";
import axios from "axios";
import { API_KEY, API_URL, IMAGE_URL } from "./API/secrets.js";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


class App extends Component {
  state = {
    moviesData:[],
    currentMovie: "batman",
    pages:[],
    currPage:1
  };

  async componentDidMount() {
  // API call
  // params => api key , page , query
  // https://api.themoviedb.org/3/search/movie?api_key=bdd243ea847239dc0799805e63e189f0&query=batman&page=1&include_adult=false
  
    let data = await axios.get(API_URL+"/search/movie", { 
      params:{ api_key: API_KEY , page:1 , query: this.state.currentMovie}, 
    });
    //console.log(data);

    // let data2 = await axios.get(API_URL+"/search/movie", { 
    //   params:{ api_key: API_KEY , page:5 , query: this.state.currentMovie}, 
    // });
    // console.log(data2);

    let moviesData=data.data.results.slice(0,20);
    let pagesCount = data.data.total_pages;
    let pages=[];
    for(let i=1;i<=pagesCount;i++){
      pages.push(i);
    }
    console.log(moviesData);
    this.setState({
      moviesData:moviesData,
      pages:pages
    })
  }

  setMovies =async(newMovieName) =>{
    let data = await axios.get(API_URL+"/search/movie", { 
      params:{ api_key: API_KEY , page:1 , query: newMovieName}, 
    });
    let moviesData=data.data.results.slice(0,20);
    //console.log(moviesData);
    let pagesCount = data.data.total_pages;
    let pages=[];
    for(let i=1;i<=pagesCount;i++){
      pages.push(i);
    }
    this.setState({
      moviesData:moviesData,
      currentMovie:newMovieName,
      pages:pages
    })
  }

  nextPage = async () => {
    let data= await axios.get(API_URL + "/search/movie",{
      params: { api_key: API_KEY, page: this.state.currPage+1, query: this.state.currentMovie },
    });
    console.log(data);
    let moviesData = data.data.results.slice(0,20);
    this.setState({
      moviesData: moviesData,
      currPage: this.state.currPage+1
    });
  };

  previousPage = async () => {
    let data= await axios.get(API_URL + "/search/movie",{
      params: { api_key: API_KEY, page: this.state.currPage-1, query: this.state.currentMovie },
    });
    console.log(data);
    let moviesData = data.data.results.slice(0,20);
    
    this.setState({
      moviesData: moviesData,
      currPage: this.state.currPage-1
    });
  };

  setPage = async (pageCount) => {
    let data= await axios.get(API_URL + "/search/movie",{
      params: { api_key: API_KEY, page: pageCount, query: this.state.currentMovie },
    });
    console.log(data);
    let moviesData = data.data.results.slice(0,20);
    this.setState({
      moviesData: moviesData,
      currPage: pageCount
    });

  };

  render() { 
    return (
      <Router>
        <div className="App">
        <Header setMovies={this.setMovies}></Header>

        {/*condition rendering*/}
        {this.state.moviesData.length ? (
          <React.Fragment>
            <Movies movies={this.state.moviesData}></Movies>
           <Pagination 
             pages={this.state.pages} 
             currPage={this.state.currPage}
             nextPage={this.nextPage}
             previousPage={this.previousPage}
             setPage={this.setPage}
           ></Pagination>
          </React.Fragment>
        ) : (
          <h1 className="justify-content-center">Oops No Movies Found !</h1>
        )}

        </div>
      </Router>
    );
  }
}
 
export default App;

// Example API Request
// 

