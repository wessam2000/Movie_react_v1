import { PureComponent } from "react";
import MovieController from "../controllers/MovieController";
import MovieItem from "./MovieItem";
// import MainSection from "./MainSection";
import "../App.css"
export default class MovieList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            loading: true,
            error: null
        }
    }
    componentDidMount() {
        this.fetchMovies()
    }

    fetchMovies = async () => {
        try {
            const movies = await MovieController.fetchMovies()
            this.setState(
                { movies, loading: false }
            )
        } catch (err) {
            this.setState(
                { error: err.message, loading: false }
            )
        }

    }
    render() {
        const { movies, loading, error } = this.state

        if (loading) {
            return <p>Loading...</p>
        }
        if (error) {
            return <p>{error}</p>
        }
        console.log(movies)
        return (
            <div >

                {/* <MainSection movie={movies[0]} /> */}
                <div className="movies-grid">
                {movies.map(movie =>
                    <MovieItem movie={movie} key={movie.id} />
                    )}
                </div>    
            </div>
        )

    }
}