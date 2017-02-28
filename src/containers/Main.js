import React, {Component} from 'react';
import axios from 'axios';
import { MASHAPE_KEY_TEST } from '../keys'

import Quote from '../components/Quote'
import NewQuoteButton from '../components/NewQuoteButton'
import Error from '../components/Error'
import Loading from '../components/Loading'

const BASE_URL = 'https://andruxnet-random-famous-quotes.p.mashape.com/';
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Mashape-Key': MASHAPE_KEY_TEST,
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});



class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: false,
      currentQuote: {
        author: '',
        quote: ''
      },
      errorState: null,
      category: 'famous'
    }
  }

  componentWillMount() {
    this.getNewQuote();
  }

  getNewQuote = () =>{
    this.setState({loading: true});

    return axiosInstance.post('', {}, {params: {
      cat: this.state.category
    }})
        .then(response => response.data)
        .then(data => {
          let author = data.author;
          let quote = data.quote;
          let newQuote = {author, quote};

          this.setState({
            currentQuote: newQuote,
            loading: false
          })
        })
        .catch(error => this.setState({error: 'Error getting quote', loading: false}))
  };

  render() {
    const { loading, currentQuote, errorState } = this.state;
    if (loading) {
      return(<Loading/>)
    }

    if (errorState) {
      return (<Error message={errorState}/>)
    }

    return (
      <div>
        <Quote text={currentQuote.quote} author={currentQuote.author}/>
        <NewQuoteButton getNewQuote={this.getNewQuote}/>
      </div>
    );
  }
}

export default Main;
