import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent {
  constructor(private api:ApiService){}
  title=""

  data1:any=[]
  
  searchE=()=>{
    let data={
      "title":this.title
    }
    this.api.searchCourse(data).subscribe(
      (generated:any)=>{
        if(generated.length!=0){
        console.log(generated)
        this.data1=generated}
        else{
          alert("invalid")
        }

      }
    )

  }

}
