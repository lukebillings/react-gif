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

    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

  search(query) {
    const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=hAdPLvZK55nDjzGFQM4GiH0OMC5PTczQ&q=${query}&limit=10`
    fetch(giphEndpoint).then(response => response.json()).then((data) => {
      const gifs = data.data.map(giph => giph.id)
      this.setState({
        gifs: gifs
      })
    })
  }

 selectGif(id) {
   this.setState({
     selectedGifId: id
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
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
      );
    }
}

export default App;

