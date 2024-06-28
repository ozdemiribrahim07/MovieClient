import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService } from '../../services/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  constructor(private movieApiService : MovieApiService) { }

  ngOnInit(): void {
  }

  searchForm = new FormGroup({
    'searchText' : new FormControl(null)
  });

  onSubmit(){
    console.log(this.searchForm.value);
    this.movieApiService.searchMovie(this.searchForm.value).subscribe((result)=>{
      console.log(result);
    })
  }

}
