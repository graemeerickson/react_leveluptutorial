import React, { Component } from 'react';

export default class Movie extends Component {
  render() {
    return (
      <div key={this.props.movie.id}>
        {this.props.movie.title}
      </div>
    )
  }
}