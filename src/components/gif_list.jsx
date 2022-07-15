import React, { Component } from 'react';
import Gif from './gif.jsx';
import App from './app.jsx';


const GifList= (props) => {
    return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif} key={gif} selectGif={props.selectGif} />)}
    </div>
    );
  }

export default GifList;

