import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { SearchComponent } from './ui/search/search.component';
import { MovieDetailsComponent } from './ui/movie-details/movie-details.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'search', component : SearchComponent},
  {path : 'movie/:id', component : MovieDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
