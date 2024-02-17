import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project_6';
  products:any[]=[];
  c:number=0;
  @ViewChild(HeaderComponent) hc!:HeaderComponent;
  
  constructor()
  {
    fetch("https://dummyjson.com/recipes")
    .then((response) => response.json())
    .then((data) => {
      this.products=data.recipes
    });
  }
  add(){
    this.c++;
  }
}
