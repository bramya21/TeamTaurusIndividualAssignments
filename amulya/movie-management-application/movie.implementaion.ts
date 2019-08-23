import { Movie } from './movie.model'
export class MovieImple{
   
    constructor(private  movies:Movie[]){

    }
    setMovie(movie:Movie){
        this.movies.push(movie)
    }
    getMovies():Movie[]{
        return this.movies
    }
    getMovieByName(title:string){
        return this.movies.filter((movie)=>movie.title==title)
    }
    getMovieByDescription(description:string){
        return this.movies.filter((movie)=>movie.description==description)
    }
}