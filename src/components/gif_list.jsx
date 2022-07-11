import React, { Component } from 'react';
import Gif from './gif.jsx';
import App from './app.jsx';

class GifList extends Component {
  render() {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} />
    });
  }
}

export default GifList;
