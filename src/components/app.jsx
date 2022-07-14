import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // array of gifs props will change
      gifs: [],
      // the id of the selected gif will change from null to an id, then to another id
      selectedGifId: "DFexVkRG7gX9oCy68r"
    }

    this.search("homer thinking");
  }

  search = (query) => {
    giphy('hAdPLvZK55nDjzGFQM4GiH0OMC5PTczQ').search({
      q: query,
      rating: 'g',
      limit: 10
  }, (err, res) => {
      // Res contains gif data!
      console.log(res);
      this.setState({
        gifs: res.data
      });
  });
 }


  render() {
    const gifs = [{ id: "DFexVkRG7gX9oCy68r" }, { id: "DFexVkRG7gX9oCy68q"}]
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
           <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
      );
    }
}

export default App;
