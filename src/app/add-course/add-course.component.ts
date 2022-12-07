import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  title=""
  description=""
  venue=""
  duration=""
  date=""
  constructor(private api:ApiService){

  }
  

  data:any={
  }

  readValue=()=>{
    this.data={
      "title":this.title,
      "description":this.description,
      "venue":this.venue,
      "duration":this.duration,
      "date":this.date
    }
    console.log(this.data)
    this.api.fetchCourse(this.data).subscribe(
      (generatedO:any)=>{
        console.log(generatedO)
        if(generatedO.status=="success"){
          alert("added successfully")
          this.title=""
          this.description=""
          this.venue=""
          this.duration=""
          this.date=""
        }
      }
    )
  }
}
