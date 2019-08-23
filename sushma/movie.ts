
class Movie
{
public hero:String="Rajini";

}
class MovieDesc extends Movie{
public director:String="shankar";
public movie:String="Robo";
}
var mv = new Movie();
console.log(mv.hero);

var mv1 = new MovieDesc();
console.log(mv1.movie);
console.log(mv1.director);
