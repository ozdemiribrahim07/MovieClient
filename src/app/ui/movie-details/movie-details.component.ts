import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../services/movie-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieApiService : MovieApiService, private router : ActivatedRoute) { }

  ngOnInit(): void {
   let id = this.router.snapshot.paramMap.get('id');
   this.getMovie(id);
   this.getMovieCast(id)
  }

  movies : any;
  cast : any;

  getMovie(id : any) {
    this.movieApiService.getSelectedMovie(id).subscribe((data) => {
      this.movies = data;
    })
  }


  getMovieCast(id : any){
    this.movieApiService.getSelectedMovieCast(id).subscribe((data) => {
      this.cast = data.cast;
      console.log(data)
    })
  }



}
