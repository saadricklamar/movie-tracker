import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import './MovieCard.scss';
import * as actions from '../../util/fetchData';

export class MovieCard extends Component {
  constructor(){
    super()
    this.state = {
      favorite: false
    }
  }

   componentDidMount = async () => { 
    const currentFavorites = await actions.getFavorites(this.props.user_id)
    const locatedFavorites = currentFavorites.data.find((favoriteMovie) => {
      return favoriteMovie.movie_id === this.props.movie.movie_id || favoriteMovie.movie_id === this.props.movie.id
    })
    if (locatedFavorites) {
      this.setState({favorite: true})
    } else {
      this.setState({favorite: false})
    }
  }

  toggleMovieFavorite = async () => {
    let { movie, user_id } = this.props
    let movieID = movie.id
    if (this.state.favorite) {
      movieID = movie.movie_id
    }
    if(this.state.favorite) {
      await actions.deleteFavorite(user_id, movie.id)
    } else {
      await actions.addFavorite(movie.id, user_id, movie)
    }
    this.setState({favorite: !this.state.favorite})
  }

  render() {
      return(
          <div className='movie-card'>
             <div className='card'>
              <div className='front' style={{ backgroundImage: `url(${this.props.movie.poster_path})` }}>
              </div>
              <div className='back'>
                <i onClick={this.toggleMovieFavorite} className={`fas fa-star ${this.state.favorite && 'favorite'}`}></i>
                <p className='title'>{this.props.movie.title}</p>
                <p className='rating'>Rating: {this.props.movie.vote_average} / 10</p>
                <p className='release'> Release: {this.props.movie.release_date}</p>
                <p className='overview scroller'>Summary: {this.props.movie.overview}</p>
              </div>
            </div> 
          </div>
      )
  }
}



export const mapStateToProps = (state) =>({
  user_id: state.users.id
 
})


export default connect(mapStateToProps)(MovieCard)