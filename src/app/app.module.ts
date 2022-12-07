import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule}from "@angular/common/http";
import { ViewApiComponent } from './view-api/view-api.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DeletePageComponent } from './delete-page/delete-page.component'
const myRoute:Routes=[
{
  path:"",
  component: AddCourseComponent
},{
  path:"view",
  component: ViewApiComponent
},{
  path:"delete",
  component: DeletePageComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    ViewApiComponent,
    NavbarComponent,
    DeletePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
