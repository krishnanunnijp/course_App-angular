import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(readValue2)
   };
   
    return this.http.delete("http://localhost:8080/delete",options)
  }
  searchCourse=(readValue3:any)=>{
    return this.http.post("http://localhost:8080/search",readValue3)
  }
}
