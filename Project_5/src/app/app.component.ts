import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project_5';
  arr:any=[];
  constructor()
  {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      this.arr = data
    })
  }
}
