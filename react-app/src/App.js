import React from 'react';

import './styles.css';

import NewsList from "./components/NewsList";
import Error from "./components/Error";
import {getFromApi} from "./api/newsApi";
import Loader from "./components/Loader";
import SearchForm from "./components/SearchForm";

export default class App extends React.Component{
  state = {
    allNews: [],
    currentPage: 1,
    loading: false,
    error: null,
    searchData: ''
  };

  searchDataHandler = searchData => this.setState({searchData, currentPage: 1, allNews: []});

  // componentDidMount() {
  //   this.setState({loading: true});
  //
  //     getFromApi('news')
  //     .then(response =>
  //       this.setState({allNews: response.articles})
  //     ).catch(error => {
  //     this.setState({error})
  //     }).finally(() => {
  //         this.setState({loading: false})
  //     });
  // }

  loadHandler = () => {
    const { searchData, currentPage } = this.state;

    return getFromApi(searchData, currentPage)
      .then(response => {

          return this.setState(prev =>
            ({allNews: [...prev.allNews, ...response.articles], currentPage: prev.currentPage + 1}))
        }
      ).catch(error => {
        this.setState({error})
      }).finally(() => {
        this.setState({loading: false})
      });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { searchData, currentPage } = this.state;

    if(prevState.searchData !== searchData) {
      this.loadHandler()
    }
  }

  render() {
    const { allNews, loading, error } = this.state;

    return (
      <div className="App">
        {error && <Error error={error}/>}
        <SearchForm onSearch={this.searchDataHandler}/>
        {loading && <Loader />}
        {allNews.length > 0 && <NewsList news={allNews} />}
        {allNews.length > 0 &&
          <button onClick={this.loadHandler}>Load more!</button>
        }
      </div>
    );
  }
}