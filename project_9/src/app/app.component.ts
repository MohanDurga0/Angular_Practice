import { Component } from '@angular/core';
import { FetchDataService } from './fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project_9';
  product:any;

  constructor(private fs:FetchDataService){
    this.fs.getData().subscribe((data)=>{this.product=data;console.log(this.product=data);
    })
  }
fun(e:any){
  console.log(e.target.textContent)
  this.fs.getCategoryData(e.target.textContent).subscribe((data)=>this.product=data);
}
}
