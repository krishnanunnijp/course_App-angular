import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-api',
  templateUrl: './view-api.component.html',
  styleUrls: ['./view-api.component.css']
})
export class ViewApiComponent {
data:any=[]

constructor(private api:ApiService){
  this.api.fetchCourses().subscribe(
    (generatedValue)=>{
      this.data=generatedValue
    }
  )

}
}
