import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  defaultValue:string= "Angular";
  employee = new Employee();
  submitted: boolean = false;
  defaultGender:string= "Male";
  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'}
  ]

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm) {
    this.submitted = true;
    this.employee.course = form.value.course;
    this.employee.userName = form.value.userDetails.username;
    this.employee.email = form.value.userDetails.email;
    this.employee.gender = form.value.gender;
    form.reset();
    form.controls['course'].setValue("Angular");
    form.controls['gender'].setValue("Male")   


   this.saveEmployeeData(this.employee);
  }

  saveEmployeeData(emp:Employee) {
    console.log(emp.userName);
   console.log(emp.course);
   console.log(emp.email);
   
  }

}
