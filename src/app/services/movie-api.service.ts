import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private httpClient : HttpClient) { }

  baseUrl = "https://api.themoviedb.org/3"
  apikey = "90e66d8a0e6f93a4ab25b107946c74d5"

  bannerapiData() : Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/trending/all/week?language=tr-TR&api_key=${this.apikey}`)
  }

  searchMovie(data :any){
    return this.httpClient.get(`${this.baseUrl}/search/movie?api_key=${this.apikey}&query=${data.searchText}`)
  }

  getTrendingMovies() : Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apikey}`)
  }

}
