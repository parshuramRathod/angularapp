import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/userDetails';

@Component({
  selector: 'app-assment-registration-form-tdf',
  templateUrl: './assment-registration-form-tdf.component.html',
  styleUrls: ['./assment-registration-form-tdf.component.css']
})
export class AssmentRegistrationFormTDFComponent implements OnInit {
 
  submitted:boolean= false;
  defaultValue:string='Mumbai';
  defaultGender:string= "Male";
  user=new User();

  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'}
  ]

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    this.submitted=true;
    console.log(form);
    this.user.firstName= form.value.myRegistrationForm.firstname;
    this.user.lastName= form.value.myRegistrationForm.lastname;
    this.user.dateOfBirth= form.value.myRegistrationForm.birthdate;
    this.user.email= form.value.myRegistrationForm.email;
    this.user.mobileNo= form.value.myRegistrationForm.mobno;
    this.user.city= form.value.myRegistrationForm.city;
    this.user.gender=form.value.myRegistrationForm.gender;
    this.user.password=form.value.myRegistrationForm.password;
    this.user.confirmpassword=form.value.myRegistrationForm.confirmpassword;
    form.reset();
    // form.controls.myRegistrationForm['city'].setValue("kolkata");
    // form.controls.myRegistrationForm['gender'].setValue("Male");

    this.saveStudentData(this.user);


  }
saveStudentData(userr:User){
  console.log(userr.firstName);
  

}  

}
