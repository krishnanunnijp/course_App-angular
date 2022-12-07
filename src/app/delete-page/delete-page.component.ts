import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-delete-page',
  templateUrl: './delete-page.component.html',
  styleUrls: ['./delete-page.component.css']
})
export class DeletePageComponent {
data:any={}
name=""

constructor(private api:ApiService){}
deleteEN=()=>{
  this.data={
    "name":this.name
  }
  
  console.log(this.data)
  this.api.deleteCourse(this.data).subscribe(
    (generated)=>{
      console.log(generated);
    }
  )
}
}
