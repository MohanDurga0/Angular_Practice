import { Component,ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
@ViewChild(HeaderComponent) hello!:HeaderComponent
  title = 'project_2';
  c=0;
  v=''

 // name:string="mohan";
  i(e:any)
  {
    this.c=e
  }
  incre()
  {
    this.c++;
  }
  decre(){
    this.c--;
  }
  reset(){
    this.c=0
  }
  fun(){
    this.v=this.hello.value
  }
}
