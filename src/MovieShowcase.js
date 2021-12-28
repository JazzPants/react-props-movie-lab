import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

//hold down left click to fully flip the MovieCards
//hover over moviecard to display colour of MovieCard poster
export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(object => <MovieCard title={object.title} genres={object.genres} IMDBRating={object.IMDBRating} poster={object.poster} />)
    // map over your movieData array and return an array of the correct JSX
 
  }


  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
