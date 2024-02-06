import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 // title = 'counter';
 count =0;
 isEvenOdd=false;
 incr() {
  this.count++;
  this.isEvenOdd= (this.count%2==0)
 }
 decr(){
  this.count--;
  this.isEvenOdd= (this.count%2==0)
 }
 reset(){
  this.count=0;
 }

}
