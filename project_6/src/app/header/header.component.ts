import { Component,Input,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() count:number=0;
  @Output() p:any;
  isDark=false
  change(){
    if(this.isDark){
      this.isDark=false;
    }
    else{
      this.isDark=true;
    }
  }
}
