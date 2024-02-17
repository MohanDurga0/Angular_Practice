import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'component2';
  value=""
  username="";
  password="";
  count=0;
  incr() {
    this.count++;
   }
  decr(){
    this.count--;
  }
  reset()
  {
    this.count=0;
  }
}
