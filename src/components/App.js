import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

  async onSearchSubmit(term) {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 2bc2106866f21d4a7bb57e53acb948355972a9e82f6b593624d26d6f8f2c4585"
      }
    });
    console.log(response.data.results);
  }

  render () {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}
export default App;
