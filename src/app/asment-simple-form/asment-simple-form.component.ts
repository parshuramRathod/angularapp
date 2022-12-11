import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {StudentData} from '../models/student';

@Component({
  selector: 'app-asment-simple-form',
  templateUrl: './asment-simple-form.component.html',
  styleUrls: ['./asment-simple-form.component.css']
})
export class AsmentSimpleFormComponent implements OnInit {
  student=new StudentData();
  defaultDepartment:string="Electrical and Electronics";
  defaultSchool:string="HSC";
  defaultCourse:string="Engineering";
  submitted:boolean=false;

  onSubmit(studentForm:NgForm){
    console.log(studentForm);
   this.submitted=true;
   this.student.firstName=studentForm.value.Firstname;
   this.student.lastName=studentForm.value.Lastname;
   this.student.dateOfBirth=studentForm.value.studentDetails.DateofBirth;
   this.student.gender=studentForm.value.studentDetails.gender;
   this.student.email=studentForm.value.studentDetails.email;
   this.student.school=studentForm.value.studentDetails.School;
   this.student.department=studentForm.value.studentDetails.Department;
   this.student.address=studentForm.value.studentDetails.address;
   this.student.course=studentForm.value.studentDetails.course;
   this.student.mobileNo=studentForm.value.studentDetails.mobNo;
   this.studentDataSave(this.student)

  }

  studentDataSave(studenValue:StudentData){
console.log(studenValue.firstName);
console.log(studenValue.lastName);
console.log(studenValue.dateOfBirth);
console.log(studenValue.gender);
console.log(studenValue.email);
console.log(studenValue.school);
console.log(studenValue.department);
console.log(studenValue.course);
console.log(studenValue.mobileNo);
  }
  constructor() { }

  ngOnInit() {
  }

}
