import React from 'react';
import './MovieContainer.scss';

const MovieContainer = (props) => {
    // const displayMovies = props.movies.length && props.movies.map(movie => {
    //     return <img src={movie.posterImage} />
    // })
    return (
    <section> 
        <header>
        {/* <h1>Movie <i className="fas fa-film"></i> Tracker</h1> */}
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul id="menu">
              <a href="#"><li>Home</li></a>
              <a href="#"><li>Favorite</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Sign Out</li></a>
            </ul>
          </div>
        </nav>
        </header>
    </section>
        )
}

export default MovieContainer;

