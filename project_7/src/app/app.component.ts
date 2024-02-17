import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project_7';
  products:any[]=[];
  c:number=0;
  
  constructor()
  {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      this.products=data
    })
  }
  add(){
    this.c++;
  }
}
