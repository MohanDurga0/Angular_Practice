import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  value="";
  name ="";
  Password="";
  Email="";
fun(event:any)
{
	this.value=event.target.value
}
}
