import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private movieApiService : MovieApiService) { }
  ngOnInit(): void {
    this.getBannerData();
    this.getTrendingMoviesData();
  }

  bannerDataResult : any = [];
  trendingMoviesResult : any = [];

  getBannerData(){
    this.movieApiService.bannerapiData().subscribe((result)=>{
      console.log(result);
      this.bannerDataResult = result.results;
    })
  }


  getTrendingMoviesData(){
    this.movieApiService.getTrendingMovies().subscribe((result)=>{
      this.trendingMoviesResult = result.results;

    })
  }

}
