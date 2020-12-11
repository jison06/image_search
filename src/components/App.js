import unsplash from '../api/unsplash';
import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { imageList: [] };

  async onSearchSubmit(term) {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
      },
    });

    this.setState({ imageList: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={term => this.onSearchSubmit(term)} />
        <ImageList images={this.state.imageList} />
      </div>
    );
  }
}

export default App;
