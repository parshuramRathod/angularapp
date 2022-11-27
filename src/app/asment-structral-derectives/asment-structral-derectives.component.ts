import { Component, OnInit } from '@angular/core';
import { Course } from '../models/topCourses';

@Component({
  selector: 'app-asment-structral-derectives',
  templateUrl: './asment-structral-derectives.component.html',
  styleUrls: ['./asment-structral-derectives.component.css']
})
export class AsmentStructralDerectivesComponent implements OnInit {
  title:string= "TOP 3 Courses"
  courses: Course[] = [
    { srNo: 1, courseName: 'Business Intelligence', skill: "Data Preparation, Data Mining, Data Visualization and Reporting" },
    { srNo: 2, courseName: 'Data Science', skill: "Python Programming, Predictive Analytics, Machine Learning, Data Visualization,Basic & Advanced SQL"},
    { srNo: 3, courseName: 'Web Development', skill: 'HTML, CSS, Javascript, Object-Oriented Analysis & Design'}
  ]
  selctedCricketer: string;

  //using ngSwitch
  getCricterdetails(value){
    console.log(value.target.value);
    this.selctedCricketer = value.target.value;
    
  }

  
  constructor() { }

  ngOnInit() {
  }

}
