// import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './views/MovieList';
import Navbar from './views/Navbar';
import Footer from './views/Footer';


function App() {


  return (
    <div>
      <Navbar />
      <div>
      <div className="movie-card-poster">
        <img src="https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg" alt="Inside out" />
        <div className='movie-card-poster-info'>
        <h3 >Inside Out 2</h3>
        <p >7.625</p>
        </div>
        </div>
        </div>
      <div className='header'>
      <h2 >Movies</h2>
      <button className="see-all">See all</button>
      </div>
      <MovieList />
      <div className='header'>
      <h2 >Series</h2>
      <button className="see-all">See all</button>
      </div>
      <MovieList />
      <div className='header'>
      <h2 >Super Hero</h2>
      <button className="see-all">See all</button>
      </div>
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
