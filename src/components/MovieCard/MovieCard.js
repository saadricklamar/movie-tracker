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
    console.log(this.props.movie)
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
    console.log(movie.id)
 
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
          <article className='movie-card' style={{ backgroundImage: `url(${this.props.movie.poster_path})` }}>
              <i onClick={this.toggleMovieFavorite} className={`fas fa-star ${this.state.favorite && 'favorite'}`}></i>
              <div className='info'>
                <p>{this.props.movie.title}</p>
                <p>Rating: {this.props.movie.vote_average}</p>
                <p>Release: {this.props.movie.release_date}</p>
                <p>Summary: {this.props.movie.overview}</p>
              </div>
          </article>
      )
  }
}



export const mapStateToProps = (state) =>({
  user_id: state.users.id
 
})


export default connect(mapStateToProps)(MovieCard)