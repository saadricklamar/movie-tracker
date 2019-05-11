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
              {/* <img src={this.props.movie.posterImage}/> */}
              {/* <p>{this.props.movie.title}</p>
              <p>{this.props.movie.rating}</p>
              <p>{this.props.movie.releaseDate}</p>
              <p>{this.props.movie.synopsis}</p> */}
          </article>
      )
  }




}



