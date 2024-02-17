import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
day!:number;
isLogin=false;
login(){
this.isLogin=true
}
  click(){

  }
}
