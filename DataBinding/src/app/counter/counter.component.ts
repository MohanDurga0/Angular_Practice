import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
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
