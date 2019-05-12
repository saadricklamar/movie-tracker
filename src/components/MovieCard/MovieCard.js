import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import './MovieCard.scss';

export default class MovieCard extends Component {
  constructor(){
    super()
    this.state = {
      favorite: false
    }
  }




  render() {
      return(
          <article className='movie-card' style={{ backgroundImage: `url(${this.props.movie.posterImage})` }}>
              <div className='info'>
                <p>{this.props.movie.title}</p>
                <p>Rating: {this.props.movie.rating}</p>
                <p>Release: {this.props.movie.releaseDate}</p>
                <p>Summary: {this.props.movie.synopsis}</p>
              </div>
          </article>
      )
  }




}



