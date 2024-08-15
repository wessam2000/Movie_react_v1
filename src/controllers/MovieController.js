import axios from "axios";
import MovieModel from "../models/MovieModel";

export default class MovieController {
    static async fetchMovies() {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=31b9c640f4511af28076291d8f874bfc')
            return response.data.results.map(movie => new MovieModel(movie.id, movie.title, movie.poster_path, movie.vote_average))
        } catch (err) {
            // throw `my error ${err}`;
            console.log(err);
            
        }
    }
}


//https://api.themoviedb.org/3/movie/157336/videos?api_key=31b9c640f4511af28076291d8f874bfc
///https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=31b9c640f4511af28076291d8f874bfc/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg