import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project_1';
  color="";
  btn:any;
  Red(){
    this.color="red";
  }
  Green(){
   this.color="green";
  }
  Blue(){
    this.color="blue";
  }
  fun(e:Event){
    this.btn=e.target as HTMLButtonElement;
    this.color=this.btn.value;
  }
  onColorChange(e:Event){
    this.color=(e.target as HTMLInputElement).value;
  }
}
