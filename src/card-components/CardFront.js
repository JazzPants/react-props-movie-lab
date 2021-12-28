import React, { Component } from 'react';

export default class CardFront extends Component {
//this.props.poster is passed in from MovieCard, as CardFront is a component in the render method
  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
