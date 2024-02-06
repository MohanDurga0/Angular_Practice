import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'input';
  value="";
  name ="";
  Password="";
  Email="";
fun(event:any)
{
	this.value=event.target.value
}
}
