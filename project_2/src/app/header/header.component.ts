import { Component,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Output() mohan=new EventEmitter();
@Input() durga:any;

count:number=0
name:string=""
value="";
increment(){
  this.mohan.emit(this.count++);
  //this.count++;
  this.name="Mohan";
}
decrement(){
  this.mohan.emit(this.count--);
  //this.count--;
  this.name="";
}
reset(){
  this.mohan.emit(0);
  //this.count=0
}
}
