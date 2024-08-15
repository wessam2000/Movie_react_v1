import { memo } from "react"
import '../App.css';

const MovieItem = ({ movie }) => {
    // const { title, poster_path, vote_average } = movie
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.vote_average}</p>
            </div>
        </div>
    )
}

export default memo(MovieItem)