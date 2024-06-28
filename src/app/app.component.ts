import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  navbar : any;
  @HostListener('document:scroll') onScroll() {
   if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    this.navbar = {
      'background-color' : '#000000',
    }
  }
  else {
    this.navbar = {}
  }
}

}
