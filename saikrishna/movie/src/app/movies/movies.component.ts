import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie.model'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
movies:Movie[] = [
  
  {"id":0,
  "title":"bahu",
  "description":"epic",
  "distribution":"jayaberi"
  }
]
id:number
title:string
description:string
distribution:string
  constructor() { 

  }

  ngOnInit() {
  }
  addMovie(){
    const movie:Movie = {
      "id":this.id,
      "title":this.title,
      "description":this.description,
      "distribution":this.distribution
    }
    this.movies.push(movie)
  }
  getMovie(){
    return this.movies
  }
  getMovieByTitle(title:string){

  }
  delete(movie:Movie){
    this.movies = this.movies.filter(m=>m.id!=movie.id)
  }

}
