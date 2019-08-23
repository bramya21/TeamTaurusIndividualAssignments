import {MovieImple} from './movie.implementaion'
import {Movie} from './movie.model'

var mv:Movie[];
var movieObject:Movie=new Movie(
    1,
    "a hero never die",
    "fantasy...",
    "fox"
)
mv = [movieObject]
console.log(movieObject.title)
var mvImp = new MovieImple(mv)
// mvImp.setMovie(movieObject);
console.log(mvImp.getMovies()[0]);
console.log(mvImp.getMovieByName("a hero never dies"))
