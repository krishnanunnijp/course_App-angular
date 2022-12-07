import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
   }
  fetchCourse=(readValue:any)=>{
    return this.http.post("http://localhost:8080/add",readValue)
  }
  fetchCourses=()=>{
    return this.http.get("http://localhost:8080/viewAll")
  }
  deleteCourse=(readValue2:any)=>{
    return this.http.delete("http://localhost:8080/delete",readValue2)
  }
}
