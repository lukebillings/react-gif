import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media3.giphy.com/media/DFexVkRG7gX9oCy68r/200.gif"
    return (
     <img src={src} alt="" className="gif"/>
      );
  }
}

export default Gif;
